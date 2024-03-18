import React, { useEffect, useState } from 'react';
import styles from './ShowCoinDetails.module.css'
import axios from 'axios';

import MarketDatas from './MarketDatas/MarketDatas';
import Description from './Description/Description';

function ShowCoinDetails({ CoinID }) {

    const [Details, setDetails] = useState([])

    //FAZENDO REQUISIÇÃO DA API
    async function GetCoinDetails() {

        //DADOS DE AUTENTICAÇÃO DA API

        const url = `https://api.coingecko.com/api/v3/coins/${CoinID}`;

        const options = {
            headers:

                { 'x-cg-demo-api-key': 'CG-y7JD4X5LFAN3HWC2qSU1WvYw' }

        };

        //FAZENDO REQUISIÇÃO
        await axios.get(url, options)

            .then((response) => {

                setDetails(response.data);

            })

            .catch(error => console.error('error:', error));

    }


    useEffect(() => {

        GetCoinDetails();

    }, [])


    return (
        <section>

            {/*VERIFICANDO SE OS DADOS JÁ ESTÃO DISPONIVEIS ANTES DE DISTRIBUIR PARA OS COMPONENTS */}

            {Details.length == 0 ? 'AGUARDANDO OS DADOS' :

                <section className={styles.MainContainer}>
                    
                    {/*IMPRIMINDO AS DESCRIÇÕES */}
                    <div className={styles.DescriptionContainer}>
                        <Description Description={Details.description} />
                    </div>

                    {/*IMPRIMINDO OS DADOS DE MERCADO */}
                    <div className={styles.MarketDataContainer}>
                        <MarketDatas Details={Details} />
                    </div>

                </section>

            }


        </section>
    );
}

export default ShowCoinDetails;
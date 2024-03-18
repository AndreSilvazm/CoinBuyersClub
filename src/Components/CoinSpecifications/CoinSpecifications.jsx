import React, { useEffect } from 'react';
import ShowCoinDetails from '../ShowCoinDetails/ShowCoinDetails';
import { useParams } from 'react-router-dom';
import CoinPageWidget from '../Widgets/CoinPageWidget';
import styles from './CoinSpecifications.module.css'

function CoinSpecifications(props) {

    const { id } = useParams(); //PEGANDO O ID DA MOEDA
    const {symb} = useParams() //PEGANDO O SYMBOLO DA MOEDA
    const {name} = useParams() // PEGANDO O NOME DA MOEDA



    return (
        <div>

            <section className={styles.WidgetSection}>
                <h1>{name} </h1>
                <CoinPageWidget CoinName={`${symb}`}/>
            </section>

            <ShowCoinDetails CoinID={id} />
        </div>
    );
}

export default CoinSpecifications;
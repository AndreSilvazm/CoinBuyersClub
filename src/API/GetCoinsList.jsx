import axios from 'axios';
import { useEffect, useState } from 'react'

function GetCoinsList() {

    const[Moedas, setMoedas] = useState([])

    async function ConsumirAPI() {

        //DADOS DE AUTENTICAÇÃO DA API

        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum&category=layer-1&order=market_cap_desc&per_page=10';


        const options = { headers:
            
            { 'x-cg-demo-api-key': 'CG-y7JD4X5LFAN3HWC2qSU1WvYw' } 
        
        };

        //FAZENDO REQUISIÇÃO NA API
        await axios.get(url, options)

            .then(response => setMoedas(response.data))

            .catch(error => console.error('error:', error));


    }

    useEffect(() => {

        ConsumirAPI()

    }, []);

    return (

        Moedas

    );
}

export default GetCoinsList;

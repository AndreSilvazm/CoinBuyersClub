import React from 'react';

import ShowCoinDetails from './ShowCoinDetails/ShowCoinDetails';
import CoinFeaturesWidget from '../Widgets/CoinFeatures'
import styles from './CoinDetailSection.module.css'

import { useParams } from 'react-router-dom';

function CoinDetailSection(props) {

    const { id } = useParams(); //PEGANDO O ID DA MOEDA DA URL
    const { symb } = useParams() //PEGANDO O SYMBOLO DA MOEDA DA URL
    const { name } = useParams(); //PEGANDO O NAME DA URL

    return (
        <section className={styles.CoinDatailsMain}>

            <article className={styles.WidgetSection}>
                <h1>{name} </h1>
                <CoinFeaturesWidget CoinName={`${symb}`} />
            </article>

            <article className={styles.ShowDetailsSection}>
                <ShowCoinDetails CoinID={id} />
            </article>


        </section>
    );

}

export default CoinDetailSection;
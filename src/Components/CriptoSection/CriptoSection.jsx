import React from 'react';
import styles from './CriptoSection.module.css'
import ShowCoinsList from './ShowCoins/ShowCoinList';
import HomePageWidgets from '../Widgets/HomePageWidgets';


function CriptoSection(props) {

    
    return (
        <>

            <main className={styles.CriptoMainContainer}>

                <section className={styles.CoinSection}>

                    <h1 className={styles.CoinSectionTitle}>Analise como um <span className={styles.CustomWord}>Wolf</span></h1>

                    <p>Aqui você tem acesso às melhores informações sobre Criptos!</p>

                    <div className={styles.CoinsListContainer}>

                        {/*IMPRIMINDO AS MOEDAS */}

                        <ShowCoinsList />

                    </div>

                </section>

                <section className={styles.WidgetContainer}>

                    {/*MOSTRANDO WIDGET DAS MOEDAS*/}
                    <h1>Acompanhe em tempo real</h1>
                    <HomePageWidgets />

                </section>



            </main>


        </>
    );
}

export default CriptoSection;
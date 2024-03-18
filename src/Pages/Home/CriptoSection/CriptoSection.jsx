import React from 'react';
import styles from './CriptoSection.module.css'
import ShowCoinsList from './ShowCoinsList/ShowCoinsList';
import MostPopularCoinsWidget from '../Widgets/MostPopularCoins';


function CriptoSection() {


    return (
        <>

            <main className={styles.CriptoMainContainer}>

                <section className={styles.CoinSection}>

                    <article className="">

                        <h1 className={styles.CoinSectionTitle}>Analise como um <span className={styles.CustomWord}>Wolf</span></h1>

                        <p>Aqui você tem acesso às melhores informações sobre Criptos!</p>

                    </article>

                    <div className={styles.CoinsListContainer}>

                        {/*IMPRIMINDO AS MOEDAS */}

                        <ShowCoinsList />

                    </div>

                </section>

                <section className={styles.WidgetContainer}>

                    {/*MOSTRANDO WIDGET DAS MOEDAS*/}
                    <h1>Cotação em tempo real</h1>
                    <MostPopularCoinsWidget />

                </section>



            </main>


        </>
    );
}

export default CriptoSection;
import React from 'react';
import styles from './LandingPage.module.css'

import Header from '../../../Components/Header/Header';
import BackgroundVideo from '../../../Midias/Videos/LandingPageVideo.mp4'


function LandingPage() {
    return (
        <>
            <section className={styles.LadingPageContainer}>
                <Header />

                {/*IMPLEMENTAÇÃO DO VIDEO DE BACKGROUND */}
                <video autoPlay loop muted src={BackgroundVideo} className={styles.bgVideo}></video>

                
                <article className={styles.contentContainer}>

                    <h1>O club dos durões de <span className={styles.CustomizeWord}>Wall Street</span>
                    </h1>

                </article>

            </section>

        </>
    );
}

export default LandingPage;
import React from 'react';
import Header from '../Header/Header';
import BackgroundVideo from '../../Midias/Videos/LandingPageVideo.mp4'
import styles from './LandingPage.module.css'

function LandingPage() {
    return (
        <>
            <section className={styles.LadingPageContainer}>

                <Header />

                <video autoPlay loop muted src={BackgroundVideo} className={styles.bgVideo}></video>


                <article className={styles.contentContainer}>

                    <h1>O clube dos durões de <span className={styles.CustomizeWord}>Wall Street</span></h1>


                </article>

            </section>

        </>
    );
}

export default LandingPage;
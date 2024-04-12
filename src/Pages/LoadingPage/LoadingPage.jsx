import React, { useEffect } from 'react';
import styles from './LoadingPage.module.css'

import logo from '../../Midias/logo.png'
import { useNavigate } from 'react-router-dom';

function LoadingPage(props) {

    const navigate = useNavigate()



    setTimeout(() => {

        navigate('/')
    }, 2000)




    return (
        <div className={styles.LoadingContainer}>

            <section className={styles.LoadingSection}>
                <img src={logo} alt="" />

                <h1>CARREGANDO</h1>

                <div className={styles.loadingBar}>

                </div>

            </section>


        </div>
    );
}

export default LoadingPage;
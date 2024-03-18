import React from 'react';
import { useEffect, useState, useRef } from 'react'
import GetCoinsList from '../../../API/GetCoinsList';
import styles from './ShowCoins.module.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

function ShowCoins() {

    const carousel = useRef();

    const [width, setWidth] = useState(0);

    function handleResize() {
                
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth); 

    }

    useEffect(() => {


        window.addEventListener('resize', handleResize); //TODA VEZ QUE O TAMANHO DA TELA FOR MUDADO, SERÁ ATRIBUIDO UM NOVO VALOR AO WIDTH

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []); 


    return (
        <>
            <motion.div ref={carousel} whileTap={{ cursor: "grabbing" }} className={styles.Carousel}>

                <motion.div

                 className={styles.inner} 

                 drag={width < 1900 ? "x" : false} 

                 dragConstraints={width < 1900 ? { right: 0, left: -width } : false}>

                    {/*IMPRIMINDO DADOS DA API DENTRO DO CAROUSEL */}

                    {GetCoinsList().map((e) => {

                        return (

                            <section key={e.id} className={styles.ListContainer} >

                                <img src={e.image} alt="Coin Img" className={styles.coinImg} />

                                <h1 >{e.name}</h1>

                                <p>{e.symbol}</p>

                                <span className={styles.currentPrice}>USD {e.current_price}</span>

                                <Link className={styles.DetalhesLink} to={`/CoinDetails/${e.symbol}/${e.id}/${e.name}`}>Mais</Link>

                            </section>
                        );
                    })}

                </motion.div>
            </motion.div>
        </>
    );
}

export default ShowCoins;

import React from 'react';
import style from './CoinValuesContainer.module.css'
import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

import { GoGraph } from "react-icons/go";
import { IoIosTrendingUp } from "react-icons/io";
import { LiaCoinsSolid } from "react-icons/lia";
import { MdPeopleAlt } from "react-icons/md";



function CoinValuesContainer({ Details }) {

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

            <motion.div ref={carousel} whileTap={{ cursor: "grabbing" }} className={style.Carousel}>
                <motion.div

                    className={style.inner}

                    drag={width < 1900 ? "x" : false}

                    dragConstraints={width < 1900 ? { right: 0, left: -width } : false}>



                    {/* VARIAÇÃO DE PREÇO */}
                    <section >

                        
                        <h1><GoGraph/></h1>
                        <h1>Variações 24H</h1>
                        <article>

                            <h2>preço</h2>
                            <span>
                                {Details.market_data.price_change_24h_in_currency.usd} USD
                            </span>

                        </article>

                        <article>

                            <h2>cap de mercado</h2>
                            <span>
                                {Details.market_data.market_cap_change_24h} USD
                            </span>

                        </article>


                    </section>

                    {/* ALTA/BAIXA ULTIMAS 24 HORAS */}

                    <section >
                        <h1><IoIosTrendingUp/></h1>
                        <h1>Trends 24H</h1>
                        <article>

                            <h2>Maior alta</h2>
                            <span>
                                {Details.market_data.high_24h.usd} USD
                            </span>


                            <h2>Menor baixa</h2>
                            <span>
                                {Details.market_data.low_24h.usd} USD
                            </span>

                        </article>
                    </section>

                    {/*VOLUME DE MERCADO */}
                    <section>
                        <h1><LiaCoinsSolid/></h1>
                        <h1>Mercado</h1>

                        <article>
                            <h2>Rank de captalização</h2>
                            <span>{Details.market_data.market_cap_rank}</span>
                        </article>

                        <article>
                            <h2>Volume de mercado</h2>
                            <span>{Details.market_data.total_volume.usd}</span>
                        </article>
                    </section>

                    {/*VOLUME DE MERCADO */}
                    <section>
                        <h1><MdPeopleAlt/></h1>
                        <h1>COMUNIDADE</h1>

                        <article>
                            <h2>Seguidores X</h2>
                            <span>{Details.community_data.twitter_followers}</span>
                        </article>

                        <article>
                            <h2>Likes facebook</h2>
                            <span>{Details.community_data.facebook_likes == null ? 'Sem dados' :Details.community_data.facebook_likes }</span>
                        </article>
                    </section>


                </motion.div>





            </motion.div>






        </>
    );
}

export default CoinValuesContainer;
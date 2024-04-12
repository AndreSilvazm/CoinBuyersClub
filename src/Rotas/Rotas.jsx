import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home/Home';
import CoinFeaturesPage from '../Pages/CoinFeaturesPage/CoinFeaturesPage'
import LoadingPage from '../Pages/LoadingPage/LoadingPage';

function Rotas() {

    const [Loading, setLoading] = useState(true)

    useEffect(() => {

        setTimeout(() => {

            setLoading(false)

        }, 2000)
    }, [])

    return (
        <>

            <Router>
                <Routes>

                    {/*
                    
                    
                    
                                        {Loading ? <Route path='/' element={<LoadingPage />} />
                    
                                            : <Route path='/' element={<Home />} />
                    
                                        }
                    \
                    
                    
                    */}
                    
                    <Route path='/' element={<Home/>}/>
                    <Route path='/CoinFeatures/:symb/:id/:name' element={<CoinFeaturesPage />} />
                </Routes>
            </Router>



        </>
    );
}

export default Rotas;
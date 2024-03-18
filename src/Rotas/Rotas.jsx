import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from '../Pages/Home/Home';
import CoinFeaturesPage from '../Pages/CoinFeaturesPage/CoinFeaturesPage'

function Rotas() {
    return (
        <>

            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/CoinFeatures/:symb/:id/:name' element={<CoinFeaturesPage/>}/>
                </Routes>
            </Router>


            
        </>
    );
}

export default Rotas;
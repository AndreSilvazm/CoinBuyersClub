import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from '../Pages/Home/Home';
import CoinDetailsPage from '../Pages/CoinDetailsPage/CoinDetailsPage';

function Rotas() {
    return (
        <>

            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/CoinDetails/:symb/:id/:name' element={<CoinDetailsPage/>}/>
                </Routes>
            </Router>


            
        </>
    );
}

export default Rotas;
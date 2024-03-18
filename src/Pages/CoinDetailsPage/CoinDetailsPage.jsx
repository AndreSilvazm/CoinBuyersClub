import React from 'react';
import CoinSpecifications from '../../Components/CoinSpecifications/CoinSpecifications';
import Header from '../../Components/Header/Header';
import styles from './CoinDetailsPage.module.css'
import WalletButton from '../../Components/WalletButton/WalletButton';

function CoinDetailsPage(props) {
    return (
        <div className={styles.CoinDatailsMain}>
            <Header/>
            <WalletButton/>
            <CoinSpecifications/>
            
        </div>
    );
}

export default CoinDetailsPage;
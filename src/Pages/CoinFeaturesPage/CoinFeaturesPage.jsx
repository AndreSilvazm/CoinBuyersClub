import React from 'react';

import Header from '../../Components/Header/Header';
import WalletIntegration from './WalletIntegration/WalletIntegration';

import CoinDetailSection from './CoinDetailSection/CoinDetailSection';

function CoinDetailsPage() {

    return (
        <main>

            <Header/>
            <WalletIntegration/>
            <CoinDetailSection/>

        </main>
    );
}

export default CoinDetailsPage;
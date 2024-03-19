import React, { useState } from 'react';
import styles from './WalletIntegration.module.css'
import { IoWallet } from "react-icons/io5";
import { FaEthereum } from "react-icons/fa6";
import { toast } from 'react-toastify';



function WalletIntegration() {

  const [connected, setConnected] = useState(false);

  const [balance, setBalance] = useState(0);


  const WalletConectedAlert = () => toast.success(`Carteira conectada com sucesso`, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  //PARTE LÓGICA
  function ConvertWeiToEther(wei) {

    const ether = wei / 10 ** 18;

    return ether.toFixed(18);  //EXIBINDO O NUMERO COM 18 CASAS DECIMAIS
  }

  async function connectToWallet() {

    if (window.ethereum) {

      try {
        // SOLICITANDO PERMISSÃO DO USUÁRIO
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setConnected(true);
        WalletConectedAlert()

        // REQUISITANDO O SALDO DO ETHEREUM
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        const address = accounts[0];
        const balance = await window.ethereum.request({ method: 'eth_getBalance', params: [address] });

        // CONVERTENDO O SALDO DE WEI PARA ETHEREUM
        setBalance(ConvertWeiToEther(parseInt(balance)));

      }

      catch (error) {
        console.error('Erro ao conectar à carteira MetaMask:', error);
      }

    }

    else {
      alert('A carteira MetaMask não está instalada. Por favor, instale e tente novamente.');
    }
  };

  //PARTE DE UI
  function ConnectButton() {

    return (

      <div className={styles.ConnectButtonContainer}>

        <button onClick={connectToWallet} className={styles.WalletButton}> <IoWallet /></button>
        <span>Wallet</span>

      </div>

    )

  }

  function ShowEthereumBalance() {

    return (

      <>

        <p className={styles.EtherBalance}><FaEthereum /> Saldo: {balance}</p>


      </>
    )

  }

  return (
    <section className={styles.WalletContainer}>
      {connected ? ShowEthereumBalance() : ConnectButton()}
    </section>
  );
}

export default WalletIntegration;

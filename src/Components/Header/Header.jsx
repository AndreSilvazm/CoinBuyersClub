import React from 'react';
import Logo from '../../Midias/logo.png'
import styles from './Header.module.css'
import { useNavigate } from 'react-router-dom';

function Header(props) {

    const navigate = useNavigate('')

    return (
        <>
            <header>

                <section className={styles.Container} onClick={()=>{navigate('/')}}>

                    <div className={styles.ImgContainer} >

                        <img src={Logo} alt="Logo" />

                    </div>

                    <h1 className={styles.SiteName}>Coin <br /> buyers</h1>
                </section>



            </header>
        </>
    );
}

export default Header;
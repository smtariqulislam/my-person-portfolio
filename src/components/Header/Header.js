import React from 'react';
import CTA from './CTA';
import './Header.css'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial';


const Header = () => {
    return (
        <header>
            <div id='home' className="container header__container">
                <h5>hello</h5>
                <h1>tariqul islam</h1>
                <h5 className="text-light">fullstack developer</h5>
                <CTA></CTA>
                <HeaderSocial></HeaderSocial>


                <div className="me">
                    <img src={ME} alt="" />
                </div>
                <a href='#contact' className='scroll__down'>scroll down</a>


            </div>
            
        </header>
    );
};

export default Header;
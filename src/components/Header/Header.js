import React from 'react';
import CTA from './CTA';
import './Header.css'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial';


const Header = () => {
    return (
        <header>
            <div id='home' className="container header__container">
                <h5>Hi, I'm </h5>
                <h1>S M Tariqul Islam</h1>
                <h5 className="text-light">Fullstack Developer</h5>
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
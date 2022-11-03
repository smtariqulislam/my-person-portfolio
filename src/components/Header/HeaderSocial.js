import React from 'react';
import { BsLinkedin, BsFacebook, BsGithub } from 'react-icons/bs'
// import { AiFillFacebook } from 'react-icons/ai'


const HeaderSocial = () => {
    return (
        <div className='header__socials'>
            <a href="linked" target="_blank"><BsLinkedin></BsLinkedin></a>
            <a href="linked" target="_blank"><BsFacebook></BsFacebook></a>
            <a href="linked" target="_blank"><BsGithub></BsGithub></a>
            
        </div>
    );
};

export default HeaderSocial;
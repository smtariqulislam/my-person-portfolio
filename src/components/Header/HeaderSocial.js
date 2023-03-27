import React from 'react';
import { BsLinkedin, BsFacebook, BsGithub } from 'react-icons/bs'
// import { AiFillFacebook } from 'react-icons/ai'


const HeaderSocial = () => {
    return (
      <div className="header__socials">
        <a href="https://www.linkedin.com/in/sm-tariqulislam/" target="__blank">
          <BsLinkedin></BsLinkedin>
        </a>
        <a href="https://www.facebook.com/smtariqulislam00" target="__blank">
          <BsFacebook></BsFacebook>
        </a>
        <a href="https://github.com/smtariqulislam" target="__blank">
          <BsGithub></BsGithub>
        </a>
      </div>
    );
};

export default HeaderSocial;
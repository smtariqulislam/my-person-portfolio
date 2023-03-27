import React from 'react';
import './Nav.css'

import { AiOutlineHome, AiOutlineContacts, AiOutlineUser } from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import { MdMiscellaneousServices } from "react-icons/md";
import { useState } from 'react';



const Nav = () => {
    const [activeNav,setActiveNav] =useState('#')
    return (
      <nav>
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome></AiOutlineHome>
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser></AiOutlineUser>
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <BiBook></BiBook>
        </a>
        <a
          href="#services"
          onClick={() => setActiveNav("#services")}
          className={activeNav === "#services" ? "active" : ""}
        >
          <MdMiscellaneousServices></MdMiscellaneousServices>
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <AiOutlineContacts></AiOutlineContacts>
        </a>
      </nav>
    );
};

export default Nav;
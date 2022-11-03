import React from 'react';
import './Nav.css'

import { AiOutlineHome, AiOutlineContacts, AiOutlineUser } from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'



const Nav = () => {
    return (
        <nav>

            <a href="#home"><AiOutlineHome></AiOutlineHome></a>
            <a href="#home"><AiOutlineUser></AiOutlineUser></a>
            <a href="#home"><BiBook></BiBook></a>
            <a href="#home"><AiOutlineHome></AiOutlineHome></a>
            <a href="#home"><AiOutlineContacts></AiOutlineContacts></a>
            
        </nav>
    );
};

export default Nav;
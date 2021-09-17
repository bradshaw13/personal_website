import React from 'react';
//import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';
import * as GiIcons from 'react-icons/gi';
import * as BsIcons from "react-icons/bs";
//import * as GrIcons from 'react-icons/gr';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Recipes',
        path: '/recipes',
        icon: <GiIcons.GiCookingPot/>,
        cName: 'nav-text'
    },
    {
        title: 'Travel',
        path: '/travel',
        icon: <IoIcons.IoAirplaneSharp/>,
        cName: 'nav-text'
    },
    {
        title: 'About Me',
        path: '/aboutme',
        icon: <BsIcons.BsFillPersonFill/>,
        cName: 'nav-text'
    },
    /*,
    {
        title: 'Portfolio',
        path: '/portfolio',
        icon: <AiIcons.AiFillFolder/>,
        cName: 'nav-text'
    },*/

];
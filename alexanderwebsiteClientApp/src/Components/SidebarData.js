import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';
import * as GrIcons from 'react-icons/gr';

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
        icon: <GiIcons.GiCookingPot/>,
        cName: 'nav-text'
    },
    {
        title: 'Portfolie',
        path: '/portfolio',
        icon: <AiIcons.AiFillFolder/>,
        cName: 'nav-text'
    },

];
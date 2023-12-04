import { useState } from 'react';
import {logo} from "../assets";
import { navLinks } from '../constants';

const Nav = () => {
    return (
            <nav className="w-full flex py-6 mx-6 justify-between items-center navbar">
            <img src= {logo} alt="lab-logo" />
            <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
                {navLinks.map((nav, index) => (
                    <li
                    key={nav.id}
                    className={`font-normal cursor-pointer text-white text-[16px] mr-10`}
                    >
                    <a href={`/${nav.id}`}>
                        {nav.title}
                    </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav 
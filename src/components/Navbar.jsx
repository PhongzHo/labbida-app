import { useState } from 'react';
import {logo} from "../assets";
import { navLinks } from '../constants';

const Nav = () => {
    return (
        <nav className="w-full pt-4 px-6 flex justify-between navbar">
            <img src= {logo} alt="lab-logo" />
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li
                    key={nav.id}
                    className={`font-normal cursor-pointer text-white text-[18px] mr-10`}
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
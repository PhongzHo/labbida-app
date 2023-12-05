import {Routes, Route, Link} from 'react-router-dom';
import {logo} from "../assets";
import { navLinks } from '../constants';
import { Home, News, Library, ContactJob  } from '../pages';

const Nav = () => {
    return (
        <div>
            <nav className="w-full pt-4 px-6 flex justify-between navbar">
            <img src= {logo} alt="lab-logo" />
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li
                    key={nav.id}
                    className={`font-normal cursor-pointer text-white text-[18px] mr-10`}
                    >
                    <Link to={`${nav.id}`}>
                        {nav.title}
                    </Link>
                    </li>
                ))}
            </ul>
        </nav>
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/news' element={<News />} />
            <Route path='/contactJob' element={<ContactJob />} />
            <Route path='/library' element={<Library />} />

        </Routes>

        </div>
    );
}

export default Nav 
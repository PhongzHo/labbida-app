import {Routes, Route, Link} from 'react-router-dom';
import {logo} from "../assets";
import { navLinks } from '../constants';
import { Home, News, Library, ContactJob, Member  } from '../pages';

const Nav = () => {
    return (
        <div>
            <header className="fixed top-0 bg-black shadow-sm shadow-slate-200 flex w-full p-4 px-6 justify-between z-10">
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
                <Link to={`member`}>
                    <button className='border border-slate-500 hover:bg-slate-600 py-2 px-4 rounded-full text-white text-[18px]' type='button'>
                     Tạo thành viên 
                    </button>
                </Link>
                
            </ul>
        </header>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/labbida-app' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/news' element={<News />} />
            <Route path='/contactJob' element={<ContactJob />} />
            <Route path='/library' element={<Library />} />
            <Route path='/member' element={<Member />} />
        </Routes>

        </div>
    );
}

export default Nav 
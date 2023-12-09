import { Link } from "react-router-dom";
import { logo } from "../assets";
// import { navLinks } from '../constants';

const Nav = () => {
  return (
    <div>
      <header className="fixed top-0 bg-black shadow-sm shadow-slate-200 flex w-full p-4 px-6 justify-between z-10">
        <Link to="/">
        <img src={logo} alt="lab-logo" />
        </Link>
        <ul className="text-white flex items-center justify-between gap-10">
          <Link to="/"> Trang Chủ</Link>
          <Link to="/api/news"> Tin Tức</Link>
          <Link to="/contactJob"> Liên Hệ và Tuyển Dụng</Link>
          <Link to="/library"> Thư Viện</Link>
          <Link to="/member">
            <button className="border-2 border-white p-2 hover:bg-slate-700 rounded-lg">
            Thành viên LAB
            </button>
          </Link>
        </ul>
      </header>
      
    </div>
  );
};

export default Nav;

import { Link } from "react-router-dom";
import { logo } from "../assets";
// import { navLinks } from '../constants';

const Nav = () => {
  return (
    <div>
      <header className="fixed w-full top-0 bg-black shadow-sm shadow-slate-200 flex p-4 px-6 justify-between z-10">
        <Link to="/">
        <img src={logo} alt="lab-logo" />
        </Link>
        <ul className="text-white flex items-center justify-between gap-10 max-md:hidden max-sm:hidden">
          <Link to="/blog"> Blog</Link>
          <Link to="/contactJob"> Liên Hệ và Tuyển Dụng</Link>
          <Link to="/library"> Thư Viện</Link>
          <Link to="/feedback" 
            className="border p-2 rounded-full px-4"
          >
            Góp ý
          </Link>
        </ul>
      </header>
      
    </div>
  );
};

export default Nav;

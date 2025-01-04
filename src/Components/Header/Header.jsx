/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import './Header.css'

const Header = ({ setToggle }) => {
  const navStyle = "hover:text-emerald-600 px-2 py-1 rounded-lg  hover:font-semibold active:scale-95 transition-all";
  return (
    <div className="shadow-2xl ">
      <nav className="max-w-screen-2xl md:mx-auto mx-10 md:flex-row flex-col flex justify-between items-center py-6 ">
        <NavLink to={"/"}><img className="w-[250px]" src="/public/assets/navlogo.png" alt="nav-logo" /></NavLink>
        <div id="nav-menus" className="flex gap-14 font-medium">
          <NavLink className={navStyle} onClick={() => { setToggle(true) }} to={"/"}>Home</NavLink>
          <NavLink className={navStyle} onClick={() => { setToggle(false) }} to={"/phone"}>Phone</NavLink>
          <NavLink className={navStyle} to={"/contact"}>Contact</NavLink>
          <NavLink className={navStyle} to={"/cart"}>Cart</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Header
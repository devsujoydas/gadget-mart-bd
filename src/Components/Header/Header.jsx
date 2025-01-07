/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import './Header.css'
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import navlogo from '../../../public/assets/navlogo.png'

const Header = ({ setToggle }) => {
  const navStyle = "hover:text-emerald-600 px-2 py-1 rounded-lg  hover:font-semibold active:scale-95 transition-all";
  const [toggleMenuClose, setToggleMenuClose] = useState(false)
  const [navForSm, setNavForSm] = useState("hidden");
  const menuCloseBtnHandler = () => {
    if (toggleMenuClose) {
      setToggleMenuClose(false)
      setNavForSm('hidden')
    } else {
      setToggleMenuClose(true)
      setNavForSm('md:hidden absolute right-8 top-24 mt-2 p-4 rounded-lg text-lg bg-white border z-10 flex flex-col gap-3 font-medium')
    }
  }

  return (
    <div className="shadow-lg ">
      <nav className="max-w-screen-2xl md:mx-auto mx-5  flex justify-between items-center py-6 ">
        <NavLink onClick={() => { setToggle(true) }} to={"/"}><img className="md:w-[250px] w-72" src={navlogo} alt="nav-logo" /></NavLink>

        <div id="nav-menus" className="hidden md:flex gap-14 font-medium">
          <NavLink className={navStyle} onClick={() => { setToggle(true) }} to={"/"}>Home</NavLink>
          <NavLink className={navStyle} onClick={() => { setToggle(false) }} to={"/phone"}>Phone</NavLink>
          <NavLink className={navStyle} to={"/addtocart"}>Cart</NavLink>
          <NavLink className={navStyle} to={"/signin"}>Sign In</NavLink>

        </div>

        <button onClick={menuCloseBtnHandler} className="md:hidden">
          {
            toggleMenuClose ?<IoClose className="text-5xl" /> : <IoMdMenu className="text-5xl" /> 
          }
        </button>
        <div id="nav-menus" className={navForSm}>
          <NavLink className={navStyle} onClick={() => { setToggle(true) }} to={"/"}>Home</NavLink>
          <NavLink className={navStyle} onClick={() => { setToggle(false) }} to={"/phone"}>Phone</NavLink>
          <NavLink className={navStyle} to={"/addtocart"}>Cart</NavLink>
          <NavLink className={navStyle} to={"/signin"}>Sign In</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Header
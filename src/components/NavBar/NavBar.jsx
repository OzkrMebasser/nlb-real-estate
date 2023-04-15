import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { Link } from "react-scroll";

import "./NavBar.css";
import Logo from "./Logo";

const NavBar = () => {
  //States
  const [nav, setNav] = useState(false);
  const [navbarBg, setNavbarBg] = useState(true);

  const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  //Fuctions

  const handleNav = (props) => {
    // handles responsive Menu navigation
    setNav(!nav);
  };

  const changeNavBg = () => {
    if (window.scrollY >= 100) {
      setNavbarBg(true);
    } else if (window.scrollY < 400) {
      setNavbarBg(false);
    }
  };

  window.addEventListener("scroll", changeNavBg);

  return (
    <div
      className={
        navbarBg
          ? "flex justify-between items-center h-24 w-full px-16 text-[#d4af37] bg-[#000000] shadow-xl fixed top-0 z-100"
          : "flex justify-between items-center h-24 w-full px-16 text-white bg-[transparent] fixed top-0 z-100"
      }
    >
      
      {/* <span>
        <img
          className="h-24 w-24"
          src="https://firebasestorage.googleapis.com/v0/b/nlb-real-estate-site.appspot.com/o/assets%2Fsimple-imgs%2Flogo%20nlb.png?alt=media&token=ee935a75-3588-447d-aca6-8dc86a106b4a"
          alt="NLB real estate logo"
        />
        
      </span> */}
      <Logo className="font-black"/>
      <span className="text-[24px] font-black px-0 mr-[100px]	capitalize">Real Estate</span>
      <ul className="hidden md:flex">
        <li className="link link-underline link-underline-white p-4 font-bold text-[20px]">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={closeMenu}
          >
            TULUM
          </Link>
        </li>
        <li className="link link-underline link-underline-white p-4 font-bold text-[20px]">
          <Link
            to="quienes-somos"
            spy={true}
            smooth={true}
            offset={-95}
            duration={500}
            onClick={closeMenu}
          >
            {" "}
            PLAYA DEL CARMEN
          </Link>
        </li>

        {/* <li className='link link-underline link-underline-white p-4 font-bold text-[22px]'><a href={<About/>}>Quienes somos</a></li> */}
        <li className="link link-underline link-underline-white p-4 font-bold text-[20px]">
          <Link
            to="quienes-somos"
            spy={true}
            smooth={true}
            offset={-95}
            duration={500}
            onClick={closeMenu}
          >
            {" "}
            CANCUN
          </Link>
        </li>
        <li className="link link-underline link-underline-white p-4 font-bold text-[20px]">
          <Link
            to="testimoniales"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={closeMenu}
          >
            TERRENOS PARA INVERSION
          </Link>
        </li>
        <li className="link link-underline link-underline-white p-4 font-bold text-[20px]">
          <Link
            to="contacto"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
            onClick={closeMenu}
          >
            Contactanos
          </Link>
        </li>
      </ul>
      <nav></nav>
      {/* Menu mobile */}
      <div onClick={handleNav} className="block md:hidden z-50">
        {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </div>
      <ul
        className={
          nav
            ? "mx-auto fixed left-0 top-0 w-[100%] h-full  bg-[#000000] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <li>
          {/* <img
            className=" text-center mx-auto py-12 h-22 w-30"
            src="https://firebasestorage.googleapis.com/v0/b/nlb-real-estate-site.appspot.com/o/assets%2Fsimple-imgs%2Flogo%20nlb.png?alt=media&token=ee935a75-3588-447d-aca6-8dc86a106b4a"
            alt="NLB Real estate"
          /> */}
        </li>
        <li className="text-[28px] link link-underline-responsive link-underline-black text-center p-4 border-b border-gray-600">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-95}
            duration={500}
            onClick={handleNav}
          >
            Inicio
          </Link>
        </li>
        <li className="text-[28px] link link-underline-responsive link-underline-black text-center p-4 border-b border-gray-600">
          <Link
            to="quienes-somos"
            spy={true}
            smooth={true}
            offset={-95}
            duration={500}
            onClick={handleNav}
          >
            {" "}
            Quienes somos
          </Link>
        </li>
        <li className="text-[28px] link link-underline-responsive link-underline-black p-4 border-b ">
          Hola
        </li>
        <li className="text-[28px] link link-underline-responsive link-underline-black text-center p-4 border-b border-gray-600">
          <Link
            to="testimoniales"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            onClick={handleNav}
          >
            Testimoniales
          </Link>
        </li>
        <li className="text-[28px] link link-underline-responsive link-underline-black text-center p-4 border-b border-gray-600">
          <Link
            to="contacto"
            spy={true}
            smooth={true}
            offset={235}
            duration={500}
            onClick={handleNav}
          >
            Contactanos
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

"use client";

import React from "react";
import Link from "next/link";

import NavLink from "../buttons/NavLink";
import Logo from "./Logo";
import ContactUS from "../buttons/ContactUS";

const Navbar = () => {
  const nav = (
    <>
      <li>
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink href={"/about-us"}>About Us</NavLink>
      </li>
      <li>
        <NavLink href={"/ourProducts"}>Our Products</NavLink>
      </li>

      <li>
        <NavLink href={"/specialties"}>Specialties</NavLink>
      </li>
      <li>
        <NavLink href={"/contact"}>Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white px-2 xs:px-3 sm:px-8 lg:px-24 pb-2 pt-3 sm:pt-5 rounded-xl sm:rounded-2xl">
      <div className="navbar-start">
        <Logo></Logo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>
      <div className="navbar-end space-x-2 sm:space-x-4">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm sm:btn-md min-h-8 h-8 sm:min-h-12 sm:h-12 px-2 sm:px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-44 sm:w-52 p-2 shadow right-0"
          >
            {nav}
          </ul>
        </div>
        <Link href={"/contact-us"} className="rounded-full hidden lg:block">
            <ContactUS></ContactUS>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
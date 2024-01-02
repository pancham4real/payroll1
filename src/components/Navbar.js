"use client";
import {
  faSearch,
  faUser,
  faBars,
  faXmark,
  faCircleXmark,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
function Navigation(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };
  return (
    <div className=" bg-[#ffbc00] flex">
      <nav className="flex justify-between items-center w-full  mx-auto">
        <div className="flex items-center gap-6  p-1 md:hidden border rounded-lg border-black">
          <button
            name="menu"
            className="text-2xl w-10 cursor-pointer"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div
          className={`nav-links duration-500 md:static md:w-auto md:h-auto w-full flex items-center px-5 md:block ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div>
            <ul className="p-4 md:p-0 w-4/5 h-screen  z-50 fixed right-0 top-0 bg-white md:w-full md:h-auto md:bg-transparent md:justify-start md:static flex md:flex-row flex-col md:items-center my-auto text-base font-medium gap-4">
              <li className="md:hidden flex items-center justify-between">
                <div>Department of Posts</div>
                <button className="justify-end p-4">
                  <FontAwesomeIcon icon={faCircleXmark} onClick={toggleMenu} />
                </button>
              </li>
              <li className="group inline-block hover:bg-[#b02925] md:bg-transparent">
                <Link
                  className=" group-hover:!text-white group-hover:bg-[#b02925] inline-block px-2 py-4"
                  href="/cards"
                >
                  Cards
                </Link>
              </li>
              <li className="group inline-block hover:bg-[#b02925] md:bg-transparent">
                <Link
                  className=" group-hover:!text-white group-hover:bg-[#b02925] inline-block px-2 py-4"
                  href="/modals"
                >
                  Modals/Alerts
                </Link>
              </li>
              <li className="relative inline-block hover:bg-[#b02925] md:bg-transparent">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <div
                      className=" group-hover:!text-white group-hover:bg-[#b02925] inline-block px-2 py-4 cursor-pointer"
                      href="#"
                    >
                      Login
                    </div>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="18"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-2 md:px-0 md:w-48 w-full left-0 relative md:absolute bg-white z-50">
                    <ul className="w-full flex flex-col my-auto text-sm font-medium bg-white">
                      <li className="w-full hover:bg-[#fff7df] py-4 px-2 group-open:animate-fadeIn">
                        <Link className=" inline-block " href="/login">
                          Login Option One
                        </Link>
                      </li>
                      <li className="h-1 my-0.5 overflow-hidden bg-[#e5e5e5]"></li>
                      <li className="w-full hover:bg-[#fff7df] py-4 px-2 group-open:animate-fadeIn">
                        <Link
                          className=" inline-block "
                          href="/forgot-password"
                        >
                          Forgot Password
                        </Link>
                      </li>
                    </ul>
                  </div>
                </details>
              </li>
              <li className="relative group inline-block hover:bg-[#b02925] md:bg-transparent">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <div
                      className=" group-hover:!text-white group-hover:bg-[#b02925] inline-block px-2 py-4 cursor-pointer"
                      href="#"
                    >
                      Registration
                    </div>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="18"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-2 md:px-0 md:w-48 w-full left-0 relative md:absolute bg-white z-50">
                    <ul className="w-full flex flex-col my-auto text-sm font-medium bg-white">
                      <li className="w-full hover:bg-[#fff7df] py-4 px-2 group-open:animate-fadeIn">
                        <Link className=" inline-block " href="/register">
                          Registration Option One
                        </Link>
                      </li>
                    </ul>
                  </div>
                </details>
              </li>
              <li className="group inline-block hover:bg-[#b02925] md:bg-transparent">
                <Link
                  className=" group-hover:!text-white group-hover:bg-[#b02925] inline-block px-2 py-4"
                  href="user-profile"
                >
                  User Profile
                </Link>
              </li>
              <li className="relative group inline-block hover:bg-[#b02925] md:bg-transparent">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <div
                      className=" group-hover:!text-white group-hover:bg-[#b02925] inline-block px-2 py-4 cursor-pointer"
                      href="#"
                    >
                      Forms
                    </div>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="18"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-2 md:px-0 md:w-48 w-full left-0 relative md:absolute bg-white z-50">
                    <ul className="w-full flex flex-col my-auto text-sm font-medium bg-white">
                      <li className="w-full hover:bg-[#fff7df] py-4 px-2 group-open:animate-fadeIn">
                        <Link className=" inline-block " href="form-one">
                          Single Form
                        </Link>
                      </li>
                      <li className="w-full hover:bg-[#fff7df] py-4 px-2 group-open:animate-fadeIn">
                        <Link className=" inline-block " href="form-two">
                          Sticky Forms with Table Option #1
                        </Link>
                      </li>
                      <li className="w-full hover:bg-[#fff7df] py-4 px-2 group-open:animate-fadeIn">
                        <Link className=" inline-block " href="form-three">
                          Forms with Table Option #2
                        </Link>
                      </li>
                      <li className="w-full hover:bg-[#fff7df] py-4 px-2 group-open:animate-fadeIn">
                        <Link className=" inline-block " href="form-four">
                          Form with floating Label
                        </Link>
                      </li>
                    </ul>
                  </div>
                </details>
              </li>
              <li className="relative group inline-block hover:bg-[#b02925] md:bg-transparent">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <div
                      className=" group-hover:!text-white group-hover:bg-[#b02925] inline-block px-2 py-4 cursor-pointer"
                      href="#"
                    >
                      Tables
                    </div>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="18"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-2 md:px-0 md:w-48 w-full left-0 relative md:absolute bg-white z-50">
                    <ul className="w-full flex flex-col my-auto text-sm font-medium bg-white">
                      <li className="w-full hover:bg-[#fff7df] py-4 px-2 group-open:animate-fadeIn">
                        <Link className=" inline-block " href="/table">
                          Basic Table
                        </Link>
                      </li>
                      <li className="w-full hover:bg-[#fff7df] py-4 px-2 group-open:animate-fadeIn">
                        <Link className=" inline-block " href="data-table">
                          Data Table
                        </Link>
                      </li>
                    </ul>
                  </div>
                </details>
              </li>
            </ul>
          </div>
        </div>
        <div
          onClick={toggleMenu}
          className={`top-0 left-0 z-40 w-screen h-screen bg-[#0000005c] md:-z-50 md:hidden ${
            menuOpen ? "fixed" : "hidden"
          }`}
        ></div>
      </nav>
      <div className="input-group p-1 flex items-center md:hidden lg:flex">
        <input type="text" className="p-2" placeholder="Search" />
        <div className="input-group-append">
          <button className="btn_primary p-2" type="button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;

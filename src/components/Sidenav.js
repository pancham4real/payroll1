"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faXmark,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBars,
  faChalkboard,
  faNetworkWired,
  faRectangleList,
  faTable,
  faXmarksLines,
} from "@fortawesome/free-solid-svg-icons";
import {
  faAddressCard,
  faCircleUser,
  faCommentDots,
  faCopy,
  faHardDrive,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";

import Link from "next/link";
import "../assets/styles/Sidebar.css";

const Sidebar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  //   const location = useLocation();
  //   if (
  //     location.pathname === "/login" ||
  //     location.pathname === "/loginsimple" ||
  //     location.pathname === "/register" ||
  //     location.pathname === "/registersimple" ||
  //     location.pathname === "/forgot-password" ||
  //     location.pathname === "/page-four"
  //   ) {
  //     return null;
  //   }

  return (
    <>
      <nav id="sidebar" className={active ? "active" : ""}>
        <div className="custom-menu">
          <button
            type="button"
            id="sidebarCollapse"
            className="btn btn_primary"
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faBars} />
            <span className="sr-only">Toggle Menu</span>
          </button>
        </div>
        <div className="p-4 pt-5 position-sticky" style={{ top: "2rem" }}>
          {" "}
          {/* position-sticky"  */}
          {/* Sidebar Navigation */}
          <ul className="sidebar-nav">
            <li className="sidebar-header">Components</li>
            <li className="sidebar-item">
              <Link href="/cards" className="sidebar-link">
                {/* <i className="fa-solid fa-list pe-2" /> */}
                <FontAwesomeIcon icon={faHardDrive} className="pe-2" />
                Cards
              </Link>
            </li>
            <li className="sidebar-item">
              <Link href="/modals" className="sidebar-link">
                <FontAwesomeIcon icon={faCommentDots} className="pe-2" />
                Modal/Alert
              </Link>
            </li>
            <li className="sidebar-item">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <Link
                    href=""
                    className="sidebar-link collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#pages"
                    aria-expanded="false"
                    aria-controls="pages"
                  >
                    <FontAwesomeIcon icon={faCircleUser} className="pe-2" />
                    Login
                  </Link>
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
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>

                <div id="pages" className="sidebar-dropdown list-unstyled">
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    <Link href="/login" className="submenu">
                      Option #1
                    </Link>
                  </p>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    <Link href="/forgot-password" className="submenu">
                      Forgot Password
                    </Link>
                  </p>
                </div>
              </details>
            </li>
            {/* <li className="sidebar-item">
    <Link href="/" className="sidebar-link collapsed" data-bs-toggle="collapse" data-bs-target="#pages" aria-expanded="false" aria-controls="pages">
    <FontAwesomeIcon icon={faCircleUser} className='pe-2'/>
      Login
    </Link>
    <ul id="pages" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
      <li className="sidebar-item">
        <Link href="/loginsimple" className="submenu">Option #1</Link>
      </li>
      <li className="sidebar-item">
        <Link href="/login" className="submenu">Option #2</Link>
      </li>
      <li className="sidebar-item">
        <Link href="/forgot-password" className="submenu">Forgot Password</Link>
      </li>
    </ul>
  </li> */}
            <li className="sidebar-item">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <Link
                    href=""
                    className="sidebar-link collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#dashboard"
                    aria-expanded="false"
                    aria-controls="dashboard"
                  >
                    <FontAwesomeIcon icon={faAddressCard} className="pe-2" />
                    Registration
                  </Link>
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
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>

                <div id="pages" className="sidebar-dropdown list-unstyled">
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    <Link href="/register" className="submenu">
                      Option #1
                    </Link>
                  </p>
                </div>
              </details>
            </li>

            <li className="sidebar-item">
              <Link href="/user-profile" className="sidebar-link">
                <FontAwesomeIcon icon={faPenToSquare} className="pe-2" />
                User profile
              </Link>
            </li>

            <li className="sidebar-item">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <Link
                    href=""
                    className="sidebar-link collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#auth"
                    aria-expanded="false"
                    aria-controls="auth"
                  >
                    <FontAwesomeIcon icon={faChalkboard} className="pe-2" />
                    Forms
                  </Link>
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
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>

                <div id="pages" className="sidebar-dropdown list-unstyled">
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    <Link href="/form-one" className="submenu">
                      Option 1
                    </Link>
                  </p>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    <Link href="/form-two" className="submenu">
                      Option 2
                    </Link>
                  </p>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    <Link href="/form-three" className="submenu">
                      Option 3
                    </Link>
                  </p>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    <Link href="/form-four" className="submenu">
                      Floating Label
                    </Link>
                  </p>
                </div>
              </details>
            </li>

            <li className="sidebar-item">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <Link
                    href=""
                    className="sidebar-link collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#auth"
                    aria-expanded="false"
                    aria-controls="auth"
                  >
                    <FontAwesomeIcon icon={faTable} className="pe-2" />
                    Tables
                  </Link>
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
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>

                <div id="pages" className="sidebar-dropdown list-unstyled">
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    <Link href="/table" className="submenu">
                      Basic Table
                    </Link>
                  </p>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    <Link href="/data-table" className="submenu">
                      Data Table
                    </Link>
                  </p>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    <Link href="/form-three" className="submenu">
                      Option 3
                    </Link>
                  </p>
                </div>
              </details>
            </li>

            {/* <li className="sidebar-item">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <Link
                    href=""
                    className="sidebar-link collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#auth"
                    aria-expanded="false"
                    aria-controls="auth"
                  >
                    <FontAwesomeIcon icon={faCopy} className="pe-2" />
                    Pages
                  </Link>
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
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>

                <div id="pages" className="sidebar-dropdown list-unstyled">
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    <Link href="/page-one" className="submenu">
                      Option 1
                    </Link>
                  </p>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    <Link href="/page-two" className="submenu">
                      Option 2
                    </Link>
                  </p>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    <Link href="/page-four" className="submenu">
                      Without Left Nav
                    </Link>
                  </p>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    <Link href="/page-three" className="submenu">
                      Without Left Nav
                    </Link>
                  </p>
                </div>
              </details>
            </li> */}

            <li className="sidebar-header">Multi Level Nav</li>

            <li className="sidebar-item">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <Link
                    href=""
                    className="sidebar-link collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#multi"
                    aria-expanded="false"
                    aria-controls="multi"
                  >
                    <FontAwesomeIcon icon={faNetworkWired} className="pe-2" />
                    Multi Level
                  </Link>
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
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>

                <div id="multi" className="sidebar-dropdown list-unstyled">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <Link
                        href=""
                        className="sidebar-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#multi-two"
                        aria-expanded="false"
                        aria-controls="multi-two"
                      >
                        Two Links
                      </Link>
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
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>

                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                      <Link href="/" className="sidebar-link">
                        Link 1
                      </Link>
                    </p>
                    <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                      <Link href="/" className="sidebar-link">
                        Link 2
                      </Link>
                    </p>
                  </details>
                </div>
              </details>
            </li>
          </ul>
          {/* <div className="footer">
        <p>
          Copyright © All rights reserved 
          </p>
      </div> */}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;

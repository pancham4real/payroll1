"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navbar";
import IndiaPostLogo from "../assets/img/India_Post_Logo.png";
import EmblemOfIndia from "../assets/img/icon-Emblem_of_India.svg";
import Avatar from "../assets/img/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";

function Header() {
  const [showProfile, setShowprofile] = useState(false);
  const [showNotifications, setShownotifications] = useState(false);

  const handleProfile = () => {
    setShowprofile(!showProfile);
    if (showNotifications) {
      setShownotifications(!showNotifications);
    }
  };
  const handleNotifications = () => {
    setShownotifications(!showNotifications);
    if (showProfile) {
      setShowprofile(!setShowprofile);
    }
  };
  return (
    <React.Fragment>
      <header>
        <div className="container-fluid">
          <div className="container-fluid my-md-2">
            <div className="row">
              <div className="header-section">
                <div className="md:w-1/3 header-section-1 text-left p-2">
                  <div className="flex site-logo">
                    <Link href={"/"}>
                      <Image
                        src={IndiaPostLogo}
                        alt="India Post Logo"
                        className="img-fluid head-logo"
                        width={0}
                        height={0}
                      />
                    </Link>
                    <Image
                      src={EmblemOfIndia}
                      alt="Emblem of India"
                      width={0}
                      height={0}
                      className="img-fluid head-emblem"
                    />
                  </div>
                </div>

                <div className=" md:w-1/3 header-section-1 text-left p-2">
                  <div className="hidden sm:block">
                    <p className="text-center text-logo-main">
                      Department of Posts (DoP)
                    </p>
                    <p className="text-center text-logo-sub">
                      Ministry of Communications, Government of India
                    </p>
                  </div>
                </div>
                <div className="my-auto md:w-1/3 header-section-1 text-left p-2">
                  <div className="flex justify-end">
                    <div
                      data-te-dropdown-ref
                      className="btn-group pull-right top-head-dropdown me-4 login"
                    >
                      <button
                        href="/"
                        className="dropdown icon-circle  "
                        type="button"
                        id="usericon"
                        data-te-dropdown-toggle-ref
                        aria-expanded="false"
                        onClick={handleProfile}
                      >
                        <FontAwesomeIcon icon={faUser} />
                      </button>
                      <ul
                        className={`${
                          showProfile ? "fixed" : "hidden"
                        } absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu-button"
                        tabIndex="-1"
                      >
                        <li>
                          <Link href="/" className="top-text-block">
                            <div className="top-text-heading p-2">
                              Login / Logout
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className="top-text-block">
                            <div className="top-text-heading p-2">
                              Update Profile
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className="top-text-block">
                            <div className="top-text-heading p-2">
                              Forgot Password
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="btn-group pull-right top-head-dropdown icon-circle">
                      <button
                        href="/"
                        className="dropdown "
                        type="button"
                        aria-expanded="false"
                        id="notification-menu-button"
                        aria-haspopup="true"
                        onClick={handleNotifications}
                      >
                        <FontAwesomeIcon icon={faBell} />
                      </button>

                      <ul
                        className={`dropdown-menu dropdown-menu-right ${
                          showNotifications ? "fixed" : "hidden"
                        } absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu-button"
                        tabIndex="-1"
                      >
                        <li>
                          <Link href="/" className="top-text-block">
                            <div className="row notification align-items-center g-3">
                              <div className="sm:w-1/6">
                                <Image src={Avatar} alt="Avatar" />
                              </div>
                              <div>
                                <div className="top-text-heading">
                                  You have changed <b>your password</b>{" "}
                                  successfully
                                </div>
                                <div className="top-text-light">
                                  15 minutes ago
                                </div>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className="top-text-block">
                            <div className="row notification align-items-center g-3">
                              <div className="sm:w-1/6">
                                <Image src={Avatar} alt="Avatar" />
                              </div>
                              <div>
                                <div className="top-text-heading">
                                  You have submitted a request in{" "}
                                  <b>ABC Category</b>
                                </div>
                                <div className="top-text-light">
                                  2 hours ago
                                </div>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className="top-text-block">
                            <div className="row notification align-items-center g-3">
                              <div className="sm:w-1/6">
                                <Image src={Avatar} alt="Avatar" />
                              </div>
                              <div>
                                <div className="top-text-heading">
                                  You have changed <b>your password</b>{" "}
                                  successfully
                                </div>
                                <div className="top-text-light">
                                  15 hours ago
                                </div>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className="top-text-block">
                            <div className="row notification align-items-center g-3">
                              <div className="sm:w-1/6">
                                <Image src={Avatar} alt="Avatar" />
                              </div>
                              <div>
                                <div className="top-text-heading">
                                  You have submitted a request in{" "}
                                  <b>ABC Category</b>
                                </div>
                                <div className="top-text-light">2 days ago</div>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <div className="loader-topbar" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center sm:hidden">
                {" "}
                <p className="text-center text-logo-main">
                  Department of Posts (DoP)
                </p>
                <p className="text-center text-logo-sub">
                  Ministry of Communications, Government of India
                </p>
              </div>
            </div>
          </div>
        </div>
        <Navigation />
      </header>
    </React.Fragment>
  );
}

export default Header;

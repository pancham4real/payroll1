"use client";
import React, { useState } from "react";
import Image from "next/image";
import Cover from "../../../assets/img/cover.jpg";
import Pc from "../../../assets/img/pc.jpg";
import "react-datepicker/dist/react-datepicker.css";
import background from "../../../assets/img/titlebg3.jpg";
import Breadcrumbs from "../../../components/Breadcrumb";
import PageTitle from "../../../components/PageTitle";
// import cover from "@/assets/img/cover.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClockRotateLeft,
  faCloudArrowUp,
  faEnvelopeCircleCheck,
  faReceipt,
  faTruckFast,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import ReactDatePicker from "react-datepicker";

const GENDER_OPTIONS = [
  { text: "Male", value: "male" },
  { text: "Female", value: "female" },
  { text: "Other", value: "other" },
];

const UserProfile = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isChecked, setIsChecked] = useState(false);
  const cover = Cover;
  const pc = Pc;
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <React.Fragment>
      <div id="content">
        <section className="userprofile">
          <PageTitle title="User Profile " titleBg={background} />
          <div className="px-5 pb-4">
            <Breadcrumbs
              breadcrumbs={[
                { name: "🏠 Home", link: "/" },
                { name: "User Profile", link: "/user-profile" },
              ]}
            />
            {/*          <div className="d-flex justify-between flex-wrap flex-md-nowrap pb-4" style={{ marginTop: '-45px' }}>
              <div className="group relative inline-block">
                <button className="btn btn-secondary inline-flex items-center">
                  Quick Links
                </button>
                <div className="dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1">
                  <Link className="dropdown-item flex items-center" to="">
                    <FontAwesomeIcon icon={faTruckFast} className="me-3" /> Track your consignment
                  </Link>
                  <div className="dropdown-divider my-1" />
                  <Link className="dropdown-item flex items-center" to="">
                    <FontAwesomeIcon icon={faEnvelopeCircleCheck} className="me-3" /> Mail booking
                  </Link>
                  <div className="dropdown-divider my-1" />
                  <Link className="dropdown-item flex items-center" to="">
                    <FontAwesomeIcon icon={faUserPlus} className="me-3" /> Open a philatelic account
                  </Link>
                </div>
              </div>
              <div>
                <button className="btn btn-secondary inline-flex items-center">
                  Reports
                </button>
                <div className="dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1">
                  <Link className="dropdown-item flex items-center" to="">
                    <FontAwesomeIcon icon={faClockRotateLeft} className="me-3" /> Order History
                  </Link>
                  <div className="dropdown-divider my-1" />
                  <Link className="dropdown-item flex items-center" to="">
                    <FontAwesomeIcon icon={faReceipt} className="me-3" /> All Reports
                  </Link>
                </div>
              </div>
            </div> */}
            <div className="flex flex-wrap p-7 shadow-sm">
              <div className="flex flex-col xl:w-2/3 w-full">
                <div className="mb-4 bg-white drop-shadow-md rounded-lg">
                  <div className="border-0 p-4">
                    <h2 className="text-xl font-medium mb-4">
                      General information
                    </h2>
                    <form className="w-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-group">
                          <label className="form-label">First Name</label>
                          <input
                            placeholder=""
                            required=""
                            type="text"
                            className="form-control"
                            value="Pushpendra"
                            readOnly
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Last Name</label>
                          <input
                            placeholder=""
                            required=""
                            type="text"
                            className="form-control"
                            value="Chauhan"
                            readOnly
                          />
                        </div>
                        <div className="form-group react-date">
                          <label className="form-label">Date of Birth</label>
                          <br />
                          <ReactDatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="form-control"
                            showIcon
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Gender</label>
                          <select className="form-select">
                            <option value="">Select Gender</option>
                            {GENDER_OPTIONS.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.text}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="form-group">
                          <label className="form-label">E-Mail</label>
                          <input
                            placeholder=""
                            required=""
                            type="email"
                            className="form-control"
                            value="pushpendra.eci@gmail.com"
                            readOnly
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Phone</label>
                          <input
                            placeholder=""
                            required=""
                            type="number"
                            className="form-control"
                            value="9811701212"
                            readOnly
                          />
                        </div>
                      </div>
                      <h2 className="text-xl my-4">Location</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-group">
                          <label className="form-label">Address</label>
                          <input
                            placeholder=""
                            required=""
                            type="text"
                            className="form-control"
                            value="Laxmi Nagar, Vikas Marg, Delhi"
                            readOnly
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">City</label>
                          <input
                            placeholder=""
                            required=""
                            type="text"
                            className="form-control"
                            value="Delhi"
                            readOnly
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">State</label>
                          <select className="form-select">
                            <option value="">Select State</option>
                            <option value="Assam">Assam</option>
                            <option value="Andhra Pradesh">
                              Andhra Pradesh
                            </option>
                            <option value="Delhi">Delhi</option>
                            <option value="Karnataka">Karnataka</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label className="form-label">Pincode</label>
                          <input
                            placeholder=""
                            required=""
                            type="number"
                            className="form-control"
                            value="110092"
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="flex justify-start mt-2">
                        <button type="submit" className="btn btn_primary">
                          Update All
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="card card-body border-0 drop-shadow-md rounded-lg mb-4 bg-white p-4">
                  <h2 className="text-xl font-medium mb-4">Change Password</h2>
                  <form className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="form-group">
                        <label className="form-label">Old Password</label>
                        <input
                          placeholder=""
                          required=""
                          type="password"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">New Password</label>
                        <input
                          placeholder=""
                          required=""
                          type="password"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Confirm Password</label>
                        <input
                          placeholder=""
                          required=""
                          type="password"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">OTP</label>
                        <input
                          placeholder=""
                          required=""
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="flex justify-start mt-2">
                      <button type="submit" className="btn btn_primary">
                        Update Password
                      </button>
                    </div>
                  </form>
                </div>
                <div className="card card-body border-0 drop-shadow-md mb-4 bg-white p-4 rounded-lg">
                  <h2 className="text-xl font-medium mb-4">
                    Alerts & Notifications
                  </h2>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item flex justify-between px-0 border-b pb-5">
                      <div>
                        <h3 className="text-base mb-1">SMS Notification</h3>
                        <p className="text-sm">
                          Get SMS notification for your consignment status
                        </p>
                      </div>
                      <div>
                        <div className="pl-5 block h-6 mb-0.5">
                          <label className="autoSaverSwitch relative inline-flex cursor-pointer select-none items-center">
                            <input
                              type="checkbox"
                              name="autoSaver"
                              className="sr-only"
                              checked={isChecked}
                              onChange={handleCheckboxChange}
                            />
                            <span
                              className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${
                                isChecked ? "bg-primary" : "bg-[#CCCCCE]"
                              }`}
                            >
                              <span
                                className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
                                  isChecked ? "translate-x-6" : ""
                                }`}
                              ></span>
                            </span>
                            <span className="label flex items-center text-sm font-medium text-black">
                              {" "}
                              <span className="pl-1">
                                {" "}
                                {isChecked ? "On" : "Off"}{" "}
                              </span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item flex justify-between px-0 border-b py-5">
                      <div>
                        <h3 className="text-base mb-1">E-Mail Notification</h3>
                        <p className="text-sm">
                          Get Email notification for your consignment status
                        </p>
                      </div>
                      <div>
                        <div>
                          <div className="pl-5 block h-6 mb-0.5">
                            <label className="autoSaverSwitch relative inline-flex cursor-pointer select-none items-center">
                              <input
                                type="checkbox"
                                name="autoSaver"
                                className="sr-only"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                              />
                              <span
                                className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${
                                  isChecked ? "bg-primary" : "bg-[#CCCCCE]"
                                }`}
                              >
                                <span
                                  className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
                                    isChecked ? "translate-x-6" : ""
                                  }`}
                                ></span>
                              </span>
                              <span className="label flex items-center text-sm font-medium text-black">
                                {" "}
                                <span className="pl-1">
                                  {" "}
                                  {isChecked ? "On" : "Off"}{" "}
                                </span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col xl:w-1/3 w-full md:px-6 rounded-xl">
                <div className="mb-4 col-span-12">
                  <div className="bg-white shadow-md border-0 text-center p-0 rounded-xl">
                    <div>
                      <Image
                        src={cover}
                        width={0}
                        height={0}
                        className="h-full w-full rounded-lg"
                      />
                    </div>
                    <div className="card-body pb-5">
                      <Image
                        src={pc}
                        width={0}
                        height={0}
                        className="w-32 h-32 rounded-full mx-auto -mt-14 mb-4 border-2 shadow-2xl border-white"
                        alt="Neil Portrait"
                      />
                      <h4 className="text-xl font-bold">Pushpendra Chauhan</h4>
                      <h5 className="font-normal text-gray-600">
                        pushpendra.eci@gmail.com
                      </h5>
                      <p className="text-gray-600 mb-4">Laxmi Nagar, Delhi</p>
                      <button
                        type="button"
                        className="btn btn-sm btn-secondary btn_primary"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mb-4 col-span-12">
                  <div className="bg-white shadow-md border-0 text-center p-0 rounded-xl mb-4">
                    <h2 className="text-xl font-medium mb-4 p-4 text-left">
                      Select profile photo
                    </h2>
                    <div className="flex justify-between items-center p-4">
                      <div className="w-1/3">
                        <Image
                          src={pc}
                          className="w-32 h-32 rounded-lg mx-auto border-2 shadow-2xl border-white"
                          alt="Neil Portrait"
                        />
                      </div>
                      <div className="w-2/3">
                        <div className="flex items-center justify-center w-full">
                          <label
                            htmlFor="dropzone-file"
                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                          >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <svg
                                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 16"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                />
                              </svg>
                              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">
                                  Click to upload
                                </span>{" "}
                                or drag and drop
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                              </p>
                            </div>
                            <input
                              id="dropzone-file"
                              type="file"
                              className="hidden"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-4 col-span-12">
                  <div className="bg-white shadow-md border-0 text-center p-0 rounded-xl mb-4">
                    <h2 className="text-xl font-medium mb-4 p-4 text-left">
                      Select Cover photo
                    </h2>
                    <div className="flex justify-between items-center p-4">
                      <div className="w-1/3">
                        <Image
                          src={cover}
                          className="w-full  rounded-lg mx-auto border-2 shadow-2xl border-white"
                          alt="Neil Portrait"
                        />
                      </div>
                      <div className="w-2/3">
                        <div className="flex items-center justify-center w-full">
                          <label
                            htmlFor="dropzone-file"
                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                          >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <svg
                                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 16"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                />
                              </svg>
                              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">
                                  Click to upload
                                </span>{" "}
                                or drag and drop
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                              </p>
                            </div>
                            <input
                              id="dropzone-file"
                              type="file"
                              className="hidden"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default UserProfile;

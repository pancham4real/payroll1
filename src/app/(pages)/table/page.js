"use client";
import React, { useState } from "react";
import background from "../../../assets/img/image.png";
import Breadcrumbs from "../../../components/Breadcrumb";
import PageTitle from "../../../components/PageTitle";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faGear,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faEdit, faEye, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TableSample = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  return (
    <React.Fragment>
      <div id="content">
        <PageTitle title="Sample table pages" titleBg={background} />
        <div className="px-5 mb-4 container-fluid">
          <Breadcrumbs
            breadcrumbs={[
              { name: "🏠 Home", link: "/" },
              { name: "Orders", link: "/table" },
            ]}
          />
          <div className="row">
            <div>
              <div>
                <div className="btn-toolbar mb-2 flex items-center justify-between">
                  <h2 className="text-2xl fw-600">Orders Summary</h2>
                  <div className="btn-group ms-2 ms-lg-3  ">
                    <button type="button" className="btn btn_sm btn_secondary">
                      Share
                    </button>
                    <button type="button" className="btn btn_sm btn_secondary">
                      Export
                    </button>
                  </div>
                </div>
                <div className="table-settings mb-4">
                  <form>
                    <div className="row flex flex-col md:flex-row items-center justify-between gap-3">
                      <div className="md:w-2/5 w-full">
                        <div className="input-group me-2 me-lg-3 fw-400 flex">
                          <span className="input-group-text rounded-r-none border-r-0">
                            <FontAwesomeIcon icon={faSearch} />
                          </span>
                          <input
                            type="text"
                            className="form-control rounded-l-none"
                            placeholder="Search orders"
                          />
                        </div>
                      </div>
                      <div className="form-group md:w-1/4 w-full react-date">
                        <label>From Date</label>
                        <ReactDatePicker
                          onChange={(date) => setStartDate(date)}
                          className="form-control"
                          showIcon
                          selected={startDate}
                        />
                      </div>
                      <div className="form-group md:w-1/4 w-full react-date">
                        <label>To Date</label>
                        <ReactDatePicker
                          onChange={(date) => setToDate(date)}
                          className="form-control"
                          showIcon
                          selected={startDate}
                        />
                      </div>
                    </div>
                  </form>
                </div>

                <div className="card card-body shadow table-wrapper overflow-auto pb-4 bg-white">
                  <table className="table min-w-[600px] w-full">
                    <thead>
                      <tr>
                        <th className="border-gray-200">#</th>
                        <th className="border-gray-200">Bill For</th>
                        <th className="border-gray-200">Issue Date</th>
                        <th className="border-gray-200">Due Date</th>
                        <th className="border-gray-200">Total</th>
                        <th className="border-gray-200">Status</th>
                        <th className="border-gray-200">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr className=" odd:bg-[#edcec5]">
                        <td> 1 </td>
                        <td>
                          <span className="fw-normal">Service Name 1</span>
                        </td>
                        <td>
                          <span className="fw-normal">1 May 2023</span>
                        </td>
                        <td>
                          <span className="fw-normal">1 Jun 2023</span>
                        </td>
                        <td>
                          <span className="fw-bold">Rs. 799,00</span>
                        </td>
                        <td>
                          <span class="font-14 badge !text-black bg-yellow-400">
                            Due
                          </span>
                        </td>
                        <td>
                          <div class="relative w-full items-center">
                            <details>
                              <summary className="list-none font-bold text-2xl">
                                ...
                              </summary>
                              <div class="w-[200px] bg-white flex flex-col absolute left-[-175px] z-50 text-xs border border-gray-400 shadow-md rounded-md">
                                <div className="flex gap-1 w-full hover:!bg-[#fff7df] ">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon icon={faEye} size="16" />
                                    View Details
                                  </Link>
                                </div>
                                <div className=" inline-block justify-between gap-1 w-auto">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon icon={faEdit} size="16" />
                                    Edit Details
                                  </Link>
                                </div>
                                <div className="flex justify-between gap-1 w-auto">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon
                                      icon={faTrashAlt}
                                      size="16"
                                    />
                                    Delete Details
                                  </Link>
                                </div>
                              </div>
                            </details>
                          </div>
                        </td>
                      </tr>

                      <tr className=" odd:bg-[#edcec5]">
                        <td>2</td>
                        <td>
                          <span className="fw-normal">Service Name 1</span>
                        </td>
                        <td>
                          <span className="fw-normal">1 Apr 2023</span>
                        </td>
                        <td>
                          <span className="fw-normal">1 May 2023</span>
                        </td>
                        <td>
                          <span className="fw-bold">Rs. 799,00</span>
                        </td>
                        <td>
                          <span class="font-14 badge !text-black bg-green-400">
                            Paid
                          </span>
                        </td>
                        <td>
                          <div class="relative w-full items-center">
                            <details>
                              <summary className="list-none font-bold text-2xl">
                                ...
                              </summary>
                              <div class="w-[200px] bg-white flex flex-col absolute left-[-175px] z-50 text-xs border border-gray-400 shadow-md rounded-md">
                                <div className="flex justify-between gap-1 w-auto hover:!bg-[#fff7df] ">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon icon={faEye} size="16" />
                                    View Details
                                  </Link>
                                </div>
                                <div className=" inline-block justify-between gap-1 w-auto">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon icon={faEdit} size="16" />
                                    Edit Details
                                  </Link>
                                </div>
                                <div className="flex justify-between gap-1 w-auto">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon
                                      icon={faTrashAlt}
                                      size="16"
                                    />
                                    Delete Details
                                  </Link>
                                </div>
                              </div>
                            </details>
                          </div>
                        </td>
                      </tr>

                      <tr className=" odd:bg-[#edcec5]">
                        <td>3</td>
                        <td>
                          <span className="fw-normal">Service Name 2</span>
                        </td>
                        <td>
                          <span className="fw-normal">1 Mar 2023</span>
                        </td>
                        <td>
                          <span className="fw-normal">1 Apr 2023</span>
                        </td>
                        <td>
                          <span className="fw-bold">Rs. 799,00</span>
                        </td>
                        <td>
                          <span class="font-14 badge !text-black bg-green-400">
                            Paid
                          </span>
                        </td>
                        <td>
                          <div class="relative w-full items-center">
                            <details>
                              <summary className="list-none font-bold text-2xl">
                                ...
                              </summary>
                              <div class="w-[200px] bg-white flex flex-col absolute left-[-175px] z-50 text-xs border border-gray-400 shadow-md rounded-md">
                                <div className="flex justify-between gap-1 w-auto hover:!bg-[#fff7df] ">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon icon={faEye} size="16" />
                                    View Details
                                  </Link>
                                </div>
                                <div className=" inline-block justify-between gap-1 w-auto">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon icon={faEdit} size="16" />
                                    Edit Details
                                  </Link>
                                </div>
                                <div className="flex justify-between gap-1 w-auto">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon
                                      icon={faTrashAlt}
                                      size="16"
                                    />
                                    Delete Details
                                  </Link>
                                </div>
                              </div>
                            </details>
                          </div>
                        </td>
                      </tr>

                      <tr className=" odd:bg-[#edcec5]">
                        <td>4</td>
                        <td>
                          <span className="fw-normal">Service Name 4</span>
                        </td>
                        <td>
                          <span className="fw-normal">1 Feb 2023</span>
                        </td>
                        <td>
                          <span className="fw-normal">1 Mar 2023</span>
                        </td>
                        <td>
                          <span className="fw-bold">Rs. 799,00</span>
                        </td>
                        <td>
                          <span class="font-14 badge !text-black bg-red-400">
                            Cancelled
                          </span>
                        </td>
                        <td>
                          <div class="relative w-full items-center">
                            <details>
                              <summary className="list-none font-bold text-2xl">
                                ...
                              </summary>
                              <div class="w-[200px] bg-white flex flex-col absolute left-[-175px] z-50 text-xs border border-gray-400 shadow-md rounded-md">
                                <div className="flex justify-between gap-1 w-auto hover:!bg-[#fff7df] ">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon icon={faEye} size="16" />
                                    View Details
                                  </Link>
                                </div>
                                <div className=" inline-block justify-between gap-1 w-auto">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon icon={faEdit} size="16" />
                                    Edit Details
                                  </Link>
                                </div>
                                <div className="flex justify-between gap-1 w-auto">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon
                                      icon={faTrashAlt}
                                      size="16"
                                    />
                                    Delete Details
                                  </Link>
                                </div>
                              </div>
                            </details>
                          </div>
                        </td>
                      </tr>

                      <tr className=" odd:bg-[#edcec5]">
                        <td>5</td>
                        <td>
                          <span className="fw-normal">Service Name 1</span>
                        </td>
                        <td>
                          <span className="fw-normal">1 Jan 2023</span>
                        </td>
                        <td>
                          <span className="fw-normal">1 Feb 2023</span>
                        </td>
                        <td>
                          <span className="fw-bold">Rs. 799,00</span>
                        </td>
                        <td>
                          <span class="font-14 badge !text-black bg-yellow-400">
                            Due
                          </span>
                        </td>
                        <td>
                          <div class="relative w-full items-center">
                            <details>
                              <summary className="list-none font-bold text-2xl">
                                ...
                              </summary>
                              <div class="w-[200px] bg-white flex flex-col absolute left-[-175px] z-50 text-xs border border-gray-400 shadow-md rounded-md">
                                <div className="flex justify-between gap-1 w-auto hover:!bg-[#fff7df] ">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon icon={faEye} size="16" />
                                    View Details
                                  </Link>
                                </div>
                                <div className=" inline-block justify-between gap-1 w-auto">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon icon={faEdit} size="16" />
                                    Edit Details
                                  </Link>
                                </div>
                                <div className="flex justify-between gap-1 w-auto">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon
                                      icon={faTrashAlt}
                                      size="16"
                                    />
                                    Delete Details
                                  </Link>
                                </div>
                              </div>
                            </details>
                          </div>
                        </td>
                      </tr>

                      <tr className=" odd:bg-[#edcec5]">
                        <td>6</td>
                        <td>
                          <span className="fw-normal">Service Name 1</span>
                        </td>
                        <td>
                          <span className="fw-normal">1 Dec 2022</span>
                        </td>
                        <td>
                          <span className="fw-normal">1 Jan 2023</span>
                        </td>
                        <td>
                          <span className="fw-bold">Rs. 799,00</span>
                        </td>
                        <td>
                          <span class="font-14 badge !text-black bg-green-400">
                            Paid
                          </span>
                        </td>
                        <td>
                          <div class="relative w-full items-center">
                            <details>
                              <summary className="list-none font-bold text-2xl">
                                ...
                              </summary>
                              <div class="w-[200px] bg-white flex flex-col absolute left-[-175px] z-50 text-xs border border-gray-400 shadow-md rounded-md">
                                <div className="flex justify-between gap-1 w-auto hover:!bg-[#fff7df] ">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon icon={faEye} size="16" />
                                    View Details
                                  </Link>
                                </div>
                                <div className=" inline-block justify-between gap-1 w-auto">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon icon={faEdit} size="16" />
                                    Edit Details
                                  </Link>
                                </div>
                                <div className="flex justify-between gap-1 w-auto">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon
                                      icon={faTrashAlt}
                                      size="16"
                                    />
                                    Delete Details
                                  </Link>
                                </div>
                              </div>
                            </details>
                          </div>
                        </td>
                      </tr>

                      <tr className=" odd:bg-[#edcec5]">
                        <td>7</td>
                        <td>
                          <span className="fw-normal">Service Name 1</span>
                        </td>
                        <td>
                          <span className="fw-normal">1 Nov 2022</span>
                        </td>
                        <td>
                          <span className="fw-normal">1 Dec 2022</span>
                        </td>
                        <td>
                          <span className="fw-bold">Rs. 799,00</span>
                        </td>
                        <td>
                          <span class="font-14 badge !text-black bg-red-400">
                            Cancelled
                          </span>
                        </td>
                        <td>
                          <div class="relative w-full items-center">
                            <details>
                              <summary className="list-none font-bold text-2xl">
                                ...
                              </summary>
                              <div class="w-[200px] bg-white flex flex-col absolute left-[-175px] z-50 text-xs border border-gray-400 shadow-md rounded-md">
                                <div className="flex justify-between gap-1 w-auto hover:!bg-[#fff7df] ">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon icon={faEye} size="16" />
                                    View Details
                                  </Link>
                                </div>
                                <div className=" inline-block justify-between gap-1 w-auto">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon icon={faEdit} size="16" />
                                    Edit Details
                                  </Link>
                                </div>
                                <div className="flex justify-between gap-1 w-auto">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon
                                      icon={faTrashAlt}
                                      size="16"
                                    />
                                    Delete Details
                                  </Link>
                                </div>
                              </div>
                            </details>
                          </div>
                        </td>
                      </tr>

                      <tr className=" odd:bg-[#edcec5]">
                        <td>8</td>
                        <td>
                          <span className="fw-normal">Service Name 2</span>
                        </td>
                        <td>
                          <span className="fw-normal">1 Oct 2022</span>
                        </td>
                        <td>
                          <span className="fw-normal">1 Nov 2022</span>
                        </td>
                        <td>
                          <span className="fw-bold">Rs. 533,42</span>
                        </td>
                        <td>
                          <span class="font-14 badge !text-black bg-green-400">
                            Paid
                          </span>
                        </td>
                        <td>
                          <div class="relative w-full items-center">
                            <details>
                              <summary className="list-none font-bold text-2xl">
                                ...
                              </summary>
                              <div class="w-[200px] bg-white flex flex-col absolute left-[-175px] z-50 text-xs border border-gray-400 shadow-md rounded-md">
                                <div className="flex justify-between gap-1 w-auto hover:!bg-[#fff7df] ">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon icon={faEye} size="16" />
                                    View Details
                                  </Link>
                                </div>
                                <div className=" inline-block justify-between gap-1 w-auto">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon icon={faEdit} size="16" />
                                    Edit Details
                                  </Link>
                                </div>
                                <div className="flex justify-between gap-1 w-auto">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon
                                      icon={faTrashAlt}
                                      size="16"
                                    />
                                    Delete Details
                                  </Link>
                                </div>
                              </div>
                            </details>
                          </div>
                        </td>
                      </tr>

                      <tr className=" odd:bg-[#edcec5]">
                        <td>9</td>
                        <td>
                          <span className="fw-normal">Service Name 2</span>
                        </td>
                        <td>
                          <span className="fw-normal">1 Sep 2022</span>
                        </td>
                        <td>
                          <span className="fw-normal">1 Oct 2022</span>
                        </td>
                        <td>
                          <span className="fw-bold">Rs. 533,42</span>
                        </td>
                        <td>
                          <span class="font-14 badge !text-black bg-green-400">
                            Paid
                          </span>
                        </td>
                        <td>
                          <div class="relative w-full items-center">
                            <details>
                              <summary className="list-none font-bold text-2xl">
                                ...
                              </summary>
                              <div class="w-[200px] bg-white flex flex-col absolute left-[-175px] z-50 text-xs border border-gray-400 shadow-md rounded-md">
                                <div className="flex justify-between gap-1 w-auto hover:!bg-[#fff7df] ">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon icon={faEye} size="16" />
                                    View Details
                                  </Link>
                                </div>
                                <div className=" inline-block justify-between gap-1 w-auto">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon icon={faEdit} size="16" />
                                    Edit Details
                                  </Link>
                                </div>
                                <div className="flex justify-between gap-1 w-auto">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon
                                      icon={faTrashAlt}
                                      size="16"
                                    />
                                    Delete Details
                                  </Link>
                                </div>
                              </div>
                            </details>
                          </div>
                        </td>
                      </tr>

                      <tr className=" odd:bg-[#edcec5]">
                        <td>10</td>
                        <td>
                          <span className="fw-normal">Service Name 3</span>
                        </td>
                        <td>
                          <span className="fw-normal">1 Aug 2022</span>
                        </td>
                        <td>
                          <span className="fw-normal">1 Sep 2022</span>
                        </td>
                        <td>
                          <span className="fw-bold">Rs. 233,42</span>
                        </td>
                        <td>
                          <span class="font-14 badge !text-black bg-green-400">
                            Paid
                          </span>
                        </td>
                        <td>
                          <div class="relative w-full items-center">
                            <details>
                              <summary className="list-none font-bold text-2xl">
                                ...
                              </summary>
                              <div class="w-[200px] bg-white flex flex-col absolute left-[-175px] z-50 text-xs border border-gray-400 shadow-md rounded-md">
                                <div className="flex justify-between gap-1 w-auto hover:!bg-[#fff7df] ">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon icon={faEye} size="16" />
                                    View Details
                                  </Link>
                                </div>
                                <div className=" inline-block justify-between gap-1 w-auto">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon icon={faEdit} size="16" />
                                    Edit Details
                                  </Link>
                                </div>
                                <div className="flex justify-between gap-1 w-auto">
                                  <Link
                                    href=""
                                    class="w-full inline-block px-4 py-2 rounded-t hover:bg-gray-100 text-lg"
                                  >
                                    <FontAwesomeIcon
                                      icon={faTrashAlt}
                                      size="16"
                                    />
                                    Delete Details
                                  </Link>
                                </div>
                              </div>
                            </details>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="card-footer px-3 border-0 flex flex-col md:flex-row items-center justify-between">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination mb-0">
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            Previous
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            1
                          </Link>
                        </li>
                        <li className="page-item active">
                          <Link className="page-link" href="#">
                            2
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            3
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            4
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            5
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            Next
                          </Link>
                        </li>
                      </ul>
                    </nav>
                    <div className="fw-normal small mt-4 mt-lg-0">
                      Showing <b>5</b> out of <b>10</b> entries
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TableSample;

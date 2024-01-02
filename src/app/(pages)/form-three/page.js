import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import background from "../../../assets/img/image.png";
import Breadcrumbs from "../../../components/Breadcrumb";
import PageTitle from "../../../components/PageTitle";
import Form from "../../../components/Form";
import Link from "next/link";

const FormThree = () => {
  return (
    <React.Fragment>
      <div id="content">
        <PageTitle title="Sample Form Page Type #3" titleBg={background} />
        <div className="container-fluid px-5 mb-4">
          <Breadcrumbs
            breadcrumbs={[
              { name: "🏠 Home", link: "/" },
              { name: "forms", link: "/form-three" },
            ]}
          />
          <div className="row columns2 flex flex-col md:flex-row gap-3">
            <div className="w-full">
              <div className="card bg-white bordered rounded-md py-5 px-10">
                <h2 className="font-20 fw-600 mb-3">Sample Form #1</h2>
                <Form type="form-three-a" />
              </div>
            </div>

            <div className="w-full">
              <div className="card bg-white bordered rounded-md py-5 px-10">
                <h2 className="font-20 fw-600 mb-3">Sample Form #2</h2>

                <Form type="form-three-b" />
              </div>
            </div>
          </div>

          <div className="md:col-span-12 px-3 my-4">
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
                <Form type="form-three-c" />
              </div>

              <div className="card card-body shadow table-wrapper overflow-auto overflow-x-auto">
                <div className="flex">
                  <div
                    role="alert"
                    className="w-full relative p-2 bg-green-200 border border-green-700 rounded-lg"
                  >
                    <div className="flex space-x-4">
                      <div className=" text-green h4 space-x-3 text-xl flex justify-between items-center">
                        Your Custom Message !!!
                      </div>
                    </div>
                  </div>
                </div>
                <table className="table min-w-[600px] w-full">
                  <thead>
                    <tr>
                      <th className="border-gray-200">#</th>
                      <th className="border-gray-200">Bill For</th>
                      <th className="border-gray-200">Issue Date</th>
                      <th className="border-gray-200">Due Date</th>
                      <th className="border-gray-200">Total</th>
                      <th className="border-gray-200">Status</th>
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
                    </tr>
                  </tbody>
                </table>
                <div className="card-footer px-3 border-0 flex flex-column items-center justify-between">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination mb-0 flex flex-row space-x-1">
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
    </React.Fragment>
  );
};

export default FormThree;

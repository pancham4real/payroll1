"use client";

import React, { useState, useEffect } from "react";
import DateTimePicker from "../../../components/DateTimePicker";
import YesNoDropdown from "../../../components/WageDropdown";
import { CalendarIcon } from "@heroicons/react/outline";
import Transportdropdown from "../../../components/Transportdropdown";
import ReactDatePicker from "react-datepicker";

// import Dropdown from "./dropdown";
// import jsPDF from "jspdf";
// import { jsPDF } from "jspdf";
// import "jspdf-autotable";
// import jsPDF from "jspdf";
// import "jspdf-autotable";

const Tourallowance = () => {
  const [res, setRes] = useState([]);
  // const [res2, setRes2] = useState([]);
  const [status, setStatus] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showInputs, setShowInputs] = useState(false);
  const [showInputs1, setShowInputs1] = useState(false);

  const initialValues = {
    journeydeparturedate: "",
    journeydeparturefrom: "",
    journeyarrivaldate: "",
    journeyarrivalto: "",
    modeofTravel: "",
    forPaid: "",
    distance: "",
    durationofHalt: "",
    purposeofjourney: "",
    selectmode: "",
    dateofAbsence: "",
    daclaimed: [],
    accomodation: [],
    remarks: "",
    documentname: "",
    enteramount: "",
    attachment: "",
  };

  const [data, setData] = useState(initialValues);
  const [error, setError] = useState({});

  const handlePlusclick = () => {
    setShowInputs(true);
  };
  const handlePlusclick2 = () => {
    setShowInputs1(true);
  };

  const User = async () => {
    try {
      const response = await fetch(
        // "http://localhost:8080/api/gpfcheckacntpost/10063546",
        // "http://uat.cept.gov.in/payroll/api/gpfcheckacntpost/10277430",
        // "http://uat.cept.gov.in/payroll2/payroll/gpf/v1/getEmp/10063546",
        "https://uat.cept.gov.in/payroll2/payroll/gpf/v1/getEmp/8308331455",
        {
          method: "GET",
          // body: JSON.stringify([{ userid }]) // Uncomment if needed
        }
      );
      console.log(response, "Pancham1");
      setStatus(response?.status);
      if (!response?.ok) {
        throw new Error("Network response was not ok");
      }

      const respons = await response.json();
      console.log(respons, "Pancham");

      setRes(respons?.data);
      // setRes(respons[0]);

      // console.log(respons[0].Data, "Final Response");
      // console.log(respons?.data, "Final Response");
      // const pancham = Object.entries(respons?.data);
      // setRes(response?.data);
      // setRes(pancham);
      // console.log("At FInal", pancham);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Second API
  // const addUserID2 = async () => {
  //   try {
  //     const response = await fetch(
  //       // "http://localhost:8080/api/gpfcheckacntpost/10063546",
  //       "http://uat.cept.gov.in/payroll/api/gpfcheckstatement/10063546/2022",

  //       {
  //         method: "GET",
  //         // body: JSON.stringify([{ userid }]) // Uncomment if needed
  //       }
  //     );
  //     console.log("addUserID2 res", response);
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const respons = await response.json();
  //     setRes2(respons[0].Data);
  //     setStatus(respons[0].Status);
  //     console.log(respons[0].Data, "second parsed response");
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  useEffect(() => {
    User();
    console.log(res, "Useeffect_response");
    // addUserID2();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to execute once on component mount

  const handleInputchange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setData({ ...initialValues, [name]: value });
    console.log(initialValues);
  };

  const handleSubmit = (e) => {
    e.preventdefault();
    setError(validate(initialValues));
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
    if (!values.journeydeparturefrom) {
      errors.journeydeparturefrom = "City is required";
    }
    if (!values.journeyarrivalto) {
      errors.journeyarrivalto = "City is required";
    }
    if (!values.modeofTravel) {
      errors.modeofTravel = "This field is required";
    }
    if (!values.forPaid) {
      errors.forPaid = "This field is required";
    }
    if (!values.distance) {
      errors.distance = "This field is required";
    }
    if (!values.durationofHalt) {
      errors.durationofHalt = "This field is required";
    }
    if (!values.purposeofjourney) {
      errors.purposeofjourney = "This field is required";
    }
    if (!values.remarks) {
      errors.remarks = "This field is required";
    }
    if (!values.documentname) {
      errors.documentname = "This field is required";
    }
    return errors;
  };

  return (
    <div>
      <div>
        <h1 className="mt-1 ml-1 mr-1 pb-4 pl-10 font-bold text-2xl italic pt-2 bg-blue-400 flex align-centre justify-center border border-gray-500 p-4">
          Travelling Allowance Bill for Tour
        </h1>
      </div>
      <div className="border border-gray-500 p-4 m-1">
        <div className="border border-gray-500 m-1 flex items-top justify-start">
          <div className=" w-full ">
            <h1 className="flex align-left justify-start pl-1 font-bold text-sx bg-red-200">
              Employee Details :
            </h1>
            {/* {res?.map((e, i) => {
              return ( */}
            <div>
              <div className="flex align-center justify-start">
                <span className="pl-1 font-bold text-sm">
                  Employee No:
                  <span className="font-normal pl-1">{res.empID}</span>
                </span>
                <span className=" pl-1 font-bold ml-80 text-sm">
                  Employee Name:
                  <span className="font-normal pl-1">{res.name}</span>
                </span>
                <span className=" pl-1 font-bold ml-60 text-sm">
                  Designation:
                  <span className="font-normal pl-1">{res.postdesc}</span>
                </span>
              </div>
              <div className="flex align-center justify-start">
                <span className="pl-1 font-bold text-sm">
                  Circle:
                  <span className="font-normal pl-1">{res.office_desc}</span>
                </span>
                <span className=" pl-1 font-bold ml-96 text-sm">
                  Class:
                  <span className="font-normal pl-1">{res.pay_level}</span>
                </span>
                <span className=" pl-1 font-bold ml-72 text-sm">
                  Cadre:
                  <span className="font-normal pl-1">{res.postdesc}</span>
                </span>
              </div>
              <div className="">
                <span className="pl-1 font-bold text-sm">
                  Grade:
                  <span className="font-normal pl-1">{res.officeid}</span>
                </span>
              </div>
              <div className="">
                <span className="pl-1 font-bold text-sm">
                  Joining Date:
                  <span className="font-normal">{res.postid}</span>
                </span>
              </div>
            </div>
            {/* ); */}
            {/* })} */}
          </div>
        </div>
        <div className="border border-gray-500  m-1 ">
          <div className="flex items-top justify-start align-top">
            <div className=" w-full bg-black-200">
              <h1 className="flex align-top justify-start pl-1 font-bold text-sx bg-red-200 min-w-screen items-center">
                Fill Details and Purpose of Journey Performed :
              </h1>
              <div className="flex justify-between">
                <div className="w-1/7 border-r border-black pl-1 font-bold text-sm">
                  Departure
                  <div>
                    <div className="flex justify-between">
                      <div className=" border-black pl-1 whitespace-nowrap">
                        <div className="form-group react-date">Date & Time</div>
                        <ReactDatePicker
                          onChange={(date) => setCurrentDate(date)}
                          className="form-control"
                          showIcon
                          selected={currentDate}
                          // selected={data.journeydeparturedate}
                          // name="journeydeparturedate"
                          // value={data.journeydeparturedate}
                        />
                      </div>
                      {/* <div
                        className="w-1/2 border-t border-b border-black pl-1 font-bold text-xs
                      "
                      >
                        From
                      </div> */}
                      <div className="form-group ml-1 mr-1">
                        <label className=" font-bold ">From</label>
                        <input
                          type="text"
                          name="journeydeparturefrom"
                          placeholder=""
                          className="form-control"
                          value={data.journeydeparturefrom}
                          onChange={handleInputchange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-1/7 border-r border-black pl-1 font-bold text-sm">
                  Arrival
                  <div>
                    <div className="flex justify-between">
                      <div className=" border-black pl-1 whitespace-nowrap">
                        <div className="form-group react-date">Date & Time</div>
                        <ReactDatePicker
                          onChange={(date) => setCurrentDate(date)}
                          className="form-control"
                          showIcon
                          selected={currentDate}
                          // selected={data.journeyarrivaldate}
                          // name="journeyarrivaldate"
                          // value={data.journeydeparturedate}
                        />
                      </div>
                      {/* <div
                        className="w-1/2 border-t border-b border-black pl-1 font-bold text-xs
                      "
                      >
                        From
                      </div> */}
                      <div className="form-group ml-1 mr-1">
                        <label className=" font-bold ">To</label>
                        <input
                          type="text"
                          name="journeyarrivalto"
                          placeholder=""
                          className="form-control"
                          value={data.journeyarrivalto}
                          onChange={handleInputchange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="w-1/7 border-t font-bold border-black pl-1 text-sm">
                  Arrival
                  <div>
                    <div className="flex justify-between">
                      <div className="w-1/2 border-black pl-1 font-bold border-b whitespace-nowrap">
                        Date & Time
                      </div>
                      <div className="w-1/2 border-black pl-1 font-bold text-xs border-b whitespace-nowrap">
                        To
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="form-group ml-1 mr-1 border-r border-black pr-1">
                  <label className=" font-bold whitespace-nowrap">
                    Mode Of travel and Class of Accomodation Used
                  </label>
                  <input
                    type="text"
                    name="modeofTravel"
                    placeholder=""
                    className="form-control mt-3"
                    value={data.modeofTravel}
                    onChange={handleInputchange}
                  />
                </div>

                {/* <div className="w-1/7 border-r border-t border-l font-bold border-black pl-1 pr-0.5 text-sm whitespace-nowrap overflow-hidden overflow-ellipsis">
                  Mode Of travel and Class of Accomodation Used
                  <div>
                    <div className="flex justify-between">
                      <div className="w-full border-r border-t border-black pl-1"></div>
                    </div>
                  </div>
                </div> */}
                <div className="form-group ml-1 mr-1 border-r border-black pr-1">
                  <label className=" font-bold whitespace-nowrap">
                    For paid
                  </label>
                  <input
                    type="text"
                    name="forPaid"
                    placeholder=""
                    className="form-control mt-3"
                    value={data.forPaid}
                    onChange={handleInputchange}
                  />
                </div>

                {/* <div className="w-1/7 border-r border-t border-l font-bold border-black pl-1 pr-0.5 text-sm whitespace-nowrap">
                  For Paid
                  <div>
                    <div className="w-full border-t border-black pl-1"></div>
                  </div>
                </div> */}

                <div className="form-group ml-1 mr-1 border-r border-black pr-1">
                  <label className=" font-bold whitespace-nowrap">
                    Distance in Kms for road mileage
                  </label>
                  <input
                    type="text"
                    name="distance"
                    placeholder=""
                    className="form-control mt-3"
                    value={data.distance}
                    onChange={handleInputchange}
                  />
                </div>

                {/* <div className="w-1/7 border-r border-t border-l font-bold border-black pl-1 pr-0.5 text-sm whitespace-nowrap">
                  Distance in Kms for road mileage
                  <div>
                    <div className="w-full border-t border-black pl-1"></div>
                  </div>
                </div> */}
                <div className="form-group ml-1 mr-1 border-r border-black pr-1">
                  <label className=" font-bold whitespace-nowrap">
                    Duration of Halt
                  </label>
                  <input
                    type="text"
                    name="durationofHalt"
                    placeholder=""
                    className="form-control mt-3"
                    value={data.durationofHalt}
                    onChange={handleInputchange}
                  />
                </div>

                {/* <div className="w-1/7 border-r border-t border-l font-bold border-black pl-1 pr-0.5 text-sm whitespace-nowrap">
                  Duration of Halt
                  <div>
                    <div className="w-full border-t border-black pl-1"></div>
                  </div>
                </div> */}

                <div className="form-group ml-1 mr-1 pr-1">
                  <label className=" font-bold whitespace-nowrap">
                    Purpose of journey
                  </label>
                  <input
                    type="text"
                    name="purposeofjourney"
                    placeholder=""
                    className="form-control mt-3"
                    value={data.purposeofjourney}
                    onChange={handleInputchange}
                  />
                </div>

                {/* <div className="w-1/7 border-r border-t border-l font-bold border-black pl-1 pr-0.5 text-sm whitespace-nowrap">
                  Purpose of journey
                  <div>
                    <div className="w-full border-t border-black pl-1"></div>
                  </div>
                </div> */}
                {/* <div className="w-1/7 h-1 border-r border-t border-l  border-black pl-1">
                  Mode Of travel and Class of Accomodation Used
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-500 m-1 flex flex-row justify-start align-start">
          <div className=" w-1/4 ml-1 mt-2">
            <span className="bg-red-200 ml-2 flex align-center justify-center font-bold">
              Mode Of Journey
            </span>
            <span className="ml-2 mt-6 flex align-middle justify-evenly">
              <span className="ml-9" name="selectmode">
                <Transportdropdown />
              </span>
            </span>
          </div>

          <div className=" w-1/2 ml-1 mt-2">
            <span className=" w-1/2 ml-2 pl-2 flex align-middle justify-start font-bold bg-red-200">
              Other Details
            </span>
            <div className="flex flex-col justify-start align-middle ml-8 mt-4 text-sm mr-2 font-bold">
              Date of Absence from halt place
              {/* <div className="flex flex-row">
                a{"\u0029"}From
                <span className="md:mb-2 md:ml-4 ml-2 border border-black pl-1">
                  <DateTimePicker className="w-full border-t border-black" />
                </span>
              </div> */}
              <div className="form-group col-5 react-date mb-2">
                <ReactDatePicker
                  onChange={(date) => setCurrentDate(date)}
                  className="form-control-tour"
                  showIcon
                  selected={currentDate}
                  // selected={data.dateofAbsence}
                  name="dateofAbsence"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="border border-gray-500 m-1 flex flex-col justify-start align-start"
          name="daclaimed"
        >
          <div className="flex flex-row">
            <h1 className="flex align-top justify-start pl-1 font-bold text-sx bg-red-200 min-w-screen w-full items-center">
              Fill below table in case higher rate of DA is claimed for stay
            </h1>
            <span>
              <button onClick={handlePlusclick2} className="btn btn_secondary">
                +
              </button>
            </span>
          </div>
          {/* <div className="flex flex-row justify-between ml-2 mr-2 text-sm font-bold"> */}
          {showInputs1 && (
            <div className="row">
              {/* <span>Stay From</span>
            <span>Stay Still</span>
            <span>Hotel Name</span>
            <span>Rate per Day</span>
            <span>Total Paid</span> */}
              <div className="form-group mb-2">
                <div className="flex flex-row">
                  <div className="form-group pl-2 col-5 react-date">
                    <label className=" font-bold"> Stay From </label>
                    <ReactDatePicker
                      onChange={(date) => setCurrentDate(date)}
                      className="form-control"
                      showIcon
                      selected={currentDate}
                    />
                  </div>
                  <div className="form-group pl-2 col-5 react-date">
                    <label className=" font-bold">Stay Still</label>
                    <ReactDatePicker
                      onChange={(date) => setCurrentDate(date)}
                      className="form-control"
                      showIcon
                      selected={currentDate}
                    />
                  </div>
                  <div className="form-group pl-2">
                    <label className=" font-bold">First Name</label>
                    <input
                      type="text"
                      name="First Name"
                      placeholder=""
                      className="form-control"
                    />
                  </div>
                  <div className="form-group pl-2">
                    <label className="font-bold form-group">
                      <span>Rate Per Day</span>
                    </label>
                    <input
                      type="number"
                      placeholder=""
                      className="form-control"
                    />
                  </div>
                  <div className="form-group pl-2 mr-2">
                    <label className=" font-bold">Total paid</label>
                    <input
                      type="number"
                      placeholder=""
                      className="form-control"
                    />
                  </div>
                  <div className="form-group pl-2 mr-2">
                    <button className=" btn btn_primary btn_md my-3">
                      ADD
                    </button>
                  </div>
                </div>
                {/* {errors.firstName && (
                <span className="text-danger">{errors.firstName.message}</span>
              )} */}
              </div>
            </div>
          )}
        </div>
        <div className="border border-gray-500 m-1 flex flex-col justify-start align-start">
          <div
            className="flex flex-row align-middle justify-between bg-red-200"
            name="accomodation"
          >
            <h1 className="flex align-top justify-start pl-1 font-bold text-sx  min-w-screen w-full items-center overflow-x-auto">
              Fill the journey details for the higher class of Accomodation than
              entitled
            </h1>

            <span>
              <button onClick={handlePlusclick} className="btn btn_secondary">
                +
              </button>
            </span>
            {/* <span>
              <button className="btn btn_secondary">-</button>
            </span> */}
          </div>
          {showInputs && (
            <div className="flex flex-row justify-between ml-2 mr-2 text-sm font-bold mb-2">
              {/* <span>Date</span>
            <span>Travelling from</span>
            <span>Travelling To</span>
            <span>Mode Of Conveyance</span>
            <span>Entitled Class</span>
            <span>Travelled Class</span>
            <span>Fair Of Class</span> */}

              <div className="form-group pl-2 col-5 react-date">
                <label className=" font-bold"> Date </label>
                <ReactDatePicker
                  onChange={(date) => setCurrentDate(date)}
                  className="form-control"
                  showIcon
                  selected={currentDate}
                />
              </div>
              <div className="form-group pl-2">
                <label className=" font-bold">Travelling From</label>
                <input type="text" placeholder="" className="form-control" />
              </div>
              <div className="form-group pl-2">
                <label className=" font-bold">Travelling To</label>
                <input type="text" placeholder="" className="form-control" />
              </div>
              <div className="form-group pl-2">
                <label className=" font-bold whitespace-nowrap">
                  Mode Of Conveyance
                </label>
                <input type="text" placeholder="" className="form-control" />
              </div>
              <div className="form-group pl-2">
                <label className=" font-bold">Entitled Class</label>
                <input type="text" placeholder="" className="form-control" />
              </div>
              <div className="form-group pl-2">
                <label className=" font-bold">Travelled Class</label>
                <input type="text" placeholder="" className="form-control" />
              </div>
              <div className="form-group pl-2">
                <label className=" font-bold">Fair Of Class</label>
                <input type="text" placeholder="" className="form-control" />
              </div>
              <div className="form-group pl-2">
                <button className=" btn btn_primary btn_md my-3">ADD</button>
                {/* <label className=" font-bold">Fair Of Class</label>
              <input type="text" placeholder="" className="form-control" /> */}
              </div>
            </div>
          )}
        </div>
        <div className=" m-1 flex flex-col justify-start align-start">
          <h1 className="flex align-top justify-start pl-1 font-bold text-sx bg-red-200 min-w-screen w-full items-center">
            Remarks
          </h1>
          <div className="flex flex-row  ml-2 mr-2 text-sm font-bold">
            <span className="text-red-500 mr-2"> * </span>
            <span className="mt-2 mr-2">Initiator Remarks </span>
            <div>
              <textarea
                id="descriptionInput"
                className="mt-1 form-control resize-none overflow-hidden"
                placeholder=""
                name="remarks"
                value={data.remarks}
                onChange={handleInputchange}
                // border-gray-500 w-96 h-10  ml-4 p-2
              />
            </div>
          </div>
        </div>
        <div className=" m-1 flex flex-col justify-start align-start">
          <h1 className="flex align-middle justify-middle pl-1 font-bold text-sx bg-red-200 min-w-screen w-full items-center">
            Fill Details
          </h1>
          <div className="flex flex-row  ml-2 mr-2 text-sm font-bold">
            <span className="mt-2">Enter Document Name </span>
            <div>
              <input
                type="Text"
                id="regularInput"
                // className="mt-1 ml-2 border mr-1 border-gray-500 w-1/8"
                className="form-control-document"
                placeholder=""
                name="documentname"
                value={data.documentname}
                onChange={handleInputchange}
              />
            </div>

            {/* <div className="form-group pl-2">
                  <label className=" font-bold">First Name</label>
                  <input
                    type="text"
                    name="First Name"
                    placeholder=""
                    className="form-control"
                  />
                </div> */}
          </div>
          <div className="flex flex-row  ml-2 mr-2 text-sm font-bold">
            <span className="mt-2 ">Enter Amount </span>
            <div>
              <input
                type="Number"
                id="regularInput"
                // className="mt-1 ml-16 border mr-1 border-gray-500 w-1/8"
                className="form-control-document"
                placeholder=""
                name="enteramount"
                value={data.enteramount}
                onChange={handleInputchange}
              />
            </div>
          </div>
          <div className="flex flex-row justify-start align-middle">
            <span className="text-sm font-bold ml-2 mt-3 whitespace-nowrap">
              Upload Attachment
            </span>
            <input
              type="file"
              id="attachment"
              // className=" mt-2 ml-7 flex items-center justify-center h-8 border-dashed border-2 border-gray-300"
              className="form-control-tour ml-2"
              // Add necessary event handlers or state management for file handling
              name="attachment"
              value={data.attachment}
              onChange={handleInputchange}
            />
          </div>
        </div>
        <div className="employee details"></div>
        {/* <Dropdown /> */}

        <button
          className="ml-10 btn btn_primary btn_md my-3"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      ;
    </div>
  );
};

export default Tourallowance;

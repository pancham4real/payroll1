"use client";

import React, { useState, useEffect } from "react";
import Dropdown from "./dropdown";
// import jsPDF from "jspdf";
// import { jsPDF } from "jspdf";
// import "jspdf-autotable";

import jsPDF from "jspdf";
import "jspdf-autotable";

const PDFGenerator = () => {
  const [res, setRes] = useState([]);
  const [res2, setRes2] = useState([]);
  const [status, setStatus] = useState("");

  const addUserID = async () => {
    try {
      const response = await fetch(
        // "http://localhost:8080/api/gpfcheckacntpost/10063546",
        "http://uat.cept.gov.in/payroll/api/gpfcheckacntpost/10277430",
        {
          method: "GET",
          // body: JSON.stringify([{ userid }]) // Uncomment if needed
        }
      );
      console.log(response, "Pancham1");
      setStatus(response?.Status);
      if (!response?.ok) {
        throw new Error("Network response was not ok");
      }

      const respons = await response.json();
      console.log(response, "Pancham");

      setRes(respons[0]?.Data);
      // setRes(respons[0]);

      console.log(respons[0].Data, "responseee");
      // console.log(respons[0], "responseee");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Second API
  const addUserID2 = async () => {
    try {
      const response = await fetch(
        // "http://localhost:8080/api/gpfcheckacntpost/10063546",
        "http://uat.cept.gov.in/payroll/api/gpfcheckstatement/10063546/2022",

        {
          method: "GET",
          // body: JSON.stringify([{ userid }]) // Uncomment if needed
        }
      );
      console.log("addUserID2 res", response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const respons = await response.json();
      setRes2(respons[0].Data);
      setStatus(respons[0].Status);
      console.log(respons[0].Data, "second parsed response");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    addUserID();
    addUserID2();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to execute once on component mount

  const generatePDF = () => {
    const doc = new jsPDF();
    // const doc = new jsPDF("p", "pt", "A4");

    const tableData = [
      [
        "Office of Working",
        res[0]?.office_desc,
        "Rate of Interest Q1:",
        res[0]?.pay_level,
      ],
      [
        "Financial Year",
        res[0]?.pay_level,
        "Rate of Interest Q2: ",
        res[0]?.pay_level,
      ],
      [
        "Account Code",
        res[0]?.index,
        "Rate of Interest Q3: ",
        res[0]?.pay_level,
      ],
      [
        "Name of the Employee",
        res[0]?.name,
        "Rate of Interest Q4: ",
        res[0]?.pay_level,
      ],
      ["EMP ID", res[0]?.empid],
      ["Basic Pay", res[0]?.basic_pay],
    ];
    doc.autoTable({
      // head: tableData.slice(0, 1), // Header row
      body: tableData.slice(1), // Data rows
      startY: 50, // Y-coordinate to start the table
    });

    const tableData2 = [
      [
        "Month",
        // res2[0]?.office_desc,
        // "Rate of Interest Q1:",
        // res2[0]?.pay_level,
        "Subscription",
        "Recovery",
        "Withdrawn",
      ],
      [
        res2[0]?.Month,
        res2[0]?.Subscription,
        res2[0]?.Recovery,
        res2[0]?.Withdrawan,
      ],
      [
        res2[1]?.Month,
        res2[1]?.Subscription,
        res2[1]?.Recovery,
        res2[1]?.Withdrawan,
      ],
      [
        res2[2]?.Month,
        res2[2]?.Subscription,
        res2[2]?.Recovery,
        res2[2]?.Withdrawan,
      ],
      [
        res2[3]?.Month,
        res2[3]?.Subscription,
        res2[3]?.Recovery,
        res2[3]?.Withdrawan,
      ],
      [
        res2[4]?.Month,
        res2[4]?.Subscription,
        res2[4]?.Recovery,
        res2[4]?.Withdrawan,
      ],
    ];
    // const tableData3 = [
    //   [
    //     res2[0]?.Month,
    //     res2[0]?.Subscription,
    //     res2[0]?.Recovery,
    //     res2[0]?.Withdrawan,
    //   ],
    // ];

    doc.setFontSize(14);

    doc.autoTable({
      head: tableData2.slice(0, 1), // Header row
      body: tableData2.slice(1), // Data rows
      startY: 100, // Y-coordinate to start the table
    });

    // Add other text or elements outside the table if needed
    doc.text(
      100,
      20,
      `Department of Post\n Office of the Director of Accounts(P)\n Head Record Office Bengaluru-560001\n GPF Balance Slip`,
      { align: "center" }
    );

    doc.save("SalarySlip.pdf");
  };

  return (
    <div>
      <h1 className="pb-4 pl-10 font-bold text-2xl">Salary Slip</h1>
      <Dropdown />
      <div>
        <label
          htmlFor="Empolyee"
          // className="ml-80 pb-4 pl-10 font-bold text-2xl"
          className="flex-col md:flex-row items-center justify-between gap-3"
        >
          Employee Id :
          <span className="flex-col md:flex-row items-center justify-between gap-2 ">
            <input type="number" />
          </span>
        </label>
      </div>
      <button
        className="ml-10 btn btn_primary btn_md my-3"
        onClick={generatePDF}
      >
        Generate PDF
      </button>
    </div>
  );
};

export default PDFGenerator;

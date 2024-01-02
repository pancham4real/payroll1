"use client";
import DataTable from "react-data-table-component";
import React, { useEffect, useState } from "react";
import Loader from "../loading";

import background from "../../../assets/img/image.png";
import Breadcrumbs from "../../../components/Breadcrumb";
import PageTitle from "../../../components/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faGear,
  faLock,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

// customStyles={ tableHeaderstyle}
const customStyle = {
  headCells: {
    style: {
      fontWeight: "bold",
      fontSize: "16px",
      backgroundColor: "#C9252C",
      color: "white",
    },
  },
  cells: { style: { fontSize: "16px" } },
  header: { style: { fontSize: "24px", fontWeight: "600" } },
  rows: {
    style: {
      backgroundColor: "#FFFFFF",
      "&:nth-child(2n)": {
        backgroundColor: "#edcec5",
      },
    },
  },
  pagination: {
    style: {
      display: "flex",
      justifyContent: "end",
      alignItems: "center",
    },
    pageButtonsStyle: {
      padding: "8px",
      backgroundColor: "#C9252C",
      color: "#fff",
    },
    pagination: {
      style: {
        color: "#fff",
        backgroundColor: "#fff",
      },
    },
    currentPageStyle: {
      background: "#C9252C", // Set the background color for the current page
      color: "white", // Set the text color for the current page
    },
  },
};

const columns = [
  { name: "Employee Name", selector: (row) => row.name, sortable: true },
  { name: "Joined", selector: (row) => row.year, sortable: true },
  { name: "Phone", selector: (row) => row.phone, sortable: true },
  { name: "Email", selector: (row) => row.email },
];

export const DataTableExample = () => {
  const sdata = [
    // const data = [
    {
      id: 1,
      name: "Mahesh Kumar",
      year: "1988",
      phone: "9811767689",
      email: "mahesh@gmail.com",
    },
    {
      id: 2,
      name: "Raj Kumar",
      year: "1985",
      phone: "8911767680",
      email: "raj@gmail.com",
    },
    {
      id: 3,
      name: "Ravi Kumar",
      year: "1985",
      phone: "9911009880",
      email: "ravi@gmail.com",
    },
    {
      id: 4,
      name: "Sandeep Kumar",
      year: "1995",
      phone: "7811099845",
      email: "sandeep@gmail.com",
    },
    {
      id: 5,
      name: "Rajeev V",
      year: "1997",
      phone: "9611099808",
      email: "rajeev@gmail.com",
    },
    {
      id: 6,
      name: "V. Mahesh Kumar",
      year: "1988",
      phone: "9811767689",
      email: "mahesh@gmail.com",
    },
    {
      id: 7,
      name: "Harish Kumar",
      year: "1985",
      phone: "8911767680",
      email: "raj@gmail.com",
    },
    {
      id: 8,
      name: "Ravish Kumar",
      year: "1985",
      phone: "9911009880",
      email: "ravi@gmail.com",
    },
    {
      id: 9,
      name: "Ramesh Kumar",
      year: "1995",
      phone: "7811099845",
      email: "sandeep@gmail.com",
    },
    {
      id: 10,
      name: "M. Rajeev",
      year: "1997",
      phone: "9611099808",
      email: "mrajeev@gmail.com",
    },
    {
      id: 11,
      name: "Kumar Sandeep",
      year: "1995",
      phone: "7811099845",
      email: "ksandeep@gmail.com",
    },
    {
      id: 12,
      name: "Rajeev Ranjan",
      year: "1997",
      phone: "9618888808",
      email: "rajeevranjan@gmail.com",
    },
  ];
  const [data, setData] = useState(sdata);
  // search
  const [search, SetSearch] = useState("");
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    if (search.length > 0) {
      const result = sdata.filter((item) => {
        return (
          item.name.toLowerCase().match(search.toLocaleLowerCase()) ||
          item.year.toLowerCase().match(search.toLocaleLowerCase())
        );
      });
      setData(result);
    } else {
      setData(sdata);
    }
    //setData(filter)
  }, [search]);
  // search end
  //   loader
  const [pending, setPending] = React.useState(true);
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(data);
      setPending(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  // end loader

  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const handleRowSelected = React.useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            (r) => r.name
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
        const updatedData = data.filter(
          (item) =>
            !selectedRows.some((removeItem) => removeItem.id === item.id)
        );
        alert(updatedData.length);
        setData([...updatedData]);
      }
    };
    return (
      <button
        key="delete"
        onClick={handleDelete}
        className="btn btn_primary"
        icon
      >
        Delete
      </button>
    );
  }, [data, selectedRows, toggleCleared]);
  // export
  function convertArrayOfObjectsToCSV(array) {
    let result;
    const columnDelimiter = ",";
    const lineDelimiter = "\n";
    const keys = Object.keys(data[0]);
    result = "";
    result += keys.join(columnDelimiter);
    result += lineDelimiter;
    array.forEach((item) => {
      let ctr = 0;
      keys.forEach((key) => {
        if (ctr > 0) result += columnDelimiter;
        console.log(
          "🚀 ~ file: DataTableExample.jsx:93 ~ convertArrayOfObjectsToCSV ~ result:",
          result
        );
        result += item[key];
        console.log(
          "🚀 ~ file: DataTableExample.jsx:95 ~ convertArrayOfObjectsToCSV ~ result:",
          result
        );
        ctr++;
      });
      result += lineDelimiter;
      console.log(
        "🚀 ~ file: DataTableExample.jsx:99 ~ convertArrayOfObjectsToCSV ~ result:",
        result
      );
    });
    return result;
    console.log(
      "🚀 ~ file: DataTableExample.jsx:102 ~ convertArrayOfObjectsToCSV ~ result:",
      result
    );
  }

  function downloadCSV(array) {
    const link = document.createElement("a");
    let csv = convertArrayOfObjectsToCSV(array);
    if (csv == null) return;
    const filename = "export.csv";
    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }
    link.setAttribute("href", encodeURI(csv));
    link.setAttribute("download", filename);
    link.click();
  }

  const Export = ({ onExport }) => (
    <button
      className="btn btn_primary me-2"
      onClick={(e) => onExport(e.target.value)}
    >
      Export
    </button>
  );
  const actionsMemo = React.useMemo(
    () => <Export onExport={() => downloadCSV(data)} />,
    []
  );
  // export end

  return (
    <React.Fragment>
      <PageTitle title="Data Table" titleBg={background} />
      <div className="container-fluid px-5 mb-4">
        <Breadcrumbs
          breadcrumbs={[
            { name: "🏠 Home", link: "/" },
            { name: "Datatable", link: "/" },
          ]}
        />
        <div className="row">
          <div className="w-full px-5 py-2">
            <DataTable
              className="p-5 bg-white"
              title="Employee Table"
              customStyles={customStyle}
              columns={columns}
              data={data}
              selectableRows
              contextActions={contextActions}
              onSelectedRowsChange={handleRowSelected}
              clearSelectedRows={toggleCleared}
              pagination
              progressPending={pending}
              progressComponent={<Loader />}
              actions={actionsMemo}
              subHeader
              subHeaderComponent={
                //    <input type="text"
                //    className="w-25 form-control pe-0"
                //    placeholder="Search..."
                //    value={ search }
                //    onChange={(e)=>SetSearch(e.target.value)}
                //    />
                <div className="relative flex justify-between items-stretch mb-2 w-1/4">
                  <span className="flex items-center px-2 py-2.5 text-md font-normal leading-6 text-[#6B7280] whitespace-nowrap bg-white border-2 border-[#D1D5DB] rounded-l-md">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => SetSearch(e.target.value)}
                  />
                </div>
              }
              subHeaderAlign="right"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default DataTableExample;

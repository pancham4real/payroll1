"use client";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ children, ...props }) => {
  const handleModal = (efrom = "button", etype = "") => {
    if (etype == "ok") {
      props.handleOkBtn();
    }
    if (
      props.modalType === "flexi" &&
      (efrom === "body" || efrom === "button")
    ) {
      props.handleCloseBtn();
    } else if (props.modalType === "static" && efrom === "button") {
      props.handleCloseBtn();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Escape") {
      console.log(event.keyCode);
      handleModal("body");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Add event listener for "Escape" key press
      window.addEventListener("keydown", handleKeyPress);

      // Add a cleanup function to remove the event listener on modal close
      return () => {
        // Remove the event listener
        window.removeEventListener("keydown", handleKeyPress);
      };
    }
  }, []);

  return (
    <React.Fragment>
      <div
        className={`relative z-10`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        onClick={(e) => {
          if (e.target.getAttribute("name") === "modal-container") {
            handleModal("body");
          }
        }}
      >
        <div className="z-11 fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div
            name="modal-container"
            className={`flex min-h-full justify-center p-4 text-start sm:p-0 ${
              props.position === "center"
                ? "items-center sm:items-center"
                : "items-start sm:items:start"
            }`}
          >
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="flex bg-[#b02925] py-5 px-3 text-white justify-between">
                <span>{props.modalHeading}</span>
                <button className="justify-end">
                  <FontAwesomeIcon
                    icon={faXmark}
                    onClick={() => handleModal("button")}
                  />
                </button>
              </div>
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                    {props.icon && (
                      <FontAwesomeIcon className="h-6 w-6" icon={props.icon} />
                    )}
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="text-base font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      {props.messageHeading}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {props.messageText}
                      </p>
                    </div>
                  </div>
                </div>
                {children}
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => handleModal("button", "ok")}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  {props.btnOkText}
                </button>
                {props.btnCancelText?.length > 0 && (
                  <button
                    onClick={() => handleModal("button")}
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    {props.btnCancelText}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;

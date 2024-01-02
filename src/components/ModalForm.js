"use client";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ModalForm = ({ children, ...props }) => {
  const [modalShow, setModalShow] = React.useState(true);
  console.log(props);
  console.log(modalShow);
  const handleModal = () => {
    props.handleCloseBtn();
  };

  return (
    <React.Fragment>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex  justify-center p-4 text-start">
            <div className="relative transform overflow-auto rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-auto">
              <div className="flex bg-[#b02925] py-5 px-3 text-white justify-between">
                <span>{props.modalHeading}</span>
                <button className="justify-end">
                  <FontAwesomeIcon
                    icon={faXmark}
                    onClick={() => handleModal()}
                  />
                </button>
              </div>
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ModalForm;

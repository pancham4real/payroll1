"use client";
import React, { useState } from "react";
import background from "../../../assets/img/titlebg3.jpg";
import Breadcrumbs from "../../../components/Breadcrumb";
// import { Card, Col, Container, Row, Button, Modal, Form, Alert } from 'react-bootstrap';
import PageTitle from "../../../components/PageTitle";
import Modal from "../../../components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import StatsCard from "../cards/page"; //doubt
import ModalForm from "../../../components/ModalForm";

const Modals = () => {
  const [show, setShow] = React.useState(false);
  const [showMf, setShowMf] = React.useState(false);
  const [showSAlert, setShowSAlert] = useState(true);

  const handleClose = () => {
    setShow(false);
  };
  const handleCloseMf = () => setShowMf(false);

  const handleShow = () => setShow(true);
  // modal 2
  const [modal1Show, setModal1Show] = React.useState(false);
  // modal 3
  const [modalFormShow, setModalFormShow] = React.useState(false);
  //  modal 4
  const [fullscreen, setFullscreen] = useState(true);
  const [modalFullScreenShow, setModalFullScreenShow] = React.useState(false);
  //  Success Alert
  const [showSuccessAlert, setSuccessAlert] = useState(true);
  const [showFailureAlert, setFailureAlert] = useState(true);
  //  Error Alert
  const [showErrorAlert, setErrorAlert] = useState(true);
  const [modalProps, setModalProps] = useState([]);
  const handleSuccessAlert = () => {
    setSuccessAlert(true);
  };
  const handleCloseSuccessAlert = () => {
    setSuccessAlert(false);
  };
  const handleFailureAlert = () => {
    setFailureAlert(true);
  };
  const handleCloseFailureAlert = () => {
    setFailureAlert(false);
  };

  const handleOk = () => {
    handleClose();
  };
  const handleOkMf = () => {
    handleCloseMf();
  };
  const handleModal = () => {
    setShow(true);
    setModalProps({
      modalType: "static",
      position: "start",
      modalHeading: "Welcome to India Post",
      messageHeading: "Static backdrop Modal",
      messageText:
        "This modal will not close if you click outside. The keyboard escape will not work too.",
      btnOkText: "Ok",
      btnCancelText: "Close",
      icon: faTriangleExclamation,
      handleCloseBtn: handleClose,
      handleOkBtn: handleOk,
    });
  };
  const handleModalVC = () => {
    setShow(true);
    setModalProps({
      modalType: "flexi",
      position: "center",
      modalHeading: "Welcome to India Post",
      messageHeading: "Vertically Centered Flexi Modal",
      messageText:
        "This modal will close if you click outside. The keyboard escape will also work.",
      btnOkText: "Ok",
      btnCancelText: "Close",
      icon: faTriangleExclamation,
      handleCloseBtn: handleClose,
      handleOkBtn: handleOk,
    });
  };
  const handleModalForm = () => {
    setShowMf(true);
    setModalProps({
      modalType: "static",
      modalHeading: "Welcome to India Post",
      handleCloseBtn: handleCloseMf,
      handleOkBtn: handleOkMf,
    });
  };
  return (
    <React.Fragment>
      <div id="content">
        <PageTitle title="Modals and Alerts " titleBg={background} />
        <div className="container-fluid px-5 mb-4">
          <Breadcrumbs
            breadcrumbs={[
              { name: "🏠 Home", link: "/" },
              { name: "page name", link: "/modals" },
            ]}
          />
          <div className="row">
            <div className="w-full">
              <div className="w-full bg-white p-4">
                <div className="card-body border-0">
                  <h2 className="m-4 text-4xl font-bold">Modals</h2>
                  <div className="flex flex-wrap gap-3 justify-between p-4">
                    <div className="mb-3 col-span-3 sm:col-span-2">
                      <button
                        onClick={handleModal}
                        type="button"
                        className="bg-primary text-white hover:bg-secondary hover:text-primary px-4 py-2 rounded"
                      >
                        Static backdrop Modal
                      </button>
                    </div>
                    <div className="mb-3 col-span-3 sm:col-span-2">
                      <button
                        onClick={handleModalVC}
                        type="button"
                        className="bg-primary text-white hover:bg-secondary hover:text-primary px-4 py-2 rounded"
                      >
                        Vertically Centered Flexi Modal
                      </button>
                    </div>
                    <div className="mb-3 col-span-3 sm:col-span-2">
                      <button
                        onClick={handleModalForm}
                        type="button"
                        className="bg-primary text-white hover:bg-secondary hover:text-primary px-4 py-2 rounded"
                      >
                        Form with Modal
                      </button>
                    </div>
                  </div>
                  <hr className="mt-5" />
                  {/* alerts start */}
                  <div className="row">
                    <h2 className="m-4 text-4xl font-bold">Alerts</h2>
                    <div className="flex flex-col lg:flex-row gap-4 justify-between">
                      {showFailureAlert && (
                        <div className="flex">
                          <div
                            role="alert"
                            className=" relative p-5 bg-red-200 border border-red-700 rounded-lg"
                          >
                            <div className="flex space-x-4">
                              <button
                                onClick={handleCloseFailureAlert}
                                type="button"
                                className="absolute top-0 right-0 z-10 px-2 py-2 text-xl"
                                aria-label="Close alert"
                              >
                                X
                              </button>
                              <div className="text-red h4 space-x-3 text-2xl flex justify-between items-center">
                                <FontAwesomeIcon icon={faTriangleExclamation} />
                                Oh! You got an error!
                              </div>
                            </div>
                            <p className="text-red p-5">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Vestibulum condimentum maximus ex, sit amet
                              dapibus nisl pulvinar quis.
                            </p>
                          </div>
                        </div>
                      )}
                      {showSuccessAlert && (
                        <div className="flex">
                          <div
                            role="alert"
                            className=" relative p-5 bg-green-200 border border-green-700 rounded-lg"
                          >
                            <div className="flex space-x-4">
                              <button
                                onClick={handleCloseSuccessAlert}
                                type="button"
                                className="absolute top-0 right-0 z-10 px-2 py-2 text-xl"
                                aria-label="Close alert"
                              >
                                X
                              </button>
                              <div className="text-green h4 space-x-3 text-2xl flex justify-between items-center">
                                <FontAwesomeIcon icon={faCircleCheck} />
                                Registered Successfully !!!
                              </div>
                            </div>
                            <p className="text-green p-5">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Vestibulum condimentum maximus ex, sit amet
                              dapibus nisl pulvinar quis.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-4 gap-2 flex justify-between">
                      <div className="mb-3 col-span-3 sm:col-span-2">
                        <button
                          onClick={handleFailureAlert}
                          type="button"
                          className="bg-primary text-white hover:bg-secondary hover:text-primary px-4 py-2 rounded"
                        >
                          Failure Alert
                        </button>
                      </div>
                      <div className="mb-3 col-span-3 sm:col-span-2">
                        <button
                          onClick={handleSuccessAlert}
                          type="button"
                          className="bg-primary text-white hover:bg-secondary hover:text-primary px-4 py-2 rounded"
                        >
                          Success Alert
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* alerts start */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {show && <Modal {...modalProps}></Modal>}
      {showMf && (
        <ModalForm {...modalProps}>
          <StatsCard />
        </ModalForm>
      )}
    </React.Fragment>
  );
};

export default Modals;

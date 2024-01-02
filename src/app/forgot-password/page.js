import React from "react";
import Image from "next/image";
import "../../assets/styles/AuthTwo.css";
import Link from "next/link";
import Form from "../../components/Form";
import IndiaPostLogo from "../../assets/img/India_Post_Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faGear,
  faLock,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faEdit, faEye, faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const ForgotPassword = () => {
  return (
    <React.Fragment>
      <section className="loginop2" id="content">
        <div className="container-fluid">
          <div className="flex gap-0 columns-2">
            <div
              className="hidden md:flex bg-image w-full"
              style={{
                backgroundImage: "url(" + "images/forgot-pswd.jpg" + ")",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 50%",
              }}
            />

            <div className="bg-light w-full">
              <div className="auth flex items-center py-12">
                <div className="md:w-3/5 w-11/12 mx-auto">
                  <div className="flex justify-center mb-6">
                    <Image
                      id="logo"
                      src={IndiaPostLogo}
                      alt="Logo"
                      width={200}
                      height={200}
                      className="img-fluid width-150 text-center"
                    />
                  </div>
                  <h1 className="font-32 fw-500 mb-12 leading-tight text-center">
                    Department of Posts <br />
                    Retrieve Your Credentials
                  </h1>
                  <Form type="forgotpassword" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ForgotPassword;

import React from "react";
import Image from "next/image";
import IndiaPostLogo from "../../assets/img/India_Post_Logo.png";
import "../../assets/styles/AuthTwo.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEdit, faEye, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faEllipsis,
  faGear,
  faLock,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Form from "../../components/Form";

const LoginTwo = () => {
  // const formProps = [
  //   {
  //     type: "text",
  //     ele: (
  //       <Input
  //         type="text"
  //         placeholder="User ID"
  //         aria-label="Userid"
  //         aria-describedby="basic-addon1"
  //         className="py-1.5 px-3 w-full border-solid border-1"
  //       />
  //     ),
  //     icon: <FontAwesomeIcon icon={faUser} size={5} />,
  //   },
  //   {
  //     type: "password",
  //     ele: (
  //       <Input
  //         placeholder="***********"
  //         type="password"
  //         aria-label="Userid"
  //         aria-describedby="basic-addon1"
  //         className="py-1.5 px-3 w-full border-solid border-1"
  //       />
  //     ),
  //     icon: <FontAwesomeIcon icon={faLock} />,
  //   },
  //   {
  //     type: "checkbox",
  //     ele: (
  //       <label className="custom-checkbox">
  //         Remember me
  //         <Input
  //           type="checkbox"
  //           checked
  //           // onChange={"handleClick"}
  //         />
  //         <span className="checkmark"></span>
  //       </label>
  //     ),
  //   },
  //   {
  //     type: "button",
  //     ele: (
  //       <Button
  //         type="submit"
  //         className="btn btn_primary btn_md btn-block text-uppercase my-4 w-full"
  //         handleClick={handleClick}
  //       >
  //         Sign in
  //       </Button>
  //     ),
  //   },
  //   {
  //     type: "link",
  //     ele: (
  //       <Link href="/forgot-password" className="mt-12 block font-14">
  //         Forgot Password
  //       </Link>
  //     ),
  //   },
  //   {
  //     type: "link",
  //     ele: (
  //       <Link href="/Register" className="mt-12 block font-14">
  //         Register
  //       </Link>
  //     ),
  //   },
  // ];

  return (
    <React.Fragment>
      <section className="loginop2" id="content">
        <div className="container-fluid">
          <div className="flex gap-0 columns-2">
            <div
              className="hidden md:flex bg-image w-full"
              style={{
                backgroundImage: "url(" + "images/login-bg2.png" + ")",
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
                      width={200}
                      height={200}
                      alt="Logo"
                      className="img-fluid width-150 text-center"
                    />
                  </div>
                  <h1 className="font-32 fw-500 mb-12 leading-tight text-center">
                    Login to your account and start exploring!
                  </h1>
                  <Form type="login"></Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default LoginTwo;

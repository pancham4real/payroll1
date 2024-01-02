import React from "react";
import Image from "next/image";
import IndiaPostLogo from "../../assets/img/India_Post_Logo.png";
import "../../assets/styles/AuthTwo.css";
import Link from "next/link";
import Form from "../../components/Form";

const RegisterTwo = () => {
  return (
    <React.Fragment>
      <section className="regop2" id="content">
        <div className="container-fluid">
          <div className="flex gap-0 md:flex-col lg:flex-row">
            <div
              className="hidden md:flex bg-image lg:w-1/3 md:col-span-4"
              style={{
                backgroundImage: "url(images/reg-bg.jpg)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 50%",
              }}
            />

            <div className="bg-light w-full lg:w-2/3">
              <div className="auth flex items-center py-5">
                <div className="md:w-3/4 w-11/12 mx-auto">
                  <div className="lg:w-3/4 mx-auto">
                    <div className="text-center flex justify-center mb-4">
                      <Image
                        id="logo"
                        src={IndiaPostLogo}
                        width={0}
                        height={0}
                        alt="Logo"
                        className="img-fluid width-150 text-center"
                      />
                    </div>
                    <h1 className="text-2xl font-semibold mb-5 text-center">
                      Register now and let the adventure begin!
                    </h1>
                    <Form type="registration" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default RegisterTwo;

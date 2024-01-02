import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import background from "../../../assets/img/image.png";
import Breadcrumbs from "../../../components/Breadcrumb";
import PageTitle from "../../../components/PageTitle";
import Form from "../../../components/Form";
import "react-datepicker/dist/react-datepicker.css";

const FormTest = () => {
  return (
    <React.Fragment>
      <div id="content">
        <PageTitle title="Full Page Form " titleBg={background} />

        <div className="container-fluid px-5 mb-4">
          <Breadcrumbs
            breadcrumbs={[
              { name: "🏠 Home", link: "/" },
              { name: "forms", link: "/form-one" },
            ]}
          />
          <div className="row">
            <div className="card bg-white p-6 bordered rounded-lg drop-shadow-md">
              <div className="pb-5">
                <h2 className="font-25 fw-600 my-3">
                  Register now and let the adventure begin!
                </h2>
              </div>
              <Form type="form-one" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FormTest;

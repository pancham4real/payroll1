import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import background from "../../../assets/img/image.png";
import Breadcrumbs from "../../../components/Breadcrumb";
import PageTitle from "../../../components/PageTitle";
import Form from "../../../components/Form";

const FormFloatingLabel = () => {
  return (
    <React.Fragment>
      <div id="content">
        <PageTitle title="Floating Label" titleBg={background} />

        <div className="w-full mr-auto ml-auto px-5 mb-4">
          <Breadcrumbs
            breadcrumbs={[
              { name: "🏠 Home", link: "/" },
              { name: "forms", link: "/form-four" },
            ]}
          />
          <div className="row">
            <div className="card bg-white p-6 bordered rounded-lg drop-shadow-md">
              <div className="pb-3">
                <h2 className="font-25 fw-600 my-3">
                  Register now and let the adventure begin!
                </h2>
              </div>
              <Form type="form-four" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FormFloatingLabel;

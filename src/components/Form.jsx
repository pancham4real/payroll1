"use client";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  faEllipsis,
  faGear,
  faLock,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "./Input";
import Button from "./Button";
import Link from "next/link";
import ReactDatePicker from "react-datepicker";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { faEdit, faEye, faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const Form = (props) => {
  const type = props.type;

  const GENDER_OPTIONS = [
    { text: "Male", value: "male" },
    { text: "Female", value: "female" },
    { text: "Other", value: "other" },
  ];

  const [startDate, setStartDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const ShowFormTwoB = () => {
    const [stDate, setStDate] = useState(new Date());
    return (
      <form>
        <div className="row flex items-center justify-between">
          <div className="form-group col-5 react-date">
            <label>From Date</label>
            <ReactDatePicker
              onChange={(date) => setStDate(date)}
              className="form-control"
              showIcon
              selected={stDate}
            />
          </div>
          <div className="form-group col-5 react-date">
            <label>To Date</label>
            <ReactDatePicker
              onChange={(date) => setToDate(date)}
              className="form-control"
              showIcon
              selected={stDate}
            />
          </div>
        </div>
      </form>
    );
  };

  const ShowFormTwoA = () => {
    const schema = yup
      .object({
        firstName: yup
          .string()
          .required("First Name is required")
          .matches(
            /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/,
            "This is not in correct format"
          ),
        lastName: yup
          .string()
          .matches(
            /^$|^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/,
            "This is not in correct format"
          ),
        gender: yup.string().required("Gender is required"),
        dob: yup.string().required("Date of Birth is required"),
        email: yup
          .string()
          .email("Please enter a valid E-Mail")
          .required("Email is required"),
        phone: yup
          .string()
          .required("Gender is required")
          .min(10, "Phone No. should not be less then 10 Characters")
          .max(10, "Phone No. should not be more then 10 Characters")
          .matches(/^[6-9]\d{9}$/, {
            message: "Please enter valid number.",
            excludeEmptyString: false,
          }),
        password: yup
          .string()
          .required("First Name is required")
          .min(6, "Password must be atleat of 6 characters"),
        confirmpassword: yup
          .string()
          .required("First Name is required")
          .min(6, "Password must be atleat of 6 characters")
          .oneOf(
            [yup.ref("password")],
            "Password does not match. Please try again!"
          ),
        radio: yup.string().required("Please make a choice"),
        address: yup
          .string()
          .required("Address is required")
          .min(10, "Address should not be less then 10 Characters"),
      })
      .required();

    const {
      control,
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (values) => console.log(values);

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              placeholder=""
              {...register("firstName")}
              className="form-control"
            />
            {errors.firstName && (
              <span className="text-danger">{errors.firstName.message}</span>
            )}
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              placeholder=""
              {...register("lastName")}
              className="form-control"
            />
            {errors.lastName && (
              <span className="text-danger">{errors.lastName.message}</span>
            )}
          </div>
          <div className="form-group ">
            <label>Gender</label>
            <select className="form-select" {...register("gender")}>
              <option value="">Select Gender</option>
              {GENDER_OPTIONS.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
            {errors.gender && (
              <span className="text-danger">{errors.gender.message}</span>
            )}
          </div>
          <div className="form-group  react-date">
            <label>Date of Birth</label>
            <Controller
              name="dob"
              control={control}
              rules={{ required: "Date of birth is required" }}
              render={({ field }) => (
                <ReactDatePicker
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                  showIcon
                  closeOnScroll={true}
                  showYearDropdown
                  showMonthDropdown
                  className="form-control"
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Date of Birth"
                />
              )}
            />
            {errors.dob && (
              <span className="text-danger">{errors.dob.message}</span>
            )}
          </div>
          <div className="form-group ">
            <label>E-Mail</label>
            <input
              type="email"
              placeholder=""
              {...register("email")}
              className="form-control"
            />
            {errors.email && (
              <span className="text-danger">{errors.email.message}</span>
            )}
          </div>
        </div>
        <div className="row">
          <div>
            <button className="btn btn_primary btn_md my-3" type="submit">
              Register Now
            </button>
          </div>
        </div>
      </form>
    );
  };

  const FormOneForm = () => {
    const onSubmit = (values) => console.log(values);

    const schema = yup
      .object({
        firstName: yup
          .string()
          .required("First Name is required")
          .matches(
            /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/,
            "This is not in correct format"
          ),
        lastName: yup
          .string()
          .matches(
            /^$|^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/,
            "This is not in correct format"
          ),
        gender: yup.string().required("Gender is required"),
        dob: yup.string().required("Date of Birth is required"),
        email: yup
          .string()
          .email("Please enter a valid E-Mail")
          .required("Email is required"),
        phone: yup
          .string()
          .required("Gender is required")
          .min(10, "Phone No. should not be less then 10 Characters")
          .max(10, "Phone No. should not be more then 10 Characters")
          .matches(/^[6-9]\d{9}$/, {
            message: "Please enter valid number.",
            excludeEmptyString: false,
          }),
        password: yup
          .string()
          .required("First Name is required")
          .min(6, "Password must be atleat of 6 characters"),
        confirmpassword: yup
          .string()
          .required("First Name is required")
          .min(6, "Password must be atleat of 6 characters")
          .oneOf(
            [yup.ref("password")],
            "Password does not match. Please try again!"
          ),
        radio: yup.string().required("Please make a choice"),
        address: yup
          .string()
          .required("Address is required")
          .min(10, "Address should not be less then 10 Characters"),
        pincode: yup
          .string()
          .required("Pincode is required")
          .min(6, "Pincode should not be less then 6 Characters")
          .max(6, "Pincode should not be more then 6 Characters")
          .matches(/^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$/, {
            message: "Please enter valid Pincode.",
            excludeEmptyString: false,
          }),
      })
      .required();

    const {
      control,
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="columns-2">
            <div className="form-group col-6">
              <label className="form-label">First Name*</label>
              <Input
                type="text"
                placeholder=""
                {...register("firstName")}
                className="form-control"
              />
              {errors.firstName && (
                <span className="text-danger">{errors.firstName.message}</span>
              )}
            </div>
            <div className="form-group col-6">
              <label>Last Name</label>
              <Input
                type="text"
                placeholder=""
                {...register("lastName")}
                className="form-control"
              />
              {errors.lastName && (
                <span className="text-danger">{errors.lastName.message}</span>
              )}
            </div>
          </div>
          <div className="columns-2">
            <div className="form-group col-6">
              <label>Gender</label>
              <select className="form-control" {...register("gender")}>
                <option value="">Select Gender</option>
                {GENDER_OPTIONS.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
              {errors.gender && (
                <span className="text-danger">{errors.gender.message}</span>
              )}
            </div>
            <div className="form-group col-6 react-date">
              <label>Date of Birth</label>
              <Controller
                name="dob"
                control={control}
                rules={{ required: "Date of birth is required" }}
                render={({ field }) => (
                  <ReactDatePicker
                    selected={field.value}
                    onChange={(date) => field.onChange(date)}
                    showIcon
                    closeOnScroll={true}
                    showYearDropdown
                    showMonthDropdown
                    className="form-control"
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Date of Birth"
                  />
                )}
              />
              {errors.dob && (
                <span className="text-danger">{errors.dob.message}</span>
              )}
            </div>
          </div>
          <div className="columns-2">
            <div className="form-group col-6">
              <label>E-Mail</label>
              <Input
                type="email"
                placeholder=""
                {...register("email")}
                className="form-control"
              />
              {errors.email && (
                <span className="text-danger">{errors.email.message}</span>
              )}
            </div>
            <div className="form-group col-6">
              <label>Phone</label>
              <Input
                type="text"
                placeholder=""
                {...register("phone")}
                className="form-control"
              />
              {errors.phone && (
                <span className="text-danger">{errors.phone.message}</span>
              )}
            </div>
          </div>
          <div className="columns-2">
            <div className="form-group col-6">
              <label>Password</label>
              <Input
                type="password"
                placeholder=""
                {...register("password")}
                className="form-control"
              />
              {errors.password && (
                <span className="text-danger">{errors.password.message}</span>
              )}
            </div>
            <div className="form-group col-6">
              <label>Confirm Password</label>
              <Input
                type="password"
                placeholder=""
                {...register("confirmpassword")}
                className="form-control"
              />
              {errors.confirmpassword && (
                <span className="text-danger">
                  {errors.confirmpassword.message}
                </span>
              )}
            </div>
          </div>
          <div className="columns-2">
            <div className="form-group col-6">
              <label>Pincode</label>
              <Input
                type="text"
                placeholder=""
                {...register("pincode")}
                className="form-control"
              />
              {errors.pincode && (
                <span className="text-danger">{errors.pincode.message}</span>
              )}
            </div>
            <div className="form-group col-6">
              <label>State</label>
              <Input
                type="text"
                placeholder=""
                disabled
                {...register("state")}
                className="form-control disabled:bg-[#e9ecef]"
              />
            </div>
          </div>
          <div className="columns-2">
            <div className="form-group col-6">
              <label>District</label>
              <Input
                type="text"
                placeholder=""
                disabled
                {...register("state")}
                className="form-control disabled:bg-[#e9ecef]"
              />
            </div>
            <div className="mb-3 col-6" controlId="exampleinputTextarea1">
              <label>Address</label>
              <Input
                as="textarea"
                rows={2}
                {...register("address")}
                className="form-control"
              />
              {errors.address && (
                <span className="text-danger">{errors.address.message}</span>
              )}
            </div>
          </div>
        </div>

        <div className="flex-col flex md:flex-row items-center w-full">
          <div className="md:w-1/2 w-full mr-5">
            <div className="form-group my-3 p-4 py-6 bordered rounded-md flex items-center gap-x-2">
              <label className="me-4">Radio Button</label>
              <Input
                className=""
                inline
                label="Option 1"
                name="group1"
                type="radio"
                checked
                id="inline-radio-1"
                {...register("radio")}
              />
              <label>Option 1</label>
              <Input
                className=""
                inline
                label="Option 2"
                name="group2"
                type="radio"
                id="inline-radio-2"
                {...register("radio")}
              />
              <label>Option 2</label>
              <Input
                className=""
                inline
                disabled
                name="group3"
                text="Option 3 (disabled)"
                type="radio"
                id="inline-radio-3"
                {...register("radio")}
              />
              <label>Option 3 (Disabled) </label>
              {errors.radio && (
                <div className="text-danger">{errors.radio.message}</div>
              )}
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="form-group my-3 p-4 py-6 bordered rounded-md flex items-center gap-2">
              <label className="me-4">Checkbox</label>
              <Input
                className=""
                inline
                label="Option 1"
                name="group1"
                type="checkbox"
                checked
                id="inline-checkbox-1"
              />
              <label>Option 1</label>
              <Input
                className=""
                inline
                label="Option 2"
                name="group1"
                type="checkbox"
                id="inline-checkbox-2"
              />
              <label>Option 2</label>
              <Input
                className=""
                inline
                disabled
                label="Option 3 (disabled)"
                type="checkbox"
                id="inline-checkbox-3"
              />
              <label>Option 3(Disabled)</label>
            </div>
          </div>
        </div>

        <div className="row ">
          <div>
            <Button className="btn btn_primary btn_md my-3" type="submit">
              Register Now
            </Button>
          </div>
        </div>
      </form>
    );
  };

  const ShowFormThreeA = () => {
    const schema = yup
      .object({
        firstName: yup
          .string()
          .required("First Name is required")
          .matches(
            /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/,
            "This is not in correct format"
          ),
        lastName: yup
          .string()
          .matches(
            /^$|^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/,
            "This is not in correct format"
          ),
        gender: yup.string().required("Gender is required"),
        dob: yup.string().required("Date of Birth is required"),
        email: yup
          .string()
          .email("Please enter a valid E-Mail")
          .required("Email is required"),
        phone: yup
          .string()
          .required("Gender is required")
          .min(10, "Phone No. should not be less then 10 Characters")
          .max(10, "Phone No. should not be more then 10 Characters")
          .matches(/^[6-9]\d{9}$/, {
            message: "Please enter valid number.",
            excludeEmptyString: false,
          }),
        password: yup
          .string()
          .required("First Name is required")
          .min(6, "Password must be atleat of 6 characters"),
        confirmpassword: yup
          .string()
          .required("First Name is required")
          .min(6, "Password must be atleat of 6 characters")
          .oneOf(
            [yup.ref("password")],
            "Password does not match. Please try again!"
          ),
        radio: yup.string().required("Please make a choice"),
        address: yup
          .string()
          .required("Address is required")
          .min(10, "Address should not be less then 10 Characters"),
      })
      .required();

    const {
      control,
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (values) => console.log(values);

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              placeholder=""
              {...register("firstName")}
              className="form-control"
            />
            {errors.firstName && (
              <span className="text-danger">{errors.firstName.message}</span>
            )}
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              placeholder=""
              {...register("lastName")}
              className="form-control"
            />
            {errors.lastName && (
              <span className="text-danger">{errors.lastName.message}</span>
            )}
          </div>
          <div className="form-group ">
            <label>Gender</label>
            <select className="form-control" {...register("gender")}>
              <option value="">Select Gender</option>
              {GENDER_OPTIONS.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
            {errors.gender && (
              <span className="text-danger">{errors.gender.message}</span>
            )}
          </div>
          <div className="form-group  react-date">
            <label>Date of Birth</label>
            <Controller
              name="dob"
              control={control}
              rules={{ required: "Date of birth is required" }}
              render={({ field }) => (
                <ReactDatePicker
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                  showIcon
                  closeOnScroll={true}
                  showYearDropdown
                  showMonthDropdown
                  className="form-control"
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Date of Birth"
                />
              )}
            />
            {errors.dob && (
              <span className="text-danger">{errors.dob.message}</span>
            )}
          </div>
          <div className="form-group ">
            <label>E-Mail</label>
            <input
              type="email"
              placeholder=""
              {...register("email")}
              className="form-control"
            />
            {errors.email && (
              <span className="text-danger">{errors.email.message}</span>
            )}
          </div>
        </div>
        <div className="row">
          <div>
            <button className="btn btn_primary btn_md my-3" type="submit">
              Register Now
            </button>
          </div>
        </div>
      </form>
    );
  };

  const ShowFormFour = () => {
    const schema = yup
      .object({
        firstName: yup
          .string()
          .required("First Name is required")
          .matches(
            /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/,
            "This is not in correct format"
          ),
        lastName: yup
          .string()
          .matches(
            /^$|^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/,
            "This is not in correct format"
          ),
        gender: yup.string().required("Gender is required"),
        dob: yup.string().required("Date of Birth is required"),
        email: yup
          .string()
          .email("Please enter a valid E-Mail")
          .required("Email is required"),
        phone: yup
          .string()
          .required("Gender is required")
          .min(10, "Phone No. should not be less then 10 Characters")
          .max(10, "Phone No. should not be more then 10 Characters")
          .matches(/^[6-9]\d{9}$/, {
            message: "Please enter valid number.",
            excludeEmptyString: false,
          }),
        password: yup
          .string()
          .required("First Name is required")
          .min(6, "Password must be atleat of 6 characters"),
        confirmpassword: yup
          .string()
          .required("First Name is required")
          .min(6, "Password must be atleat of 6 characters")
          .oneOf(
            [yup.ref("password")],
            "Password does not match. Please try again!"
          ),
        radio: yup.string().required("Please make a choice"),
        address: yup
          .string()
          .required("Address is required")
          .min(10, "Address should not be less then 10 Characters"),
        pincode: yup
          .string()
          .required("Pincode is required")
          .min(6, "Pincode should not be less then 6 Characters")
          .max(6, "Pincode should not be more then 6 Characters")
          .matches(/^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$/, {
            message: "Please enter valid Pincode.",
            excludeEmptyString: false,
          }),
      })
      .required();

    const {
      control,
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (values) => console.log(values);

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="columns-2 mb-5">
            <div class="relative flex items-center">
              <input
                type="email"
                class="peer w-full bordered rounded  p-2 placeholder:text-transparent"
                placeholder="name"
              />
              <label
                for="email"
                class="absolute left-0 ml-1 -translate-y-5 bg-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-5 peer-focus:px-1 peer-focus:text-sm"
              >
                First Name
              </label>
            </div>

            {/* <Form.Group className="form-group col-6">
              <FloatingLabel controlId="floatingInputGrid" label="First Name">
                <Form.Control
                  type="text"
                  placeholder=""
                  {...register("firstName")}
                />
                </FloatingLabel>
                  {errors.firstName && (
                  <span className="text-danger">{errors.firstName.message}</span>
                )}
              </Form.Group> */}

            <div class="relative flex items-center">
              <input
                type="email"
                class="peer w-full bordered rounded  p-2 placeholder:text-transparent"
                placeholder="name"
              />
              <label
                for="email"
                class="absolute left-0 ml-1 -translate-y-5 bg-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-5 peer-focus:px-1 peer-focus:text-sm"
              >
                Last Name
              </label>
            </div>

            {/* <Form.Group className="form-group col-6">
              <FloatingLabel controlId="floatingInputGrid1" label="Last Name">
                <Form.Control
                  type="text"
                  placeholder=""
                  {...register("lastName")}
                />
                </FloatingLabel>
                {errors.lastName && (
                  <span className="text-danger">{errors.lastName.message}</span>
                )}
              </Form.Group> */}
          </div>

          <div className="columns-2 mb-5">
            <div class="relative flex items-center">
              {/* <input type="email" class="peer w-full bordered rounded  p-2 placeholder:text-transparent" placeholder="name" /> */}
              <select
                name=""
                class="form-control peer w-full bordered rounded py-2 placeholder:text-transparent"
                id=""
              >
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <label
                for="email"
                class="absolute left-0 ml-1 -translate-y-5 bg-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-5 peer-focus:px-1 peer-focus:text-sm"
              >
                Gender
              </label>
            </div>

            {/* <Form.Group className="form-group col-6">
              <FloatingLabel controlId="floatingSelectGrid" label="Gender">
                <Form.Select className="form-control" {...register("gender")}>
                  <option value="">Select Gender</option>
                  {GENDER_OPTIONS.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </Form.Select>
                </FloatingLabel>
                {errors.gender && (
                  <span className="text-danger">{errors.gender.message}</span>
                )}
              </Form.Group> */}
            <div className="form-group col-6 react-date">
              <Controller
                name="dob"
                control={control}
                rules={{ required: "Date of birth is required" }}
                render={({ field }) => (
                  <ReactDatePicker
                    selected={field.value}
                    onChange={(date) => field.onChange(date)}
                    showIcon
                    closeOnScroll={true}
                    showYearDropdown
                    showMonthDropdown
                    className="form-control"
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Date of Birth"
                  />
                )}
              />
              {errors.dob && (
                <span className="text-danger">{errors.dob.message}</span>
              )}
            </div>
          </div>
          <div className="columns-2 mb-5">
            <div class="relative flex items-center">
              <input
                type="email"
                class="peer w-full bordered rounded  p-2 placeholder:text-transparent"
                placeholder="name"
              />
              <label
                for="email"
                class="absolute left-0 ml-1 -translate-y-5 bg-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-5 peer-focus:px-1 peer-focus:text-sm"
              >
                E-Mail
              </label>
            </div>
            <div class="relative flex items-center">
              <input
                type="email"
                class="peer w-full bordered rounded  p-2 placeholder:text-transparent"
                placeholder="name"
              />
              <label
                for="email"
                class="absolute left-0 ml-1 -translate-y-5 bg-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-5 peer-focus:px-1 peer-focus:text-sm"
              >
                Phone
              </label>
            </div>
            {/* <Form.Group className="form-group col-6">
              <FloatingLabel controlId="floatingInputGrid2" label="E-Mail">
                <Form.Control
                  type="email"
                  placeholder=""
                  {...register("email")}
                />
                </FloatingLabel>
                {errors.email && (
                  <span className="text-danger">{errors.email.message}</span>
                )}
              </Form.Group> */}
            {/* <Form.Group className="form-group col-6">
              <FloatingLabel controlId="floatingInputGrid3" label="Phone">
              <Form.Control
                  type="text"
                  placeholder=""
                  {...register("phone")}
                />   
                </FloatingLabel>           
                {errors.phone && (
                  <span className="text-danger">{errors.phone.message}</span>
                )} 
                            
              </Form.Group> */}
          </div>
          <div className="columns-2 mb-5">
            <div class="relative flex items-center">
              <input
                type="email"
                class="peer w-full bordered rounded  p-2 placeholder:text-transparent"
                placeholder="name"
              />
              <label
                for="email"
                class="absolute left-0 ml-1 -translate-y-5 bg-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-5 peer-focus:px-1 peer-focus:text-sm"
              >
                Password
              </label>
            </div>
            <div class="relative flex items-center">
              <input
                type="email"
                class="peer w-full bordered rounded  p-2 placeholder:text-transparent"
                placeholder="name"
              />
              <label
                for="email"
                class="absolute left-0 ml-1 -translate-y-5 bg-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-5 peer-focus:px-1 peer-focus:text-sm"
              >
                Password
              </label>
            </div>
            {/* <Form.Group className="form-group col-6">
              <FloatingLabel controlId="floatingInputGrid4" label="Password">  
                <Form.Control
                  type="password"
                  placeholder=""
                  {...register("password")}
                />
                </FloatingLabel>
                {errors.password && (
                  <span className="text-danger">{errors.password.message}</span>
                )}
              </Form.Group> */}
            {/* <Form.Group className="form-group col-6">
            <FloatingLabel controlId="floatingInputGrid5" label="Password"> 
            <Form.Control
                type="password"
                placeholder=""
                {...register("confirmpassword")}
              />
              </FloatingLabel>
               {errors.confirmpassword && (
                <span className="text-danger">
                  {errors.confirmpassword.message}
                </span>
              )}
              </Form.Group> */}
          </div>
          <div className="columns-2 mb-5">
            <div class="relative flex items-center">
              <input
                type="email"
                class="peer w-full bordered rounded  p-2 placeholder:text-transparent"
                placeholder="name"
              />
              <label
                for="email"
                class="absolute left-0 ml-1 -translate-y-5 bg-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-5 peer-focus:px-1 peer-focus:text-sm"
              >
                Pincode
              </label>
            </div>
            <div class="relative flex items-center">
              <input
                type="email"
                class="peer w-full bordered rounded  p-2 placeholder:text-transparent"
                placeholder="name"
              />
              <label
                for="email"
                class="absolute left-0 ml-1 -translate-y-5 bg-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-5 peer-focus:px-1 peer-focus:text-sm"
              >
                State
              </label>
            </div>
            {/* <Form.Group className="form-group col-6">
              <FloatingLabel controlId="floatingInputGrid6" label="Pincode">
              <Form.Control
                  type="text"
                  placeholder=""
                  {...register("pincode")}
                /> 
                </FloatingLabel>             
                {errors.pincode && (
                  <span className="text-danger">{errors.pincode.message}</span>
                )}                            
              </Form.Group>
              <Form.Group className="form-group col-6">
              <FloatingLabel controlId="floatingInputGrid7" label="State">
                <Form.Control
                  type="text"
                  placeholder=""
                  disabled
                  {...register("state")}
                />
                </FloatingLabel>
              </Form.Group> */}
          </div>
          <div className="columns-2 mb-5">
            <div class="relative flex items-center">
              <input
                type="email"
                class="peer w-full bordered rounded  p-2 placeholder:text-transparent"
                placeholder="name"
              />
              <label
                for="email"
                class="absolute left-0 ml-1 -translate-y-5 bg-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-5 peer-focus:px-1 peer-focus:text-sm"
              >
                District
              </label>
            </div>
            <div class="relative flex items-center">
              <textarea
                type="email"
                class="peer w-full bordered rounded p-2 placeholder:text-transparent"
                placeholder="name"
                rows="2"
              />
              <label
                for="email"
                class="absolute left-0 ml-1 -translate-y-5 bg-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:-translate-y-8 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-5 peer-focus:px-1 peer-focus:text-sm"
              >
                Address
              </label>
            </div>
            {/* <Form.Group className="form-group col-6">
              <FloatingLabel controlId="floatingInputGrid8" label="District">
                <Form.Control
                  type="text"
                  placeholder=""
                  disabled
                  {...register("state")}
                />
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="exampleForm.ControlTextarea1">
              <FloatingLabel controlId="floatingTextarea" label="Address" >
                <Form.Control as="textarea" rows={2} {...register("address")}/>
                </FloatingLabel>
                {errors.address && (
                        <span className="text-danger">
                          {errors.address.message}
                        </span>)}
              </Form.Group> */}
          </div>
        </div>

        <div className="columns-2 flex items-center w-full">
          <div className="md:w-1/2 w-full mr-5">
            <div className="form-group my-3 p-4 py-6 bordered rounded-md flex items-center">
              <label className="me-4">Radio Button</label>
              <input
                className="gap-x-2 mr-2.5"
                inline
                label="Option 1"
                name="group1"
                type="radio"
                checked
                id="inline-radio-1"
                {...register("radio")}
              />
              <input
                className="gap-x-2 mr-2.5"
                inline
                label="Option 2"
                name="group2"
                type="radio"
                id="inline-radio-2"
                {...register("radio")}
              />
              <input
                className="gap-x-2 mr-2.5"
                inline
                disabled
                name="group3"
                label="Option 3 (disabled)"
                type="radio"
                id="inline-radio-3"
                {...register("radio")}
              />
              {errors.radio && (
                <div className="text-danger">{errors.radio.message}</div>
              )}
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="form-group my-3 p-4 py-6 bordered rounded-md flex items-center">
              <label className="me-4">Checkbox</label>
              <input
                className="gap-x-2 mr-2.5"
                inline
                label="Option 1"
                name="group1"
                type="checkbox"
                id="inline-checkbox-1"
              />
              <input
                className="gap-x-2 mr-2.5"
                inline
                label="Option 2"
                name="group1"
                type="checkbox"
                checked
                id="inline-checkbox-2"
              />
              <input
                className="gap-x-2 mr-2.5"
                inline
                disabled
                label="Option 3 (disabled)"
                type="checkbox"
                id="inline-checkbox-3"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div>
            <button className="btn btn_primary btn_md my-3" type="submit">
              Register Now
            </button>
          </div>
        </div>
      </form>
    );
  };
  const ShowFormThreeB = () => {
    const onSubmit = (values) => console.log(values);

    const schema = yup
      .object({
        firstName: yup
          .string()
          .required("First Name is required")
          .matches(
            /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/,
            "This is not in correct format"
          ),
        lastName: yup
          .string()
          .matches(
            /^$|^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/,
            "This is not in correct format"
          ),
        gender: yup.string().required("Gender is required"),
        dob: yup.string().required("Date of Birth is required"),
        email: yup
          .string()
          .email("Please enter a valid E-Mail")
          .required("Email is required"),
        phone: yup
          .string()
          .required("Gender is required")
          .min(10, "Phone No. should not be less then 10 Characters")
          .max(10, "Phone No. should not be more then 10 Characters")
          .matches(/^[6-9]\d{9}$/, {
            message: "Please enter valid number.",
            excludeEmptyString: false,
          }),
        password: yup
          .string()
          .required("First Name is required")
          .min(6, "Password must be atleat of 6 characters"),
        confirmpassword: yup
          .string()
          .required("First Name is required")
          .min(6, "Password must be atleat of 6 characters")
          .oneOf(
            [yup.ref("password")],
            "Password does not match. Please try again!"
          ),
        radio: yup.string().required("Please make a choice"),
        address: yup
          .string()
          .required("Address is required")
          .min(10, "Address should not be less then 10 Characters"),
      })
      .required();

    const {
      control,
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              placeholder=""
              {...register("firstName")}
              className="form-control"
            />
            {errors.firstName && (
              <span className="text-danger">{errors.firstName.message}</span>
            )}
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              placeholder=""
              {...register("lastName")}
              className="form-control"
            />
            {errors.lastName && (
              <span className="text-danger">{errors.lastName.message}</span>
            )}
          </div>
          <div className="form-group ">
            <label>Gender</label>
            <select className="form-control" {...register("gender")}>
              <option value="">Select Gender</option>
              {GENDER_OPTIONS.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
            {errors.gender && (
              <span className="text-danger">{errors.gender.message}</span>
            )}
          </div>
          <div className="form-group  react-date">
            <label>Date of Birth</label>
            <Controller
              name="dob"
              control={control}
              rules={{ required: "Date of birth is required" }}
              render={({ field }) => (
                <ReactDatePicker
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                  showIcon
                  closeOnScroll={true}
                  showYearDropdown
                  showMonthDropdown
                  className="form-control"
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Date of Birth"
                />
              )}
            />
            {errors.dob && (
              <span className="text-danger">{errors.dob.message}</span>
            )}
          </div>
          <div className="form-group ">
            <label>E-Mail</label>
            <input
              type="email"
              placeholder=""
              {...register("email")}
              className="form-control"
            />
            {errors.email && (
              <span className="text-danger">{errors.email.message}</span>
            )}
          </div>
        </div>
        <div className="row">
          <div>
            <button className="btn btn_primary btn_md my-3" type="submit">
              Register Now
            </button>
          </div>
        </div>
      </form>
    );
  };

  const ShowFormThreeC = () => {
    return (
      <form>
        <div className="row flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="md:w-2/5 w-full">
            <div className="input-group me-2 me-lg-3 fw-400 flex">
              <span className="input-group-text rounded-r-none border-r-0">
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <input
                type="text"
                className="form-control rounded-l-none"
                placeholder="Search orders"
              />
            </div>
          </div>
          <div className="form-group md:w-1/4 w-full react-date">
            <label>From Date</label>
            <ReactDatePicker
              onChange={(date) => setStartDate(date)}
              className="form-control"
              showIcon
              selected={startDate}
            />
          </div>
          <div className="form-group md:w-1/4 w-full react-date">
            <label>To Date</label>
            <ReactDatePicker
              onChange={(date) => setToDate(date)}
              className="form-control"
              showIcon
              selected={startDate}
            />
          </div>
        </div>
      </form>
    );
  };
  const LoginForm = () => {
    const router = useRouter();
    const handleClick = (e) => {
      e.preventDefault();
      router.push("/cards");
    };

    return (
      <form>
        <div className="form-group">
          <div className="mb-4 flex input-group">
            <span
              id="basic-addon1"
              className="input-group-text border-r-0 rounded-r-none"
            >
              <FontAwesomeIcon icon={faUser} size={5} />
            </span>
            <Input
              type="text"
              placeholder="User ID"
              aria-label="Userid"
              aria-describedby="basic-addon1"
              className="py-1.5 px-3 w-full border-solid border-1"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="mb-4 flex input-group">
            <span
              id="basic-addon1"
              className="input-group-text border-r-0 rounded-r-none"
            >
              <FontAwesomeIcon icon={faLock} />
            </span>
            <Input
              placeholder="***********"
              type="password"
              aria-label="Userid"
              aria-describedby="basic-addon1"
              className="py-1.5 px-3 w-full border-solid border-1"
            />
          </div>
        </div>

        <div className="checkboxes">
          <div className=" form-group-checkbox">
            <label className="custom-checkbox">
              Remember me
              <Input
                type="checkbox"
                checked
                // onChange={"handleClick"}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        <Button
          type="submit"
          className="btn btn_primary btn_md btn-block text-uppercase my-4 w-full"
          onClick={handleClick}
        >
          Sign in
        </Button>
        <Link href="/forgot-password" className="mt-12 block font-14">
          Forgot Password
        </Link>
        <Link href="/register" className="mt-12 block font-14">
          Register
        </Link>
      </form>
    );
  };

  const RegistrationForm = () => {
    return (
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="lg:mb-5 col-span-2 md:col-span-1">
            <input
              type="text"
              placeholder="First Name"
              required
              className="form-control"
            />
          </div>
          <div className="lg:mb-5 col-span-2 md:col-span-1">
            <input
              type="text"
              placeholder="Last Name"
              required
              className="form-control"
            />
          </div>
          <div className="lg:mb-5 col-span-2 md:col-span-1">
            <input
              type="text"
              placeholder="User ID"
              required
              className="form-control"
            />
          </div>
          <div className="lg:mb-5 col-span-2 md:col-span-1">
            <input
              type="email"
              placeholder="E-Mail Address"
              required
              className="form-control"
            />
          </div>
          <div className="lg:mb-5 col-span-2 md:col-span-1">
            <input
              type="password"
              placeholder="Password"
              required
              className="form-control"
            />
          </div>
          <div className="lg:mb-5 col-span-2 md:col-span-1">
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className="form-control"
            />
          </div>
          <div className="mb-5 col-span-2">
            <input
              type="text"
              placeholder="Address"
              required
              className="form-control"
            />
          </div>
          <div className="lg:mb-5 col-span-2 md:col-span-1">
            <input
              type="text"
              placeholder="City"
              required
              className="form-control"
            />
          </div>
          <div className="lg:mb-5 col-span-2 md:col-span-1">
            <select className="form-control">
              <option value="">Select State</option>
              <option value="Assam">Assam</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Delhi">Delhi</option>
              <option value="Karnataka">Karnataka</option>
            </select>
          </div>
          <div className="lg:mb-5 col-span-2 md:col-span-1">
            <input
              type="number"
              placeholder="Pincode"
              required
              className="form-control"
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn_primary btn_md btn-block text-uppercase my-4 w-full"
        >
          Sign in
        </button>
        <Link href="/login" className="mt-12 block font-14 text-center">
          Already Registered! Login here
        </Link>
      </form>
    );
  };

  const ForgotPasswordForm = () => {
    return (
      <form>
        <div className="form-group">
          <div className="mb-4 flex input-group">
            <span
              id="basic-addon1"
              className="input-group-text border-r-0 rounded-r-none"
            >
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              type="email"
              placeholder="Email id"
              aria-label="Email Id"
              aria-describedby="basic-addon1"
              className="py-1.5 px-3 w-full border-solid border-1"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="mb-4 flex input-group">
            <span
              id="basic-addon1"
              className="input-group-text border-r-0 rounded-r-none"
            >
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              placeholder="OTP"
              type="password"
              aria-label="Userid"
              aria-describedby="basic-addon1"
              className="py-1.5 px-3 w-full border-solid border-1"
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn_primary btn_md btn-block text-uppercase my-4 w-full"
        >
          Submit
        </button>
        <Link href="/login" className="mt-12 block font-14">
          Login
        </Link>
      </form>
    );
  };
  return (
    <>
      {type == "login" ? <LoginForm /> : ""}
      {type == "registration" ? <RegistrationForm /> : ""}
      {type == "forgotpassword" ? <ForgotPasswordForm /> : ""}
      {type == "form-one" ? <FormOneForm /> : ""}
      {type == "form-two-a" ? <ShowFormTwoA /> : ""}
      {type == "form-two-b" ? <ShowFormTwoB /> : ""}
      {type == "form-three-a" ? <ShowFormThreeA /> : ""}
      {type == "form-three-b" ? <ShowFormThreeB /> : ""}
      {type == "form-three-c" ? <ShowFormThreeC /> : ""}
      {type == "form-four" ? <ShowFormFour /> : ""}
    </>
  );
};

export default Form;

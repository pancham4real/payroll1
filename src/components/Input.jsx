"use client";
import React from "react";

const Input = (props) => {
  return <input onChange={props.onChange} {...props} />;
};

export default Input;

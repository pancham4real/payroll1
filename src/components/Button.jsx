"use client";
import React from "react";

const Button = (props) => {
  const handleclick = () => {
    props.handleClick();
  };
  return <button {...props}>{props.children}</button>;
};

export default Button;

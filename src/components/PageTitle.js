import React from "react";

const PageTitle = (props) => {
  return (
    <>
      <header
        className="masthead"
        style={{
          background: `linear-gradient(0deg, rgba(68, 12, 39, 0.73), rgba(68, 12, 39, 0.73)), url(./images/)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="masthead-heading">{props.title}</h1>
      </header>
    </>
  );
};

export default PageTitle;

import React from "react";
import Link from "next/link";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(faCoffee);

const BreadcrumbComponent = ({ breadcrumbs }) => {
  return (
    <div className="container-fluid p-2">
      <div className="flex flex-wrap justify-start">
        <div className="bcrumb">
          {breadcrumbs.map((breadcrumb, index) => (
            <span key={index}>
              <Link href={`breadcrumb.link`}>{breadcrumb.name}</Link>
              {index !== breadcrumbs.length - 1 && " > "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbComponent;

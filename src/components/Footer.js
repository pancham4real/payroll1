import React from "react";

import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <footer>
        <ul className="flex flex-row justify-center py-5 mb-0 text-xs sm:text-sm md:text-lg">
          <li className="nav-item">
            <Link href="/" className="nav-link px-5 font-medium text-muted">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/" className="nav-link text-muted">
              About{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/" className="nav-link text-muted">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/" className="nav-link text-muted">
              FAQs
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/" className="nav-link text-muted">
              Feedback
            </Link>
          </li>
        </ul>
        <div className="container-fluid">
          <div className="text-center">
            <div className="copyright">
              Desined and Developed by CEPT © Copyright Department of Posts
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

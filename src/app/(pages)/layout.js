import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidenav";
import Footer from "../../components/Footer";
import Script from "next/script";
const Layout = ({ children }) => {
  return (
    <div>
      <div className="App">
        <Header />

        <div className="flex ">
          <Sidebar />
          <div id="content">{children}</div>
        </div>
        <Footer />
      </div>
      <Script strategy="lazyOnload" src="/script.js" />
    </div>
  );
};

export default Layout;

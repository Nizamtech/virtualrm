import React from "react";
import Menu from "../../Shared/Menu/Menu";
// import Menu from "../Menu";

const Layout = ({ children }) => {
  return (
    <>
     <h1>Menu</h1>
     <Menu/>
      <main>{children}</main>
    </>
  );
};

export default Layout;

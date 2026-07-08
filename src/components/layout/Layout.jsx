import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

/**
 * Global page wrapper. Every route is rendered inside this Layout so that
 * the Navbar and Footer appear consistently, without each page having to
 * import them individually.
 */
const Layout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import OrderPopup from "../components/OrderPopup/OrderPopup";
import FAQ from "../components/FAQ";
const Layout = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Outlet />
      <div className="w-full  bg-gradient-to-r from-gray-500 to-gray-600">
        <div className="p-4">
          <h1 className="py-3 text-black font-bold">
            Frequently Asked Questions
          </h1>
          <FAQ />
        </div>
      </div>
      <Footer />
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </>
  );
};

export default Layout;

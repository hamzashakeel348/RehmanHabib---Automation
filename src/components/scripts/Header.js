import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../stylesheets/Header.css";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    }
    if (location.pathname === "/add") {
      setActiveTab("AddContact");
    }
    if (location.pathname === "/PipeLine") {
      setActiveTab("PipeLine");
    }
    if (location.pathname === "/SalesForecast") {
      setActiveTab("SalesForecast");
    }
  });
  return (
    <div className="wrapper">
      
      <Link to="/" className="logo">
          <p
            className={`${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
                   Rehman Habib Consultants Pvt Limited</p>

          </Link>
      <div className="header-right">
        <Link to="/">
          <p
            className={`${activeTab === "Home" ? "active" : " "}`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </p>
        </Link>
        <Link to="/add">
          <p
            className={`${activeTab === "AddContact" ? "active" : " "}`}
            onClick={() => setActiveTab("AddContact")}
          >
            Add Project
          </p>
        </Link>
        <Link to="/PipeLine">
          <p
            className={`${activeTab === "PipeLine" ? "active" : " "}`}
            onClick={() => setActiveTab("PipeLine")}
          >
            PipeLine
          </p>
        </Link>
        
        <Link to="/SalesForecast">
          <p
            className={`${activeTab === "SalesForecast" ? "active" : " "}`}
            onClick={() => setActiveTab("SalesForecast")}
          >
            SalesForecast
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;

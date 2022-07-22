import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../stylesheets/Header.css";
import logo from "../../pages/Images/header.png";
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
    if (location.pathname === "/SalesForecastSecond") {
      setActiveTab("SalesForecastSecond");
    }
  });
  return (
    <div className="wrapper">
      <Link to="/" className="logo">
        <img
          className={`${activeTab === "Home" ? "active" : ""}`}
          onClick={() => setActiveTab("Home")}
          alt="error"
          src={logo}
          style={{ height: "80px" }}
        />
      </Link>
      <div className="header-right">
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
            SalesForecast  2021 - 22 
          </p>
        </Link>
        <Link to="/SalesForecastSecond">
          <p
            className={`${
              activeTab === "SalesForecastSecond" ? "active" : " "
            }`}
            onClick={() => setActiveTab("SalesForecastSecond")}
          >
            SalesForecast  2022 - 23 
          </p>
        </Link>
        <Link to="/SalesForecastThird">
          <p
            className={`${activeTab === "SalesForecastThird" ? "active" : " "}`}
            onClick={() => setActiveTab("SalesForecastThird")}
          >
            SalesForecast  2023 - 24 
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;

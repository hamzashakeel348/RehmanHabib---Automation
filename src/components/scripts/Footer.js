import React from "react";
import "../stylesheets/Footer.css";
import { GoLocation } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiRotaryPhone } from "react-icons/gi";
import { HiMail } from "react-icons/hi";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="Footer">
      <div className="columnOne">
        <h2>Rehman Habib Consultants</h2>

        <a href="https://www.linkedin.com/company/rehman-habib-consultant/?originalSubdomain=pk">
          <AiFillLinkedin
            style={{ height: "30px", width: "30px", margin: "0em 1em" }}
          />
        </a>
        <a href="https://www.facebook.com/Rehman-Habib-Consultants-Pvt-Ltd-113824352030852/?fref=ts">
          <FaFacebookF
            style={{ height: "30px", width: "30px", margin: "0em 1em" }}
          />
        </a>
        <a href="https://twitter.com/RHC82570?S=08">
          <FaTwitter
            style={{ height: "30px", width: "30px", margin: "0em 1em" }}
          />
        </a>
      </div>
      <div style={{ display: "flex" }}>
        <div className="columnOne" style={{ paddingRight: "2em" }}>
          <h1>Lahore Office</h1>
          <ul>
            <li className="list">
              <GoLocation
                color="darkred"
                style={{ paddingRight: "10px", width: "25px", height: "25px" }}
              />
              160 Airline Society, Khayaban-e
              <br />
              -Jinnah, Lahore, Pakistan
            </li>
            <li className="list">
              <BsFillTelephoneFill
                color="darkred"
                style={{ paddingRight: "10px", width: "25px", height: "25px" }}
              />
              +92 42 3522 9625
            </li>
            <li className="list">
              <GiRotaryPhone
                color="darkred"
                style={{ paddingRight: "10px", width: "25px", height: "25px" }}
              />
              +92 42 3522 9624
            </li>
            <li className="list">
              <HiMail
                color="darkred"
                style={{ paddingRight: "10px", width: "25px", height: "25px" }}
              />{" "}
              rhcho@rehmanhabib.com
            </li>
          </ul>
        </div>
        <div className="columnOne">
          <h1>Quetta Office</h1>
          <ul>
            <li className="list">
              <GoLocation
                color="darkred"
                style={{ paddingRight: "10px", width: "25px", height: "25px" }}
              />
              36-Marri Street, Arbab Karam Khan
              <br /> Road Quetta, Pakistan
            </li>
            <li className="list">
              <BsFillTelephoneFill
                color="darkred"
                style={{ paddingRight: "10px", width: "25px", height: "25px" }}
              />
              +92 81 247 1623
            </li>
            <li className="list">
              <GiRotaryPhone
                color="darkred"
                style={{ paddingRight: "10px", width: "25px", height: "25px" }}
              />
              +92 81 245 0005
            </li>
            <li className="list">
              <HiMail
                color="darkred"
                style={{ paddingRight: "10px", width: "25px", height: "25px" }}
              />{" "}
              rhcqta@yahoo.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

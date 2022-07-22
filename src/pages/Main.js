import React, { useEffect, useState } from "react";
import "./stylesheets/Main.css";
import Image from "./Images/Com1.jpeg";
import Image1 from "./Images/Com2.jpeg";
import Image2 from "./Images/Com3.png";
import Image3 from "./Images/Com10.jpeg";
import Image4 from "./Images/Com5.jpeg";
import Image5 from "./Images/Com6.jpeg";
import Image6 from "./Images/Com8.jpeg";
import Image7 from "./Images/Com9.jpeg";
import arrow from "./Images/arrow_copy_copy.svg";
import SectionTwo from "./SectionTwo";
import CountUp from "react-countup";
import Rotate from "react-reveal/Rotate";
import Flip from "react-reveal/Flip";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { faL } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <div>
      <div className="hero-wrapper">
        <div className="Wrapper">
          <Rotate top left>
            <div className="hero-content">
              <h1>We Constructed hundreds of projects</h1>
              <p className="subtitle">
                Hydrology and Water Resources &amp; Architecture and Structural
                Engineering
              </p>
            </div>
          </Rotate>
        </div>
      </div>
      <SectionTwo />

      <div className="wrapper_Two">
        <ul className="stats">
          <li>
            <strong>
              <CountUp end={43} duration={5} />
            </strong>
            <span>Feasibility Studies</span>
          </li>
          <li>
            <strong>
              <CountUp end={177} duration={5} />
            </strong>
            <span>Construction Supervision</span>
          </li>
          <li>
            <strong>
              <CountUp end={89} duration={5} />
            </strong>
            <span>Digital Designs</span>
          </li>
          <li>
            <strong>
              <CountUp end={208} duration={5} />
            </strong>
            <span> Monitoring & Evaluation</span>
          </li>
        </ul>
      </div>
      <div className="extended-wrapper carousal-container">
        <img
          src={arrow}
          id="left-arrow"
          className="arrows"
          alt="Move testimonials to the left"
        />

        <ul className="carousal">
          <li>
            <blockquote>
              "Great skills, professional throughout, highly recommend!"
            </blockquote>
            <cite>James Doe</cite>
          </li>
          <li>
            <blockquote>
              "He is hard working and he delivers his work on time. Excellent
              communication"
            </blockquote>
            <cite>Altemush Bhatti</cite>
          </li>
        </ul>

        <img
          src={arrow}
          id="right-arrow"
          className="arrows right"
          alt="Move testimonials to the right"
        />
      </div>
      <div className="Section_Three">
        <h2>Companies We've worked with..</h2>
        <Flip top>
          <OwlCarousel className="owl-theme" loop dots={true} items={5}>
            <div class="item">
              <img src={Image} alt="skillshare" className="skillshare" />
            </div>
            <div class="item">
              {" "}
              <img src={Image1} alt="Pluralsight" className="ps" />
            </div>

            <div class="item">
              {" "}
              <img src={Image2} alt="skillshare" className="skillshare" />
            </div>
            <div class="item">
              {" "}
              <img src={Image4} alt="skillshare" className="skillshare" />
            </div>
            <div class="item">
              {" "}
              <img src={Image5} alt="Pluralsight" className="ps" />
            </div>
            <div class="item">
              {" "}
              <img src={Image6} alt="Pluralsight" className="ps" />
            </div>
            <div class="item">
              {" "}
              <img src={Image7} alt="Pluralsight" className="ps" />
            </div>
            <div class="item">
              {" "}
              <img src={Image3} alt="Pluralsight" className="ps" />
            </div>
          </OwlCarousel>
        </Flip>
        
      </div>
    </div>
  );
};

export default Main;

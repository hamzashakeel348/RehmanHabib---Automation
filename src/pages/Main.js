import React from "react";
import "./stylesheets/Main.css"
import Image from "./Images/ps.svg"
import Image2 from "./Images/skillshare.svg"
import arrow from"./Images/arrow_copy_copy.svg"
const Main = () => {
  return (
    <div>
      <div className="hero-wrapper">
        <div className="wrapper">
          <div className="hero-content">
            <h1>We Constructed hundreds of projects</h1>
            <p className="subtitle">Hydrology and Water Resources &amp; Architecture and Structural Engineering</p>
          </div>
        </div>
      </div>
      <div className="light-purple-wrapper">
        <div className="wrapper">
          <ul className="stats">
            <li>
              <strong>43</strong>
              <span>Feasibility Studies</span>
            </li>
            <li>
              <strong>177 </strong>
              <span>Construction Supervision</span>
            </li>
            <li>
              <strong>89</strong>
              <span>Digital Designs</span>
            </li>
            <li>
              <strong>208</strong>
              <span> Monitoring & Evaluation</span>
            </li>
            <li>
              <strong>58</strong>
              <span>Countries</span>
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
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2621168/arrow_copy_copy.svg"
            id="right-arrow"
            className="arrows right"
            alt="Move testimonials to the right"
          />
        </div>
      </div>
      <div className="wrapper move-up v-padding">
        <h2>Companies We've worked with..</h2>

        <ul className="companies">
          <li>
            <img
              src={Image2}
              alt="skillshare"
              className="skillshare"
            />
          </li>
          <li>
            <img src={Image} alt="Pluralsight" className="ps" />
          </li>
          <li>
            <img
              src={Image2}
              alt="skillshare"
              className="skillshare"
            />
          </li>
          <li>
            <img src={Image} alt="Pluralsight" className="ps" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;

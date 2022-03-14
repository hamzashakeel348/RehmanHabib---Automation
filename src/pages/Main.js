import React from "react";
import "./stylesheets/Main.css"
import Image from "./Images/ps.svg"
import Image2 from "./Images/skillshare.svg"
import arrow from"./Images/arrow_copy_copy.svg"
const Main = () => {
  return (
    <div>
      <div class="hero-wrapper">
        <div class="wrapper">
          <div class="hero-content">
            <h1>We Constructed hundreds of projects</h1>
            <p class="subtitle">Teaching UI / UX &amp; Frontend Development</p>
          </div>
        </div>
      </div>
      <div class="light-purple-wrapper">
        <div class="wrapper">
          <ul class="stats">
            <li>
              <strong>26.5M</strong>
              <span>YouTube Views</span>
            </li>
            <li>
              <strong>535K</strong>
              <span>YouTube Subs</span>
            </li>
            <li>
              <strong>86</strong>
              <span>Courses</span>
            </li>
            <li>
              <strong>750</strong>
              <span>Video Tutorials</span>
            </li>
            <li>
              <strong>58</strong>
              <span>Countries</span>
            </li>
          </ul>
        </div>
        <div class="extended-wrapper carousal-container">
          <img
            src={arrow}
            id="left-arrow"
            class="arrows"
            alt="Move testimonials to the left"
          />

          <ul class="carousal">
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
            class="arrows right"
            alt="Move testimonials to the right"
          />
        </div>
      </div>
      <div class="wrapper move-up v-padding">
        <h2>Companies We've worked with..</h2>

        <ul class="companies">
          <li>
            <img
              src={Image2}
              alt="skillshare"
              class="skillshare"
            />
          </li>
          <li>
            <img  src={Image} alt="Pluralsight" class="ps" />
          </li>
          <li>
            <img
              src={Image2}
              alt="skillshare"
              class="skillshare"
            />
          </li>
          <li>
            <img src={Image} alt="Pluralsight" class="ps" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;

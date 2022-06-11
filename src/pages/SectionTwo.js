import React from "react";
import "./stylesheets/sectionTwo.css";
import { FaRegLightbulb } from "react-icons/fa";
import { SiSparkpost } from "react-icons/si";
import { TbReportSearch } from "react-icons/tb";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";

const SectionTwo = () => {
  return (
    <div className="SectionTwo">
      <Bounce top>
        <div className="Intro">
          <h3>Welcome to Rehman Habib Consultants (Pvt) Ltd</h3>
          <p>
            Rehman Habib Consultants (Pvt) Ltd (RHC) is a multi-disciplinary
            company providing professional consultancy services in various
            fields of civil engineering (e.g. Infrastructure, Buildings,
            Highways, Water Supply & Drainage, Water Resources, Dams, Monitoring
            & Evaluation, etc.). RHC offers an efficient, cost-effective service
            by qualified staff, with a wealth of experience in major development
            schemes and associated projects. The Company has broad Client
            ranging from Federal, Provincial & Local Government organizations,
            International Funding Agencies to various private sector
            organizations in Pakistan as well as abroad.{" "}
          </p>
        </div>
      </Bounce>
      <Slide left>
        <div className="Values">
          <div className="Block">
            <FaRegLightbulb color="darkred" size="40px" />{" "}
            <div>
              <h3>Objective</h3>
              <p>
                To become a Primary Player in the Field of Engineering
                Technology and Management Consultancy by Providing Environmental
                Friendly solutions.
              </p>
            </div>
          </div>
          <div className="Block">
            <TbReportSearch color="darkred" size="40px" />{" "}
            <div>
              <h3>Strategy</h3>
              <p>
                We place the highest value on teamwork and mutual respect among
                our employees and between RHC and our clients.
              </p>
            </div>
          </div>
          <div className="Block">
            <SiSparkpost color="darkred" size="40px" />
            <div>
              <h3>Strength</h3>
              <p>
                High standards of competence in technical, professional and
                safety areas. Innovative and creative solutions employing state
                of the art technology.
              </p>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default SectionTwo;

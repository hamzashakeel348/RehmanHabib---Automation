import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import fireDb from "../firebase";
import { useParams } from "react-router-dom";

import "./stylesheets/Edit.css";

const initialState = {
  Location: "Lahore",
  Sector: "Punjab",
  Name: "Hamza",
  Assignment: "ali",
  Budget: "1000",
  Client: "umer",
  FocalPerson: "usman",
  ConsultingBudget: "1092",
  StrikeRate: "70",
  JV: "aa",
  FundStatus: "Approved",
  ExpectedDate: "12March",
  status: "Approved",
  ProjectType: "-",
  ProjectCost: "-",
  ConsultancyCost: "-",
  Allocation: "-",
  Remuneration: "-",
  DirectCost: "-",
  share: "-",
  EstimatedShare: "-",
  Duration: "-",
  LeadFirm: "-",
};

const Edit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  const {
    Location,
    Sector,
    Name,
    Assignment,
    Budget,
    Client,
    FocalPerson,
    ConsultingBudget,
    StrikeRate,
    JV,
    FundStatus,
    ExpectedDate,
    status,
    ProjectType,
    ProjectCost,
    ConsultancyCost,
    Allocation,
    Remuneration,
    DirectCost,
    share,
    EstimatedShare,
    Duration,
    LeadFirm,
  } = state;

  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    fireDb.child("PipeLine").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
    };
  }, [id]);

  useEffect(() => {
    if (id) {
      setState({ ...data[id] });
    } else {
      setState({ ...initialState });
    }
    return () => {
      setState({ ...initialState });
    };
  }, [id, data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !Location ||
      !Sector ||
      !Name ||
      !Assignment ||
      !Budget ||
      !Client ||
      !FocalPerson ||
      !ConsultingBudget ||
      !StrikeRate ||
      !JV ||
      !FundStatus ||
      !ExpectedDate ||
      !status
    ) {
      toast.error("Please Fill the Form Completely");
    } else {
      if (!id) {
        fireDb.child("PipeLine").push(state, (err) => {
          if (err) {
            toast.err(err);
          } else {
            toast.success("contact added");
          }
        });
        setTimeout(() => history.push("/"), 500);
      } else {
        fireDb.child(`PipeLine/${id}`).set(state, (err) => {
          if (err) {
            toast.err(err);
          } else {
            toast.success("Contract updated Successfully");
          }
        });
        setTimeout(() => history.push("/"), 500);
      }
    }
  };

  return (
    <div
      style={{ marginTop: "100px", display: "flex", justifyContent: "center" }}
    >
      {id ? (
        <div>
          <form
            style={{
              margin: "auto",
              padding: "15px",
              maxWidth: "70%",
              alignContent: "center",
            }}
            onSubmit={handleSubmit}
          >
            <div style={{display:"flex"}}>
              <div style={{marginRight:"10px"}}>
                <label htmlFor="Location">Location</label>
                <input
                  type="text"
                  id="Location"
                  name="Location"
                  placeholder="Your Location"
                  value={Location || ""}
                  onChange={handleInputChange}
                />
                <label htmlFor="Sector">Sector</label>
                <input
                  type="text"
                  id="Sector"
                  name="Sector"
                  placeholder="Your Sector"
                  value={Sector || ""}
                  onChange={handleInputChange}
                />{" "}
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  id="Name"
                  name="Name"
                  placeholder="Your Name"
                  value={Name || ""}
                  onChange={handleInputChange}
                />
                <label htmlFor="Assignment">Assignment</label>
                <input
                  type="text"
                  id="Assignment"
                  name="Assignment"
                  placeholder=" Assignment"
                  value={Assignment || ""}
                  onChange={handleInputChange}
                />
                <label htmlFor="Budget">Budget</label>
                <input
                  type="number"
                  id="Budget"
                  name="Budget"
                  placeholder=" Budget"
                  value={Budget || ""}
                  onChange={handleInputChange}
                />
                <label htmlFor="Client">Client</label>
                <input
                  type="text"
                  id="Client"
                  name="Client"
                  placeholder=" Client"
                  value={Client || ""}
                  onChange={handleInputChange}
                />
                <label htmlFor="FocalPerson">FocalPerson</label>
                <input
                  type="text"
                  id="FocalPerson"
                  name="FocalPerson"
                  placeholder=" FocalPerson"
                  value={FocalPerson || ""}
                  onChange={handleInputChange}
                />
                <label htmlFor="ConsultingBudget">ConsultingBudget</label>
                <input
                  type="number"
                  id="ConsultingBudget"
                  name="ConsultingBudget"
                  placeholder=" ConsultingBudget"
                  value={ConsultingBudget || ""}
                  onChange={handleInputChange}
                />
                <label htmlFor="StrikeRate">StrikeRate</label>
                <input
                  type="number"
                  id="StrikeRate"
                  name="StrikeRate"
                  placeholder=" StrikeRate"
                  value={StrikeRate || ""}
                  onChange={handleInputChange}
                />
                <label htmlFor="JV">JV</label>
                <input
                  type="text"
                  id="JV"
                  name="JV"
                  placeholder=" JV"
                  value={JV || ""}
                  onChange={handleInputChange}
                />
                <label htmlFor="FundStatus">FundStatus</label>
                <input
                  type="text"
                  id="FundStatus"
                  name="FundStatus"
                  placeholder="FundStatus"
                  value={FundStatus || ""}
                  onChange={handleInputChange}
                />
                <br />
                <br />

                <label htmlFor="ExpectedDate">ExpectedDate</label>
                <input
                  type="date"
                  id="ExpectedDate"
                  name="ExpectedDate"
                  placeholder="ExpectedDate"
                  value={ExpectedDate || ""}
                  onChange={handleInputChange}
                />
                <br />
                <br />
                <label htmlFor="status">Status</label>
                <input
                  type="text"
                  id="status"
                  name="status"
                  placeholder="status"
                  value={status || ""}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="ProjectType">ProjectType</label>
                <input
                  type="text"
                  id="ProjectType"
                  name="ProjectType"
                  placeholder=" ProjectType"
                  value={ProjectType || ""}
                  onChange={handleInputChange}
                />
                <label htmlFor="ProjectCost">ProjectCost</label>
                <input
                  type="text"
                  id="ProjectCost"
                  name="ProjectCost"
                  placeholder=" ProjectCost"
                  value={ProjectCost || ""}
                  onChange={handleInputChange}
                />
                <label htmlFor="ConsultancyCost">ConsultancyCost</label>
                <input
                  type="text"
                  id="ConsultancyCost"
                  name="ConsultancyCost"
                  placeholder=" ConsultancyCost"
                  value={ConsultancyCost || ""}
                  onChange={handleInputChange}
                />
                <label htmlFor="Allocation">Allocation</label>
                <input
                  type="text"
                  id="Allocation"
                  name="Allocation"
                  placeholder=" Allocation"
                  value={Allocation || ""}
                  onChange={handleInputChange}
                />
                <label htmlFor="Remuneration">Remuneration</label>
                <input
                  type="text"
                  id="Remuneration"
                  name="Remuneration"
                  placeholder=" Remuneration"
                  value={Remuneration || ""}
                  onChange={handleInputChange}
                />
                <label htmlFor="DirectCost">DirectCost</label>
                <input
                  type="text"
                  id="DirectCost"
                  name="DirectCost"
                  placeholder=" DirectCost"
                  value={DirectCost || ""}
                  onChange={handleInputChange}
                />
                <label htmlFor="share">Share</label>
                <input
                  type="text"
                  id="share"
                  name="share"
                  placeholder=" share"
                  value={share || ""}
                  onChange={handleInputChange}
                />
                <label htmlFor="EstimatedShare">EstimatedShare</label>
                <input
                  type="text"
                  id="EstimatedShare"
                  name="EstimatedShare"
                  placeholder=" EstimatedShare"
                  value={EstimatedShare || ""}
                  onChange={handleInputChange}
                />
                <label htmlFor="Duration">Duration</label>
                <input
                  type="text"
                  id="Duration"
                  name="Duration"
                  placeholder=" Duration"
                  value={Duration || ""}
                  onChange={handleInputChange}
                />
                <label htmlFor="LeadFirm">LeadFirm</label>
                <input
                  type="text"
                  id="LeadFirm"
                  name="LeadFirm"
                  placeholder=" LeadFirm"
                  value={LeadFirm || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <input type="submit" value={id ? "Update" : "Submit"} />
          </form>
        </div>
      ) : (
        <div>
          <form
            style={{
              margin: "auto",
              padding: "15px",
              maxWidth: "400px",
              alignContent: "center",
            }}
            onSubmit={handleSubmit}
          >
            <label htmlFor="Location">Location</label>
            <input
              type="text"
              id="Location"
              name="Location"
              placeholder="Your Location"
              value={Location || ""}
              onChange={handleInputChange}
            />
            <label htmlFor="Sector">Sector</label>
            <input
              type="text"
              id="Sector"
              name="Sector"
              placeholder="Your Sector"
              value={Sector || ""}
              onChange={handleInputChange}
            />{" "}
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              id="Name"
              name="Name"
              placeholder="Your Name"
              value={Name || ""}
              onChange={handleInputChange}
            />
            <label htmlFor="Assignment">Assignment</label>
            <input
              type="text"
              id="Assignment"
              name="Assignment"
              placeholder=" Assignment"
              value={Assignment || ""}
              onChange={handleInputChange}
            />
            <label htmlFor="Budget">Budget</label>
            <input
              type="number"
              id="Budget"
              name="Budget"
              placeholder=" Budget"
              value={Budget || ""}
              onChange={handleInputChange}
            />
            <label htmlFor="Client">Client</label>
            <input
              type="text"
              id="Client"
              name="Client"
              placeholder=" Client"
              value={Client || ""}
              onChange={handleInputChange}
            />
            <label htmlFor="FocalPerson">FocalPerson</label>
            <input
              type="text"
              id="FocalPerson"
              name="FocalPerson"
              placeholder=" FocalPerson"
              value={FocalPerson || ""}
              onChange={handleInputChange}
            />
            <label htmlFor="ConsultingBudget">ConsultingBudget</label>
            <input
              type="number"
              id="ConsultingBudget"
              name="ConsultingBudget"
              placeholder=" ConsultingBudget"
              value={ConsultingBudget || ""}
              onChange={handleInputChange}
            />
            <label htmlFor="StrikeRate">StrikeRate</label>
            <input
              type="number"
              id="StrikeRate"
              name="StrikeRate"
              placeholder=" StrikeRate"
              value={StrikeRate || ""}
              onChange={handleInputChange}
            />
            <label htmlFor="JV">JV</label>
            <input
              type="text"
              id="JV"
              name="JV"
              placeholder=" JV"
              value={JV || ""}
              onChange={handleInputChange}
            />
            <label htmlFor="FundStatus">FundStatus</label>
            <input
              type="text"
              id="FundStatus"
              name="FundStatus"
              placeholder="FundStatus"
              value={FundStatus || ""}
              onChange={handleInputChange}
            />
            <label htmlFor="ExpectedDate">ExpectedDate</label>
            <input
              type="date"
              id="ExpectedDate"
              name="ExpectedDate"
              placeholder="ExpectedDate"
              value={ExpectedDate || ""}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="status">status</label>
            <input
              type="text"
              id="status"
              name="status"
              placeholder="status"
              value={status || ""}
              onChange={handleInputChange}
            />
            <input type="submit" value={id ? "Update" : "Submit"} />
          </form>
        </div>
      )}
    </div>
  );
};

export default Edit;

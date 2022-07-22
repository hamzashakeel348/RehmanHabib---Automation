import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import fireDb from "../firebase";
import { useParams } from "react-router-dom";

import "./stylesheets/Edit.css";

const initialState = {
  Location: "",
  Sector: "",
  Name: "",
  Assignment: "",
  Budget: "",
  Client: "",
  FocalPerson: "",
  ConsultingBudget: "",
  StrikeRate: "",
  FundStatus: "",
  ExpectedDate: "",
  status: "",
  Remuneration: "",
  DirectCost: "-",
  share: "-",
  EstimatedShare: "-",
  Duration: "-",
  LeadFirm: "-",
  ExpectedRevenue: "-",
  perMonthRevenue: "-",
  startMonth: "-",
  month: [
    "Jul-21",
    "Aug-21",
    "Sep-21",
    "Oct-21",
    "Nov-21",
    "Dec-21",
    "Jan-22",
    "Feb-22",
    "Mar-22",
    "Apr-22",
    "May-22",
    "Jun-22",
  ],
  Futmonth: [
    "Jul-22",
    "Aug-22",
    "Sep-22",
    "Oct-22",
    "Nov-22",
    "Dec-22",
    "Jan-23",
    "Feb-23",
    "Mar-23",
    "Apr-23",
    "May-23",
    "Jun-23",
  ],
  SecFutmonth: [
    "Jul-23",
    "Aug-23",
    "Sep-23",
    "Oct-23",
    "Nov-23",
    "Dec-23",
    "Jan-24",
    "Feb-24",
    "Mar-24",
    "Apr-24",
    "May-24",
    "Jun-24",
  ],
  monthsrev: [
    "------",
    "------",
    "------",
    "------",
    "------",
    "------",
    "------",
    "------",
    "------",
    "------",
    "------",
    "------",
  ],
  total: 0,
  grandTotal: 0,
  JV1: "-",
  JV2: "-",
  JV3: "-",
  ProjectResources: "-",
  FOP: "-",
  salesFirst: false,
  salesSecond: false,
};

const Edit = () => {
  const [salesForecastFirst, setSalesForecastFirst] = useState(false);
  const [salesForecastSecond, setSalesForecastSecond] = useState(false);
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});
  const first = document.getElementById("secondSheet");
  const second = document.getElementById("firstSheet");
  
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
    FundStatus,
    ExpectedDate,
    status,
    Remuneration,
    DirectCost,
    share,
    EstimatedShare,
    Duration,
    LeadFirm,
    ExpectedRevenue,
    perMonthRevenue,
    startMonth,
    month,
    Futmonth,
    monthsrev,
    total,
    grandTotal,
    JV1,
    JV2,
    JV3,
    ProjectResources,
    FOP,
    salesFirst,
    salesSecond,
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
      !JV1 ||
      !JV2 ||
      !JV3 ||
      !FundStatus ||
      !ExpectedDate ||
      !status ||
      !ProjectResources
    ) {
      toast.error("Please Fill the Form Completely");
    } else {
      if (!id) {
        state.Remuneration = state.ConsultingBudget * 0.65;
        state.DirectCost = state.ConsultingBudget - state.Remuneration;
        fireDb.child("PipeLine").push(state, (err) => {
          if (err) {
            toast.err(err);
          } else {
            toast.success("contact added");
          }
        });
        setState(initialState);
        setTimeout(() => history.push("/"), 500);
      } else {
        state.monthsrev = [
          "------",
          "------",
          "------",
          "------",
          "------",
          "------",
          "------",
          "------",
          "------",
          "------",
          "------",
          "------",
        ];
        state.Remuneration = state.ConsultingBudget * 0.65;
        state.DirectCost = state.ConsultingBudget - state.Remuneration;

        if (state.LeadFirm === "RHC") {
          if (state.share !== "-") {

            state.ExpectedRevenue =
              state.Remuneration * (state.share / 100) + state.DirectCost;
            document.getElementById("EstimatedShare").disabled = true;
          } else if (state.EstimatedShare !== "-") {
            state.ExpectedRevenue =
              state.Remuneration * (state.EstimatedShare / 100) +
              state.DirectCost;
          }
        } else if (state.LeadFirm !== "RHC" && state.LeadFirm !== "-") {
          if (state.share !== "-")
            state.ExpectedRevenue = state.Remuneration * (state.share / 100);
          else if (state.EstimatedShare !== "-") {
            state.ExpectedRevenue =
              state.Remuneration * (state.EstimatedShare / 100);
          }
        }
        if (
          state.Duration > 0 &&
          state.Duration !== "-" &&
          state.ExpectedRevenue !== "-" &&
          state.ExpectedRevenue > 0
        ) {
          var y = state.ExpectedRevenue / state.Duration;
          state.perMonthRevenue = y.toFixed(2);
        }
        if (state.startMonth !== "-") {
          state.total = 0;
          let index = 0;
          if (!salesForecastFirst && !salesForecastSecond) {
            for (let i = 0; i < state.month.length; i++) {
              if (state.startMonth === state.month[i]) {
                index = i;
                break;
              }
            }
            let x = state.perMonthRevenue * parseInt(state.Duration);
            state.total = x.toFixed(1);

            if (parseInt(state.Duration) + index - 1 < state.month.length) {
              for (let i = index; i < parseInt(state.Duration) + index; i++) {
                state.monthsrev[i] = state.perMonthRevenue;
              }
            } else
              for (let i = index; i < state.month.length; i++) {
                state.monthsrev[i] = state.perMonthRevenue;
              }
          } else if (salesForecastFirst) {
            state.salesFirst = true;
            for (let i = 0; i < state.Futmonth.length; i++) {
              if (state.startMonth === state.Futmonth[i]) {
                index = i;
                break;
              }
            }

            let x = state.perMonthRevenue * parseInt(state.Duration);
            state.total = x.toFixed(1);

            if (parseInt(state.Duration) + index - 1 < state.Futmonth.length) {
              for (let i = index; i < parseInt(state.Duration) + index; i++) {
                state.monthsrev[i] = state.perMonthRevenue;
              }
            } else
              for (let i = index; i < state.month.length; i++) {
                state.monthsrev[i] = state.perMonthRevenue;
              }
          } else if (salesForecastSecond) {
            state.salesSecond = true;
            for (let i = 0; i < state.SecFutmonth.length; i++) {
              if (state.startMonth === state.SecFutmonth[i]) {
                index = i;
                break;
              }
            }

            let x = state.perMonthRevenue * parseInt(state.Duration);
            state.total = x.toFixed(1);

            if (
              parseInt(state.Duration) + index - 1 <
              state.SecFutmonth.length
            ) {
              for (let i = index; i < parseInt(state.Duration) + index; i++) {
                state.monthsrev[i] = state.perMonthRevenue;
              }
            } else
              for (let i = index; i < state.month.length; i++) {
                state.monthsrev[i] = state.perMonthRevenue;
              }
          }
        }

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
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#0f3661",
      }}
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
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "10px" }}>
                <label htmlFor="Location">Location</label>
                <input
                  type="text"
                  id="Location"
                  name="Location"
                  placeholder="Your Location"
                  value={Location || ""}
                  onChange={handleInputChange}
                />
                <label htmlFor="FOP">Federal / Provincial</label>
                <input
                  type="text"
                  id="FOP"
                  name="FOP"
                  placeholder=" FOP"
                  value={FOP || ""}
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
                  placeholder="Assignment"
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
                  type="text"
                  id="ConsultingBudget"
                  name="ConsultingBudget"
                  placeholder=" ConsultinghhBudget"
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
                  required
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
                  required
                />
                <label htmlFor="LeadFirm">LeadFirm</label>
                <input
                  type="text"
                  id="LeadFirm"
                  name="LeadFirm"
                  placeholder=" LeadFirm"
                  value={LeadFirm || ""}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="startMonth">startMonth</label>
                <input
                  type="text"
                  id="startMonth"
                  name="startMonth"
                  placeholder=" startMonth"
                  value={startMonth || ""}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="JV1">JV1</label>
                <input
                  type="text"
                  id="JV1"
                  name="JV1"
                  placeholder=" JV1"
                  value={JV1 || ""}
                  onChange={handleInputChange}
                />
                <label htmlFor="JV2">JV2</label>
                <input
                  type="text"
                  id="JV2"
                  name="JV2"
                  placeholder=" JV2"
                  value={JV2 || ""}
                  onChange={handleInputChange}
                />
                <label htmlFor="JV3">JV3</label>
                <input
                  type="text"
                  id="JV3"
                  name="JV3"
                  placeholder=" JV3"
                  value={JV3 || ""}
                  onChange={handleInputChange}
                />
                <label htmlFor="ProjectResources">ProjectResources</label>
                <input
                  type="text"
                  id="ProjectResources"
                  name="ProjectResources"
                  placeholder=" ProjectResources"
                  value={ProjectResources || ""}
                  onChange={handleInputChange}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div>
                    <input
                      type="checkbox"
                      id="firstSheet"
                      checked={
                        state.salesFirst
                          ? true
                          : false || salesForecastFirst
                          ? true
                          : false
                      }
                      disabled={
                        state.salesSecond
                          ? true
                          : false || salesForecastSecond
                          ? true
                          : false
                      }
                      onChange={() =>
                        setSalesForecastFirst(!salesForecastFirst)
                      }
                    />
                    <label htmlFor="checbox" style={{ fontSize: "15px" }}>
                      2022 - 2023
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="secondSheet"
                      checked={
                        state.salesSecond
                          ? true
                          : false || salesForecastSecond
                          ? true
                          : false
                      }
                      disabled={
                        state.salesFirst
                          ? true
                          : false || salesForecastFirst
                          ? true
                          : false
                      }
                      onChange={() =>
                        setSalesForecastSecond(!salesForecastSecond)
                      }
                    />
                    <label htmlFor="checbox" style={{ fontSize: "15px" }}>
                      2023 - 2024
                    </label>
                  </div>
                </div>
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
            <label htmlFor="FOP">Federal / Provincial</label>
            <input
              type="text"
              id="FOP"
              name="FOP"
              placeholder=" FOP"
              value={FOP || ""}
              onChange={handleInputChange}
            />
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
            <label htmlFor="JV1">JV1</label>
            <input
              type="text"
              id="JV1"
              name="JV1"
              placeholder=" JV1"
              value={JV1 || ""}
              onChange={handleInputChange}
            />
            <label htmlFor="JV2">JV2</label>
            <input
              type="text"
              id="JV2"
              name="JV2"
              placeholder=" JV2"
              value={JV2 || ""}
              onChange={handleInputChange}
            />
            <label htmlFor="JV3">JV3</label>
            <input
              type="text"
              id="JV3"
              name="JV3"
              placeholder=" JV3"
              value={JV3 || ""}
              onChange={handleInputChange}
            />
            <label htmlFor="ProjectResources">ProjectResources</label>
            <input
              type="text"
              id="ProjectResources"
              name="ProjectResources"
              placeholder=" ProjectResources"
              value={ProjectResources || ""}
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

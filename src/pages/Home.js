import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

import fireDb from "../firebase";
import "./stylesheets/Home.css";
const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fireDb.child("PipeLine").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });

    return ()=>{
      setData({});
    }
  },[]);

  const onDelete = (id) => {
    if (window.confirm("Are you sure that you want to delete?")) {
      fireDb.child(`PipeLine/${id}`).remove((err) => {
        if (err) {
          toast.error(err);
        } else {
          toast.success("Contract Deleted Successfully");
        }
      });
    }
  };
  return (
    <div style={{marginTop:"100px"}}>
      <table className="styled-table">
          <tr className="Heading">
            <th style={{textAlign:"center"}}>Sr. No.</th>
            <th style={{textAlign:"center"}}>Location</th>
            <th style={{textAlign:"center"}}>Sector</th>
            <th style={{textAlign:"center"}}>Name of Project</th>
            <th style={{textAlign:"center"}}>Assignments</th>
            <th style={{textAlign:"center"}}>Project Budget Million</th>
            <th style={{textAlign:"center"}}>Client</th>
            <th style={{textAlign:"center"}}>Focal Person</th>
            <th style={{textAlign:"center"}}>Consulting Budget</th>
            <th style={{textAlign:"center"}}>Strike Rate</th>
            <th style={{textAlign:"center"}}>JV</th>
            <th style={{textAlign:"center"}}>Funded/Non-Funded</th>
            <th style={{textAlign:"center"}}>Expected Date</th>
            <th style={{textAlign:"center"}}>Status</th>
          <th style={{ textAlign: "center" }}>Action</th>

          </tr>
        <tbody>
          {Object.keys(data).map((id,index)=>{
            return(
              <tr key={id}>
                <th scope="row">{index+1}</th>
                <td>{data[id].Location}</td>
                <td>{data[id].Sector}</td>
                <td>{data[id].Name}</td>
                <td>{data[id].Assignment}</td>
                <td>{data[id].Budget}</td>
                <td>{data[id].Client}</td>
                <td>{data[id].FocalPerson}</td>
                <td>{data[id].ConsultingBudget}</td>
                <td>{data[id].StrikeRate}%</td>
                <td>{data[id].JV}</td>
                <td>{data[id].FundStatus}</td>
                <td>{data[id].ExpectedDate}</td>
                <td>{data[id].status}</td>
                <td>
                  <Link to={`/update/${id}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button
                    className="btn btn-delete"
                    onClick={() => onDelete(id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {/* <h2>Home</h2> */}
    </div>
  );
};

export default Home;

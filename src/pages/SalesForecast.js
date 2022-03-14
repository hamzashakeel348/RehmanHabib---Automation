import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import fireDb from "../firebase";
import "./stylesheets/Home.css";
const Forecast = () => {
  const [data, setData] = useState({});

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
  }, []);
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
    <div style={{ marginTop: "100px" }} className="Inner">
      <table className="styled-table">
        <tr className="Heading">
          <th style={{ textAlign: "center" }}>Sr. No.</th>
          <th style={{ textAlign: "center" }}>Location</th>
          <th style={{ textAlign: "center" }}>Project Type</th>
          <th style={{ textAlign: "center" }}>Name</th>
          <th style={{ textAlign: "center" }}>Project Type</th>
          <th style={{ textAlign: "center" }}>StrikeRate</th>
          <th style={{ textAlign: "center" }}>ProjectCost</th>
          <th style={{ textAlign: "center" }}>ConsultancyCost</th>
          <th style={{ textAlign: "center" }}>Allocation</th>
          <th style={{ textAlign: "center" }}>Remuneration</th>
          <th style={{ textAlign: "center" }}>DirectCost</th>
          <th style={{ textAlign: "center" }}>%Share</th>
          <th style={{ textAlign: "center" }}>EstimatedShare</th>
          <th style={{ textAlign: "center" }}>Duration</th>
          <th style={{ textAlign: "center" }}>LeadFirm</th>
          <th style={{ textAlign: "center" }}>Action</th>
        </tr>
        <tbody>
          {Object.keys(data).map((id, index) => {
            console.log("hamzazs")
            if(data[id].StrikeRate>50)
            return (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{data[id].Location}</td>
                <td>{data[id].Sector}</td>
                <td>{data[id].Name}</td>
                <td>{data[id].ProjectType}</td>
                <td>{data[id].StrikeRate}%</td>
                <td>{data[id].ProjectCost}</td>
                <td>{data[id].ConsultancyCost}</td>
                <td>{data[id].Allocation}</td>
                <td>{data[id].Remuneration}</td>
                <td>{data[id].DirectCost}</td>
                <td>{data[id].share}%</td>
                <td>{data[id].EstimatedShare}</td>
                <td>{data[id].Duration}</td>
                <td>{data[id].LeadFirm}</td>
                <td>
                  <Link to={`/updateSales/${id}`}>
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
            );
          })}
        </tbody>
      </table>
      {/* <h2>Home</h2> */}
    </div>
  );
};

export default Forecast;

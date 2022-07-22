import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  function myFunction() {
    console.log("called");
    var input = document.getElementById("Filter");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("mytable");
    let filterTwo = document
      .getElementById("Filter_Sector")
      .value.toUpperCase();

    var tr = table.getElementsByTagName("tr");
    console.log(tr, "TWO");

    for (let i = 0; i < tr.length; i++) {
      var td = tr[i].getElementsByTagName("td")[1]; 
      var td1 = tr[i].getElementsByTagName("td")[2]; 
      console.log(td1, "TD");
      if (td) {
        if (
          td1.innerHTML.toUpperCase().indexOf(filterTwo) > -1 &&
          td.innerHTML.toUpperCase().indexOf(filter) > -1
        ) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  return (
    <div style={{}}>
      <table className="styled-table" id="mytable">
        <tr className="Heading">
          <th style={{ textAlign: "center" }}>Sr. No.</th>
          <th style={{ textAlign: "center" }}>Federal / Provincial</th>
          {/* <th style={{ textAlign: "center" }}>Location</th> */}
          <th style={{ textAlign: "center" }}>
            <input
              type="text"
              name=""
              id="Filter"
              placeholder="Location"
              onKeyUp={() => myFunction()}
            />
          </th>
          <th style={{ textAlign: "center" }}>
            <input
              type="text"
              name=""
              id="Filter_Sector"
              placeholder="Sector"
              onKeyUp={() => myFunction()}
            />
          </th>
          <th style={{ textAlign: "center" }}>Name of Project</th>
          <th style={{ textAlign: "center" }}>Assignments</th>
          <th style={{ textAlign: "center" }}>Project Budget Million</th>
          <th style={{ textAlign: "center" }}>Client</th>
          <th style={{ textAlign: "center" }}>Focal Person</th>
          <th style={{ textAlign: "center" }}>Consulting Budget</th>
          <th style={{ textAlign: "center" }}>Strike Rate</th>
          <th style={{ textAlign: "center" }}>JV1</th>
          <th style={{ textAlign: "center" }}>JV2</th>
          <th style={{ textAlign: "center" }}>JV3</th>
          <th style={{ textAlign: "center" }}>ProjectResources</th>
          <th style={{ textAlign: "center" }}>Funded/Non-Funded</th>
          <th style={{ textAlign: "center" }}>Expected Date</th>
          <th style={{ textAlign: "center" }}>Status</th>
          <th style={{ textAlign: "center"}}>Action</th>
        </tr>
        <tbody>
          {Object.keys(data).map((id, index) => {
            return (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{data[id].FOP}</td>
                <td>{data[id].Location}</td>
                <td>{data[id].Sector}</td>
                <td>{data[id].Name}</td>
                <td>{data[id].Assignment}</td>
                <td>{data[id].Budget}</td>
                <td>{data[id].Client}</td>
                <td>{data[id].FocalPerson}</td>
                <td>{data[id].ConsultingBudget}</td>
                <td>{data[id].StrikeRate}%</td>
                <td>{data[id].JV1}</td>
                <td>{data[id].JV2}</td>
                <td>{data[id].JV3}</td>
                <td>{data[id].ProjectResources}</td>

                <td>{data[id].FundStatus}</td>
                <td>{data[id].ExpectedDate}</td>
                <td>{data[id].status}</td>
                <td style={{ textAlign: "end" }}>
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
            );
          })}
        </tbody>
      </table>
      {/* <h2>Home</h2> */}
    </div>
  );
};

export default Home;

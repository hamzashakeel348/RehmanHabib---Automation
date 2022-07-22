import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import fireDb from "../firebase";

import "./stylesheets/Home.css";

const ForecastSecond = () => {
  var index = 0;
  function printData() {
    var divToPrint = document.getElementById("mytable");
    let newWin = window.open("");
    newWin.document.write(divToPrint.outerHTML);
    newWin.print();
    newWin.close();
  }
  const [data, setData] = useState({});
  const values = [];

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
  const SearchFun = () => {
    let filter = document.getElementById("Filter").value.toUpperCase();
    console.log(filter);
    let mytable = document.getElementById("mytable");
    let tr = mytable.getElementsByTagName("tr");
    for (var i = 1; i < tr.length; i++) {
      let td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        let textvalue = td.textContent || td.innerHTML;
        if (textvalue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };
  let grandtotal = 0;
  return (
    <div style={{ marginTop: "50px" }} className="Inner">
      <table className="styled-table" id="mytable">
        <tr className="Heading">
          <th style={{ textAlign: "center" }}>Sr. No.</th>
          <th style={{ textAlign: "center" }}>Federal / Provincial</th>

          <th style={{ textAlign: "center" }}>Location</th>
          <th style={{ textAlign: "center" }}>
            <input
              type="text"
              name=""
              id="Filter"
              placeholder="Project Type"
              onKeyUp={() => SearchFun()}
            />
          </th>
          <th style={{ textAlign: "center" }}>Name</th>
          <th style={{ textAlign: "center" }}>StrikeRate</th>

          <th style={{ textAlign: "center" }}>
            <th>Jul-22 </th>
            <th>Aug-22 </th>
            <th>Sep-22 </th>
            <th>Oct-22 </th>
            <th>Nov-22 </th>
            <th>Dec-22 </th>
            <th>Jan-23 </th>
            <th>Feb-23 </th>
            <th>Mar-23 </th>
            <th>Apr-23 </th>
            <th>May-23 </th>
            <th>Jun-23 </th>
          </th>

          <th style={{ textAlign: "center" }}>Total</th>
          <th style={{ textAlign: "center" }}>ProjectCost</th>
          <th style={{ textAlign: "center" }}>ConsultancyCost</th>
          <th style={{ textAlign: "center" }}>JV1</th>
          <th style={{ textAlign: "center" }}>JV2</th>
          <th style={{ textAlign: "center" }}>JV3</th>
          <th style={{ textAlign: "center" }}>ProjectResources</th>

          <th style={{ textAlign: "center" }}>Remuneration</th>
          <th style={{ textAlign: "center" }}>DirectCost</th>
          <th style={{ textAlign: "center" }}>Actual%Share</th>
          <th style={{ textAlign: "center" }}>EstimatedShare</th>
          <th style={{ textAlign: "center" }}>Duration</th>
          <th style={{ textAlign: "center" }}>LeadFirm</th>
          <th style={{ textAlign: "center" }}>ExpectedRevenue</th>
          <th style={{ textAlign: "center" }}>perMonthRevenue</th>
          <th style={{ textAlign: "center" }}>startMonth</th>
          <th style={{ textAlign: "center" }}>Action</th>
        </tr>

        <tbody>
          {Object.keys(data).map((id) => {
            if (data[id].StrikeRate > 50) {
              var x = data[id].startMonth.split("-")[1];
              console.log(data[id].salesFirst == true, "JKA");
              if (data[id].salesFirst == true) {
                index++;
                values.push(data[id]);
                grandtotal =
                  parseFloat(grandtotal) + parseFloat(data[id].total);
                return (
                  <tr key={id}>
                    <td scope="row">{index}</td>
                    <td>{data[id].FOP}</td>
                    <td>{data[id].Location}</td>
                    <td>{data[id].Sector}</td>
                    <td>{data[id].Name}</td>
                    <td>{data[id].StrikeRate}%</td>

                    <td
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      {data[id].monthsrev.map((index) => {
                        return <p>{index}</p>;
                      })}
                    </td>
                    <td>{data[id].total}</td>

                    <td>{data[id].Budget}</td>
                    <td>{data[id].ConsultingBudget}</td>
                    <td>{data[id].JV1}</td>
                    <td>{data[id].JV2}</td>
                    <td>{data[id].JV3}</td>
                    <td>{data[id].ProjectResources}</td>

                    <td>{data[id].Remuneration}</td>
                    <td>{data[id].DirectCost}</td>
                    <td>{data[id].share}%</td>
                    <td>{data[id].EstimatedShare}%</td>
                    <td>{data[id].Duration}</td>
                    <td>{data[id].LeadFirm}</td>
                    <td>{data[id].ExpectedRevenue}</td>
                    <td>{data[id].perMonthRevenue}</td>
                    <td>{data[id].startMonth}</td>

                    <td style={{ textAlign: "end" }}>
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
              }
            }
          })}
        </tbody>
      </table>
      <h3 style={{ marginLeft: "20px", color: "black" }}>
        Total: {grandtotal}
      </h3>
    </div>
  );
};

export default ForecastSecond;

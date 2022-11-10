import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Appointment.css";
const baseURL = "http://localhost:3000/appointments";
const AppointmentsTable = () => {
  const [clinicData, setClinicData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/appointments").then((response) => {
      setClinicData(response.data);
      console.log("clinic data", response.data);
    });
  }, []);

  

  return (
    <>
      <div className="card m-5 p-2">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Full Name</th>
              <th scope="col">Contact No</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Type</th>
              <th scope="col">Channel</th>
              <th scope="col">Patient_BP</th>
              <th scope="col">Patient_Plus</th>
              <th scope="col">Patient_SPO2</th>
              <th scope="col">Patient_Temp</th>
              <th scope="col">Patient_Weight</th>
              <th scope="col">Patient_Height</th>    
            </tr>
          </thead>

          <tbody>
            {clinicData.map((userData) => (
              <tr>
                <td>
                  {userData.FirstName} {userData.LastName}
                </td>
                <td>{userData.contact} </td>
                <td>{userData.AppointmentDate} </td>
                <td>{userData.AppointmentTime} </td>
                <td>{userData.AppointmentType} </td>
                <td>{userData.AppointmentChannel} </td>
                <td>{userData.Patient_BP}</td>
                <td>{userData.Patient_Plus}</td>
                <td>{userData.Patient_SPO2}</td>
                <td>{userData.Patient_Temp}</td>
                <td>{userData.Patient_Weight}</td>
                <td>{userData.Patient_Height}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AppointmentsTable;

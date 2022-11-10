import React from "react";
import "./UserDetails.css";
import { useFormik } from "formik";
import axios from "axios";

const UserDetailForm = () => {
  const morningTime = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
  ];
  const eveningTime = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
  ];

  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      UserId: "",
      DoctorId: "",
      ClinicId: "",
      Title: "",
      AppointmentTime: "",
      AppointmentDate: "",
      AppointmentType: "",
      contact: "",
      AppointmentChannel: "",
      Patient_BP: "",
      Patient_Plus: "",
      Patient_SPO2: "",
      Patient_Temp: "",
      Patient_Weight: "",
      Patient_Height: "",
      ShortNote: "",
    },
    onSubmit: (values,{resetForm}) => {
      axios
        .post("http://localhost:3000/appointments", {...values })
        .then((response) => {
          console.log(response.data, "post data");
          resetForm({values:""});
        });
    },
  });
  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow p-3 mb-5 bg-body rounded">
              <div className="display-flex row">
                <div className="col-md-8 p-2">
                  <div className="input-group rounded-pill">
                    <input
                      type="search"
                      className="form-control rounded-pill"
                      placeholder="Search by Name/Mobile Number"
                      aria-label="Search"
                      aria-describedby="search-addon"
                    />
                  </div>
                </div>
                <div className="col-md-4 p-2">
                  <button className="btn btn-primary rounded-pill  btn-sm">
                    profile
                  </button>
                </div>
              </div>

              {/* table section  */}
              <div className="card p-3">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Full Name</th>
                      <th scope="col">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mark</td>
                      <td>Otto</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>Thornton</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>Thornton</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>Thornton</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>Thornton</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* profile section  */}
              <div className="row display-flex">
                <p className="text-slots p-2 ">Profile Details</p>
                <div className="col-md-6">
                  <img
                    src="assets/profile.jpeg"
                    className="profile"
                    alt="profile"
                  />
                  <p className="p-2">Ravi Patil</p>
                </div>
                <div className="col-md-6">
                  <p>Loaction : NA</p>
                  <p>Contact : 123456789000</p>
                  <p>Email Id : NA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card shadow p-3 mb-5 bg-body rounded">
              <form onSubmit={formik.handleSubmit}>
                <div className="row">
                  <div className="details-section col-6">
                    <div className="p- m-2">
                      <p className="text-slots">Details</p>
                      <div className="row g-3">
                        <div className="details-form ">
                          <div className="row ">
                            <div className="col-md-6 mb-2">
                              <input
                                type="text"
                                className="form-control"
                                id="FirstName"
                                name="FirstName"
                                onChange={formik.handleChange}
                                value={formik.values.FirstName}
                                placeholder="First Name"
                              />
                            </div>
                            <div className="col-md-6 mb-2">
                              <input
                                type="text"
                                className="form-control"
                                name="LastName"
                                onChange={formik.handleChange}
                                value={formik.values.LastName}
                                id="LastName"
                                placeholder="Last Name"
                              />
                            </div>
                            <div className="col-md-4 mb-2">
                              <label htmlFor="userId" className="form-label">
                                User ID:
                              </label>
                              <input
                                name="UserId"
                                onChange={formik.handleChange}
                                value={formik.values.UserId}
                                type="text"
                                className="form-control"
                                placeholder="810459219"
                                id="userId"
                              />
                            </div>
                            <div className="col-md-4 mb-2">
                              <label htmlFor="userId" className="form-label">
                                Doctor Id:
                              </label>
                              <input
                                name="DoctorId"
                                onChange={formik.handleChange}
                                value={formik.values.DoctorId}
                                type="text"
                                className="form-control"
                                placeholder="45346070"
                                id="doctorId"
                              />
                            </div>
                            <div className="col-md-4 mb-2">
                              <label htmlFor="userId" className="form-label">
                                Clinic ID:
                              </label>
                              <input
                                name="ClinicId"
                                onChange={formik.handleChange}
                                value={formik.values.ClinicId}
                                type="text"
                                className="form-control"
                                placeholder="122990548"
                                id="ClinicId"
                              />
                            </div>

                            <div className="col-md-12 mb-2">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Select Doctor</option>
                                <option value="Dr. philip">Dr. philip</option>
                                <option value="Dr. Smith">Dr. Smith</option>
                                <option value="Dr. Krushna">Dr. Krushna</option>
                              </select>
                            </div>

                            <div className="col-md-12 mb-2">
                              <select
                                name="AppointmentChannel"
                                onChange={formik.handleChange}
                                value={formik.values.AppointmentChannel}
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>
                                  Select Appointment Channel
                                </option>
                                <option value="Walk In">Walk In</option>
                                <option value="By App">By App</option>
                                <option value="By Phone Call">
                                  By Phone Call
                                </option>
                                <option value="By Email">By Email</option>
                              </select>
                            </div>

                            <div className="col-md-12 mb-2">
                              <input
                                name="Title"
                                onChange={formik.handleChange}
                                value={formik.values.Title}
                                type="text"
                                className="form-control"
                                id="appointment"
                                placeholder="Appointment Title"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="appointment-details-section col-6">
                    <div className="">
                      <p className="text-slots">Appointment details</p>
                      <div className="row g-3">
                        <div className="col-md-6">Ravi Patil</div>
                        <div className="col-md-6">PID - 836241565</div>

                        <div className="col-md-6">Walk-In Appointment</div>
                        <div className="col-md-6">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <select
                            name="AppointmentTime"
                            onChange={formik.handleChange}
                            value={formik.values.AppointmentTime}
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Time</option>
                            <option value="08:00">08:00</option>
                            <option value="08:30">08:30</option>
                            <option value="09:00">09:00</option>
                            <option value="09:30">09:30</option>
                            <option value="10:00">10:00</option>
                            <option value="10:30">10:30</option>
                            <option value="11:00">11:00</option>
                            <option value="11:30">11:30</option>
                            <option value="12:00">12:00</option>
                            <option value="12:30">12:30</option>
                            <option value="13:00">13:00</option>
                            <option value="13:30">13:30</option>
                            <option value="14:00">14:00</option>
                            <option value="14:30">14:30</option>
                            <option value="15:00">15:00</option>
                            <option value="15:30">15:30</option>
                            <option value="16:00">16:00</option>
                            <option value="16:30">16:30</option>
                            <option value="17:00">17:00</option>
                            <option value="17:30">17:30</option>
                            <option value="18:00">18:00</option>
                            <option value="18:30">18:30</option>
                            <option value="19:00">19:00</option>
                            <option value="19:30">19:30</option>
                            <option value="20:00">20:00</option>
                            <option value="20:30">20:30</option>
                            <option value="21:00">21:00</option>
                            <option value="21:30">21:30</option>
                            <option value="22:00">22:00</option>
                            <option value="22:30">22:30</option>
                            <option value="23:00">23:00</option>
                            <option value="23:30">23:30</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <div className="input-group flex-nowrap">
                            <input
                              name="AppointmentDate"
                              onChange={formik.handleChange}
                              value={formik.values.AppointmentDate}
                              type="date"
                              className="form-control"
                              placeholder="Username"
                              aria-label="Username"
                              aria-describedby="addon-wrapping"
                            />
                          </div>
                        </div>

                        <select
                          id="AppointmentType"
                          name="AppointmentType"
                          onChange={formik.handleChange}
                          value={formik.values.AppointmentType}
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Select Appointment Type</option>
                          <option value="Check up">Check up</option>
                          <option value="Follow up">Followup</option>
                        </select>
                        <div className="mb-3">
                          <input
                            name="contact"
                            onChange={formik.handleChange}
                            value={formik.values.contact}
                            type="text"
                            className="form-control"
                            id="contact"
                            placeholder="Contact Number"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="vital-information">
                  <div className="row">
                    <p className="text-slots ">vital-information</p>
                    <div className="col-2">
                      <div className="mb-3">
                        <input
                          name="Patient_BP"
                          onChange={formik.handleChange}
                          value={formik.values.Patient_BP}
                          id="Patient_BP"
                          type="text"
                          className="form-control"
                          placeholder="BP"
                        />
                      </div>
                    </div>

                    <div className="col-2">
                      <div className="mb-3">
                        <input
                          name="Patient_Temp"
                          onChange={formik.handleChange}
                          value={formik.values.Patient_Temp}
                          id="Patient_Temp"
                          type="text"
                          className="form-control"
                          placeholder="Tempurature"
                        />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="Patient_Height"
                          onChange={formik.handleChange}
                          value={formik.values.Patient_Height}
                          id="Patient_Height"
                          placeholder="Height"
                        />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="Patient_Weight"
                          onChange={formik.handleChange}
                          value={formik.values.Patient_Weight}
                          id="Patient_Weight"
                          placeholder="Weight"
                        />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="Patient_SPO2"
                          onChange={formik.handleChange}
                          value={formik.values.Patient_SPO2}
                          id="Patient_SPO2"
                          placeholder="SPO2"
                        />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="Patient_Plus"
                          onChange={formik.handleChange}
                          value={formik.values.Patient_Plus}
                          id="Patient_Plus"
                          placeholder="Pulse Rate"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="ShortNote"
                          onChange={formik.handleChange}
                          value={formik.values.ShortNote}
                          id="ShortNote"
                          placeholder="Reason"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Note For Doctor</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center ">
                    <button className="btn-sm btn btn-primary rounded-pill m-2">
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="btn-sm btn btn-primary rounded-pill m-2"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container  ">
        <div className="mb-2">
          <p className="text-slots">Morning Slots </p>
        </div>
        <div className=" flex-container justify-content-center ms-2">
          {morningTime.map((data) => (
            <div className=" timeslot card m-2 p-1  shadow  mb-5 bg-body rounded">
              {data}
            </div>
          ))}
        </div>
      </div>
      <div className="container  ">
        <div className="mb-2">
          <p className="text-slots">Evening Slots</p>
        </div>
        <div className=" flex-container justify-content-center ms-2">
          {eveningTime.map((data) => (
            <div className=" timeslot card m-2 p-1  shadow  mb-5 bg-body rounded">
              {data}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserDetailForm;

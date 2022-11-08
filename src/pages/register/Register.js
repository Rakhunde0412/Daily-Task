import React from "react";
import classes from "./Register.module.css";
const Register = () => {
  return (
    <div>
      <div classNameName="container">
        <div className="row m-5 p-5">
          <div className="col-6">
            <img
              src="assets/register.png"
              className={classes.registerImg}
              alt="login"
            />
          </div>
          <div className="col-6 card p-5">
            <form>
              <div className="mb-3">
                <label htmlFor="inputName" className="form-label">
                  Enter your full name
                </label>
                <input type="input" id="inputName" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">
                  Email address
                </label>
                <input type="email" id="inputEmail" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">
                  Confirm p assword
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 mb-3"
              >
                Register
              </button>
              <p className="p-2"> All ready Have account </p>
              <button type="submit" className="btn btn-outline-primary w-100">
                Login here
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

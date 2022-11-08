import React from "react";
import classes from "./Login.module.css";
const Login = () => {
  return (
    <div>
      <div classNameName="container">
        <div className="row m-5 p-5">
          <div className="col-6 justify-content-center">
            <div className="text-align-center">
              <h2 className="text-primary">You Social</h2>
              <p className="fw-bold">
                Connect with friends and the world around you on You-Social
              </p>
            </div>
            <img  className={classes.image} src="assets/login.png" alt="login" />
          </div>
          <div className="col-6 card p-5">
            <form>
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="inputPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
              <p>Not a member ? </p>
              <button type="submit" className="btn btn-outline-primary w-100">
                create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    userName: "",
    userPassword: "",
  });
  const [formData, setFormData] = useState(loginData);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

 
  
  const handleLogin = (event) => {
    event.preventDefault();
    const userDetails = JSON.parse(localStorage.getItem("user-details"));
    console.log(userDetails);
    console.log(loginData);
    setErrors(validate(loginData));
    setIsSubmit(true);

    setLoginData({
      userName: "",
      userPassword: "",
    });

    if(loginData.userName.trim()==="" && loginData.userPassword.trim()===""){
      swal("Invalid credentials!", "User name and password cannot be empty !", "error");
    }else

    if (
      loginData.userName === userDetails.userEmail &&
      loginData.userPassword === userDetails.password
    ) {
      localStorage.setItem("isAuthenticated","true");
       swal("Login successfully!!", "Welcome to dashboard!!", "success");

      navigate("/container");
    } else {
       swal("Invalid credentials!", "Please enter valid details", "error");
     
    }
  };
  useEffect(() => {
    if (Object.keys(formData).length === 0 && isSubmit) {
      console.log(formData);
    }
  }, [errors, formData, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.userName) {
      errors.userName = "username is required";
    } else if (!regex.test(values.userName)) {
      errors.userName = "Enter valid email format";
    }
    if (!values.userPassword) {
      errors.userPassword = "Password is required";
    } else if (values.userPassword.length < 6) {
      errors.userPassword = "Password must be more than 6";
    } else if (values.userPassword.length > 10) {
      errors.userPassword = "Password must be greater than 10";
    }
    return errors;
  };

  return (
    <>
      <p className="text-center  fw-bold mb-4 mx-1 mx-md-4 mt-2 ">Login  Here</p>
      <div className="d-flex justify-content-center  ">
      <form >
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="form-control "
            value={loginData.userName}
            onChange={(e) =>
              setLoginData({
                ...loginData,
                userName: e.target.value,
              })
            }
          />
          <p className="text-danger">{errors.userName}</p>
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control "
            value={loginData.userPassword}
            onChange={(e) =>
              setLoginData({
                ...loginData,
                userPassword: e.target.value,
              })
            }
          />
          <p className="text-danger">{errors.userPassword}</p>
        </div>

        <button
          type="button"
          className="btn btn-primary btn-block mb-4 w-100"
          onClick={handleLogin}
        >
          Submit
        </button>

        <div className="">
          <p className="fw-bold">New to the website? </p>
          <button
            className="btn btn-primary w-100"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Create
          </button>
        </div>
      </form>
      </div>
    </>
  );
};


export default Login;

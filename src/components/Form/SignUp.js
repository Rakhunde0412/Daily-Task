import React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("user-details", JSON.stringify(data));
    navigate("/");
    swal(
      "Data Submitted successfully !!",
      "Now you are good to login!!",
      "success"
    );
    console.log(data);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <img
            width="80%"
            src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=740&t=st=1666010510~exp=1666011110~hmac=c053bd66441f89b713cea88a4e5fa0b5ccadf613b2263bc018b14aeaff9ebbab"
            alt=""
          />
        </div>
        <div className="col-md-6">
          <p className="text-center h3 fw-bold mb-2 mx-1 mx-md-4 mt-2 text-black-50">
            Sign up
          </p>
          <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-outline mb-1">
                <label className="form-label" htmlFor="firstName">
                  First Name
                </label>
                <input
                  {...register("firstName", { required: true })}
                  type="text"
                  id="firstName"
                  className="form-control"
                />
                {errors.firstName && (
                  <p className="text-danger">first name is required.</p>
                )}
              </div>

              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  {...register("lastName", { required: true })}
                  type="text"
                  id="lastName"
                  className="form-control "
                />
                {errors.lastName && (
                  <p className="text-danger">last name is required.</p>
                )}
              </div>

              <div className="form-outline  mb-2">
                <label className="form-label" htmlFor="userEmail">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  {...register("userEmail", {
                    required: { value: true, message: "Email is required" },

                    maxLength: { value: 30, message: "Input is too long" },

                    minLength: { value: 5, message: "Input is too Short" },

                    pattern: {
                      value: /[a-z0-9]+\@[a-z]+\.[a-z]{2,3}/,

                      message: "invalid Email",
                    },
                  })}
                />
                {errors.userEmail && (
                  <p className="text-danger">{errors.userEmail.message}</p>
                )}
              </div>

              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: { value: true, message: "Password is required" },

                    maxLength: { value: 16, message: "Input is too long" },

                    minLength: { value: 8, message: "Input is too Short" },

                    pattern: {
                      value:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,

                      message:
                        "Must contain minimum eight characters, at least one letter, one number and one special character:",
                    },
                  })}
                  type="password"
                  className="form-control "
                />
                {errors.password && (
                  <p className="text-danger">{errors.password.message}</p>
                )}
              </div>

              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="confirmPassword">
                  Repeat your password
                </label>
                <input
                  {...register("confirmPassword", {
                    required: { value: true, message: "Password is required" },

                    maxLength: { value: 16, message: "Input is too long" },

                    minLength: { value: 8, message: "Input is too Short" },

                    pattern: {
                      value:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,

                      message:
                        "Must contain minimum eight characters, at least one letter, one number and one special character:",
                    },

                    validate: (val) => {
                      if (watch("password") !== val) {
                        return "Your passwords do no match";
                      }
                    },
                  })}
                  type="password"
                  className="form-control "
                />
                {errors.confirmPassword && (
                  <p className="text-danger">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <button type="submit" className="btn btn-primary btn-block w-100">
                Register
              </button>

              <p className="text-center text-muted mt-3 mb-0">
                Have already an account?{" "}
                <a href="/" className="fw-bold text-body">
                  <u>Login here</u>
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

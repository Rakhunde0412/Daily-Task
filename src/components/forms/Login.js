import React, { useState } from "react";

const Login = () => {
  const [formInput, setInputForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  function handleChange(event) {
    let emailDetails = formInput.email;
    if (emailDetails.trim() === "") {
      setError(true);
    } else {
      setError(false);
    }

    let passwordDetails = formInput.password;
    if (passwordDetails.trim() === "") {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }

    console.log(formInput);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setInputForm({
      email: "",
      password: "",
    });
  }
  return (
    <>
      <section className="m-5  ">
        <h2 className="fw-bold">Login</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="banner">
            <div className="mb-3">
              <input
                type="email"
                className="form-control w-50"
                placeholder="Enter your email"
                value={formInput.email}
                onChange={(e) =>
                  setInputForm({
                    ...formInput,
                    email: e.target.value,
                  })
                }
              />
              {error ? (
                <p className="text-danger">Email cannot cannot be empty!</p>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control w-50"
                placeholder="Enter your password"
                value={formInput.password}
                onChange={(e) =>
                  setInputForm({ ...formInput, password: e.target.value })
                }
              />
              {lastNameError ? (
                <p className="text-danger">password cannot be empty!</p>
              ) : (
                ""
              )}
            </div>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handleChange}
            >
              {" "}
              submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;

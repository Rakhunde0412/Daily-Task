import React, { useState } from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {

    const [post, setPost] = useState(null);
  const data = [
    {
      name: "vivek",
      age: 25,
      Edu: "Bsc",
    },
    {
      name: "pratik",
      age: 25,
      Edu: "Bsc",
    },
    {
      name: "yuvraj",
      age: 25,
      Edu: "Bsc",
    },
  ];

  const newData = data.map((currentValue) => {
    return currentValue.name;
  });

  console.log(newData);
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      useremail: "",
      password: "",
      status: "",
      language: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(10, "username must be <= 10 character")
        .required("This is required field"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted", values);
    },
  });
  return (
    <>
     <h2 className='fw-bold text-center'>Sign Up</h2>
     <section className="justify-content-center m-5">
        <form onSubmit={formik.handleSubmit}>
          <input
            className="form-control"
            placeholder="first name"
            type="text"
            name="firstname"
            onChange={formik.handleChange}
            value={formik.values.firstname}
            onBlur={formik.handleBlur}
          />
          <p className="text-danger"> {formik.errors.firstname}</p>
          <br />
          <input
            className="form-control"
            placeholder="last name"
            type="text"
            name="lastname"
            onChange={formik.handleChange}
            value={formik.values.lastname}
          />
          <br />
          <input
            className="form-control"
            type="email"
            name="useremail"
            onChange={formik.handleChange}
            value={formik.values.useremail}
            placeholder="Enter your email"
          />
          <br />
          <input
            className="form-control"
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Enter your password"
          />
          <br />
          <span className=" fw-bold">Status:</span>
          <br />
          <input
            className="ms-5"
            type="radio"
            name="status"
            value="single"
            onChange={formik.handleChange}
          />
          <label htmlFor="">Single</label>
          <input
            className="ms-5"
            type="radio"
            name="status"
            value="committed"
            onChange={formik.handleChange}
          />
          <label htmlFor="">committed</label>
          <input
            className="ms-5"
            type="radio"
            name="status"
            value="coder"
            onChange={formik.handleChange}
          />
          <label htmlFor="">Coder</label>
          <br />
          <select
          style={{width: "18rem"}}
            className="form-control "
            name="language"
            onChange={formik.handleChange}
          >
            <option value="">Select Language</option>
            <option value="html">html</option>
            <option value="css">css</option>
            <option value="javascript">Javascript</option>
            <option value="react">react js</option>
            <option value="angular">angular</option>
          </select>
          <br />

          
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <br />
        </form>
      </section>
      
    </>
  )
}

export default SignUp

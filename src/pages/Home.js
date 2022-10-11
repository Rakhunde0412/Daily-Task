import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container row">
        <div className="first_section col-6 p-5">
          <p>Welcome to </p>
          <h2> Online Shopping </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
            omnis? Minima reiciendis sed earum ducimus doloribus ipsa eius
            dignissimos perspiciatis debitis.
          </p>
          <NavLink to="/products">
          <button className="btn btn-primary">Shop Now</button>
          </NavLink>
        </div>

        <div className="first_section col-6 p-5">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwZgjWbirtSNtfKXj4vmkti5sYy0F6R8EZVA&usqp=CAU" alt=" " />
        </div>
      </div>
    </>
  );
};

export default Home;

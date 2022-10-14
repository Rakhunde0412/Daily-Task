import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/UiElements/Footer/Footer";
import Header from "../components/UiElements/Navbar/Header";

const Home = () => {
  return (
    <>
    <Header/>
      <div className="container row">
        <div className="first_section col-6 p-5">
          <p>Welcome to </p>
          <h2> Online Shopping </h2>
          <p>
            Buy Men’s & Women’s Sandals on wecart, Branded Slippers online
            Shopping Destinations in India. Huge range of comfortable sandals
            that can be he make one of the most Trendy Product ever. Wecart.in
            Offering Men’s casual shoes &Women’s Casual Sandals. Online Mobile
            Accessories store in India
          </p>
          <NavLink to="/products">
            <button className="btn btn-outline-primary">Shop Now</button>
          </NavLink>
        </div>

        <div className="first_section col-6 p-5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwZgjWbirtSNtfKXj4vmkti5sYy0F6R8EZVA&usqp=CAU"
            alt="background "
          />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;

import React from "react";
import Feed from "../../components/feed/Feed";
import Navbar from "../../components/header/Navbar";
import Rightbar from "../../components/rightbar.js/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import classes from "./Home.module.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className={classes.homeContainer}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;

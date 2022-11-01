import React from "react";
import Dashboard from "../../components/dashboard/Dashboard";
import Feed from "../../components/feed/Feed";
import Navbar from "../../components/header/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import classes from "./Home.module.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className={classes.homeContainer}>
        <Sidebar />
        <Feed />
        <Dashboard />
      </div>
    </>
  );
};

export default Home;

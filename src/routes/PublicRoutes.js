import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Navbar/Header";
const PublicRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<h1>Hello world</h1>} />
        <Route exact path="/movie/:id" element={<h1>movie page</h1>} />
        <Route exact path="/movies/:type" element={<h1>movies type page</h1>} />
        <Route exact path="/*" element={<h1>error page</h1>} />
      </Routes>
    </>
  );
};

export default PublicRoutes;

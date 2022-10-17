import React from "react";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { useSelector } from "react-redux";

const Header = () => {
  const items=useSelector((state)=>state.cart);
  const handleLogout= ()=>{
    localStorage.removeItem("isAuthenticated");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
        <div className="container">
          <Link className="navbar-brand" to="#">
            <img
              className="w-25"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmTpROMoh63Nm0ZwAvPciVZyPkYPUJfUCQDw&usqp=CAU"
              alt="icon"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active ms-2"
                  aria-current="page"
                  to="/products"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active ms-2"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active ms-2 "
                  aria-current="page"
                  to="/contact"
                >
                  Contacts
                </Link>
              </li>
            </ul>
            <Link to="/">
              <button className="btn btn-outline-primary">
                <LoginIcon /> Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-outline-primary ms-3">
                <PersonAddAltIcon /> Register
              </button>
            </Link>
            <Link to="/cart">
              <button className="btn btn-outline-primary ms-3">
                <ShoppingCartIcon /> Cart:{items.length}
              </button>
            </Link>
            <Link to="/"
               className="btn btn-outline-primary ms-3" onClick={handleLogout}>
                <PersonAddAltIcon /> Logout
              
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

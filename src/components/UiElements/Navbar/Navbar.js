import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContactPageIcon from '@mui/icons-material/ContactPage';

const Navbar = () => {
  return (
    <>
      <nav className="navbar d-block navbar-expand-lg navbar-light bg-light w-100">
        <div className="d-flex justify-content-between">
          <div>
            <div className="container-fluid d-flex  ">
              <Link className="navbar-brand" to="/">
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
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/">
                  {" "}
                  <HomeIcon  color="primary" />
                  
                </Link>
                <Link className="nav-link" to="/">
                  <ContactPageIcon  color="primary"/>
                </Link>
                <Link className="nav-link" to="/">
                  <ShoppingCartIcon  color="primary" />
                </Link>
                <Link
                  className="nav-link "
                  to="/"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  <LoginIcon  color="primary" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

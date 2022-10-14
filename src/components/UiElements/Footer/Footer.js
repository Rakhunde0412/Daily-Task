import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <>
      {/* Footer  */}
      <footer className="text-center text-lg-start bg-light text-muted">
        {/* Section: Social media  */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left  */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left  */}

          {/* Right  */}
          <div>
            <Link to="" className="me-4 text-reset">
             <FacebookIcon/>
            </Link>
            <Link to="" className="me-4 text-reset">
              <TwitterIcon/>
            </Link>
            <Link to="" className="me-4 text-reset">
              <GoogleIcon/>
            </Link>
            <Link to="" className="me-4 text-reset">
             <InstagramIcon/>
            </Link>
            <Link to="" className="me-4 text-reset">
              <LinkedInIcon/>
            </Link>
            <Link to="" className="me-4 text-reset">
              <GitHubIcon/>
            </Link>
          </div>
          {/* Right  */}
        </section>
        {/* Section: Social media  */}

        {/* Section: Links   */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row  */}
            <div className="row mt-3">
              {/* Grid column  */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content  */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>La Online Store
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              {/* Grid column  */}

              {/* Grid column  */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links  */}
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <Link to="" className="text-reset">
                    Angular
                  </Link>
                </p>
                <p>
                  <Link to="" className="text-reset">
                    React
                  </Link>
                </p>
                <p>
                  <Link to="" className="text-reset">
                    Vue
                  </Link>
                </p>
                <p>
                  <Link to="" className="text-reset">
                    Laravel
                  </Link>
                </p>
              </div>
              {/* Grid column  */}

              {/* Grid column  */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links  */}
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <Link to="" className="text-reset">
                    Pricing
                  </Link>
                </p>
                <p>
                  <Link to="" className="text-reset">
                    Settings
                  </Link>
                </p>
                <p>
                  <Link to="" className="text-reset">
                    Orders
                  </Link>
                </p>
                <p>
                  <Link to="" className="text-reset">
                    Help
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
              {/* Grid column  */}
            </div>
            {/* Grid row  */}
          </div>
        </section>
        {/* Section: Links   */}

        {/* Copyright  */}
        <div
          className="text-center p-4"
          
        >
          © 2022 Copyright:
          <Link className="text-reset fw-bold" to="">
           My site
          </Link>
        </div>
        {/* Copyright  */}
      </footer>
      {/* <!-- Footer  */}
    </>
  );
};

export default Footer;

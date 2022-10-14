import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../components/UiElements/Footer/Footer";
import Header from "../components/UiElements/Navbar/Header";

const Container = () => {
  return (
    <>
      <Header />
      
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/otherImages/first-slide.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Why are you waiting For ?</h3>
            <p> Fashion & Clothing is the one makes you look awesome and unique from others!</p>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/otherImages/second-slide.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Here is your Love !</h3>
            <p>Ordering online was all about ticking boxes. Species. Color.
             Size. Number. Grade of quality. Degree of openness</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/otherImages/offer.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Show Now</h3>
            <p>
            The great thing about the Internet isn't that you can reconnect with old friends or stay up to date with developing world events or send 
            pictures of newborns immediately around the world
           
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Footer />
    </>
  );
};

export default Container;

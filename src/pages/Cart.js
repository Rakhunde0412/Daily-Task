import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../components/UiElements/Footer/Footer";
import Header from "../components/UiElements/Navbar/Header";
import { remove } from "../redux/features/product/productSlice";

const Cart = () => {
  const dispatch=useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove=(productId)=>{
          dispatch(remove(productId))
  }

  return (
    <>
      <Header />

      <h2 className="text-center m-5 text-uppercase text-black-50">Carts</h2>
      <hr />
      {products.map((product) => (
        <div className="card m-2 p-2">
          <div className="row  ">
            <div className="col-md-4">
              <img
                src={product.image}
                alt={products.title}
                height="100px"
                width="100"
              />
            </div>

            <div className="col-md-4">
              <p>{product.title}</p>
              <h5>${product.price}</h5>
            </div>

            <div className="col-md-4 p-3  mt-3">
              <button
                className="btn btn-outline-primary"
                onClick={() => handleRemove(product.id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* <div className="col-md-4">
              <img src={products.image} alt={products.title} height="200px" width="180" />
              
            </div>

            <div className="col-md-4">
              <h3>{ products.title}</h3>
            </div> */}

      <Footer />
    </>
  );
};

export default Cart;

import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import Footer from "../components/UiElements/Footer/Footer";
import Navbar from "../components/UiElements/Navbar/Navbar";
import "../styles/Products.css";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [filter, setFilter] = useState(productData);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    allData();
  }, []);
  console.log(productData, "all product data");

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton />
        </div>
      </>
    );
  };

  const allData = () => {
    axios.get("http://localhost:3000/all-products").then((response) => {
      setProductData(response.data);
    });
  };

  const filterProduct = (cat) => {
    const updatedList = productData.filter((x) => x.category === cat);
    console.log(updatedList, "updated list");
    setProductData(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => allData()}
          >
            All
          </button>
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's clothes
          </button>
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's clothes
          </button>
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery clothes
          </button>
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-5  py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h2 className="display-6 fw-bolder text-center">
              {" "}
              welcome to store
            </h2>
            <hr />
          </div>
        </div>

        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>

        <div className="row">
          {productData &&
            productData?.map((post, i) => (
              <div
                key={i}
                className="card col-3  m-2 h-100 text-center homeCard "
              >
                <img src={post.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">${post.price}</p>

                  <Link className="btn btn-outline-primary">Buy Now</Link>
                </div>
              </div>
            ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/UiElements/Footer/Footer";
import Navbar from "../components/UiElements/Navbar/Navbar";

const Products = () => {
  const [productData, setProductData] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:3000/all-products").then((response) => {
      setProductData(response.data);
    });
  }, []);
  console.log(productData, "all product data");

  return (
    <>
      <Navbar />
      <h2>product page</h2>
      {productData &&
        productData?.map((post, i) => (
          <div key={i} className="card" style={{ width: "18rem" }}>
            <img src="" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">
               {post.description}
              </p>

              <Link>{post.price}</Link>
            </div>
          </div>
        ))}

      <Footer />
    </>
  );
};

export default Products;

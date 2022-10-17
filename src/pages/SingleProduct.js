import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import Footer from "../components/UiElements/Footer/Footer";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Header from "../components/UiElements/Navbar/Header";
import {add} from "../redux/features/product/productSlice";
import { useDispatch } from "react-redux";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`http://localhost:3000/all-products/${id}`).then((response) => {
      setProduct(response.data);
      setLoading(false);
      console.log(product, "single data");
    });
  }, []);

  const Loading = () => {
    return <>loading...</>;
  };

  const handleAdd = (product) => {
      dispatch(add(product));
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="row p-5 m-5">
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.title}
              height="400px"
              width="400px"
            />
          </div>
          <div className="col-md-6">
            <h4 className="text-uppercase text-black-50 ">
              {product.category}
            </h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="lead fw-bolder">
              <StarBorderIcon color="primary" /> Rating{" "}
              {product.rating && product.rating.rate}
            </p>
            <h3 className="display-6">${product.price}</h3>
            <p className="lead">{product.description}</p>
            <button
              className="btn btn-outline-primary px-4 my-2"
              onClick={handleAdd(product)}
            >
              Add to Cart
            </button>
            <Link to="/cart" className="btn btn-outline-primary px-4 mx-2">
              Go to Cart
            </Link>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">{loading ? Loading() : ShowProduct()}</div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;

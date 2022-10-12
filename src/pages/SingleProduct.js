import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProduct = () => {
      setLoading(true);

      axios.get(`http://localhost:3000/products/${id}`).then((response) => {
        setProduct(response.data);
      });
    };
    getProduct();
    console.log(product, "single product data");
  }, []);

  const Loading =() =>{
    return(
      <>
        loading...
      </>
    )
  }

  const ShowProwduct=() =>{
    return(
      <>

      </>
    )
  }

  return <>
    <div className="container">
      <div className="row">
        {loading?<Loading/>:<ShowProwduct/>}
      </div>
    </div>
  </>;
};

export default SingleProduct;

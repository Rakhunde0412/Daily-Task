import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../components/UiElements/Footer/Footer'
import Header from '../components/UiElements/Navbar/Header';


const Cart = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/all-products/${id}`).then((response) => {
      setProduct(response.data);
      console.log(product, "cart data");
    });
  }, []);
  return (
    <>
    <Header/>
           <div className="row">
            <div className="col-md-4">
              <img src={product.image} alt={product.title} height="200px" width="180" />
              
            </div>

            <div className="col-md-4">
              <h3>{ product.title}</h3>
            </div>
           </div>

         
      <Footer/>
    </>
  )
}

export default Cart

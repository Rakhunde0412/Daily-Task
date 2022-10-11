import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Form/Login'
import SignUp from '../components/Form/SignUp'
import About from '../pages/About'
import Cart from '../pages/Cart'
import Contact from '../pages/Contact'
import Container from '../pages/Container'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import Products from '../pages/Products'
import SingleProduct from '../pages/SingleProduct'

const PublicRoutes = () => {
  return (
    <>
      <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route exact path="/signup" element={<SignUp/>} />
      <Route exact path="/container" element={<Container/>} />
    <Route exact path="/home" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/products" element={<Products/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/singleproduct/:id" element={<SingleProduct/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="*" element={<ErrorPage/>} />
    
    {/* <Route path="/dashboard" element={<ProtectedRoutes component={Container}/>} /> */}
</Routes>
    </>
  )
}

export default PublicRoutes

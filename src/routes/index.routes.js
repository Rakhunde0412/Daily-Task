import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Form/Login'
import SignUp from '../components/Form/SignUp'
import About from '../components/UiElements/Dashboard/About'
import Cart from '../components/UiElements/Dashboard/Cart'
import Contact from '../components/UiElements/Dashboard/Contact'
import ErrorPage from '../components/UiElements/Dashboard/ErrorPage'
import Home from '../components/UiElements/Dashboard/Home'
import Products from '../components/UiElements/Dashboard/Products'
import SingleProduct from '../components/UiElements/Dashboard/SingleProduct'

const PublicRoutes = () => {
  return (
    <>
      <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route exact path="/signup" element={<SignUp/>} />
    <Route exact path="/home" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/products" element={<Products/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/singleproduct/:id" element={<SingleProduct/>} />
    <Route path="/cat" element={<Cart/>} />
    <Route path="*" element={<ErrorPage/>} />
    
    {/* <Route path="/dashboard" element={<ProtectedRoutes component={Container}/>} /> */}
</Routes>
    </>
  )
}

export default PublicRoutes

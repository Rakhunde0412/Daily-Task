import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import SignUp from "./components/forms/SignUp";
import Login from "./components/forms/Login";



function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

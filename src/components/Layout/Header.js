import React from 'react'
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = (props) => {
  return (
    <>
    <header className={classes.header}>
    <h1>Meals</h1>
    <button className="btn btn-outline-dark"><ShoppingCartIcon/>  Your cart :3</button>

    </header>
    <div className={classes['main-image']}>
        <img src={mealsImage} alt="meal" />
    </div>
      
    </>
  )
}

export default Header

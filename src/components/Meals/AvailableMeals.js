import React, { useEffect } from "react";
import classes from "./AvailableMeal.module.css";
import mealItemClasses from "./MealItem/MealItem.module.css";
import axios from "axios";
import { Card } from "@mui/material";
import MealItemForm from "./MealItem/MealItemForm";

const baseURL = "http://localhost:3000/all-meals";

const AvailableMeals = () => {
  const [mealsData, setMealsData] = React.useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setMealsData(response.data);
    });
    console.log("Meals data", mealsData);
  }, []);
  return (
    <>
      <section className={classes.meals}>
        {mealsData &&
          mealsData?.map((meal, i) => (
            <div>
              <Card className="m-5">
              <div className="row">
              <div className="col-md-6">
              <ul className="m-2 p-2">
                  <li className={mealItemClasses.meal}>
                    <div>
                      <h3>{meal.name}</h3>
                      <div className={mealItemClasses.description}>
                        {meal.description}
                      </div>
                      <div className={mealItemClasses.price}>${meal.price}</div>
                    </div>
                    <div></div>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 p-3" >
                <MealItemForm/>
              </div>

              </div>
                
              </Card>
            </div>
          ))}
      </section>
    </>
  );
};

export default AvailableMeals;

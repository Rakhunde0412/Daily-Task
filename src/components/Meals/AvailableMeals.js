import React, { useEffect } from "react";
import classes from "./AvailableMeal.module.css";
import axios from "axios";
import { Card } from "@mui/material";

const baseURL = "http://localhost:3000/all-meals";

const AvailableMeals = () => {
  const [mealsData, setMealsData] = React.useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setMealsData(response.data);
    });
    console.log("Meals data", mealsData);
  }, []);

  //   const mealList = mealsData.map((meal) => <li>{meal.name}</li>);
  return (
    <>
      <section className={classes.meals}>
        {mealsData &&
          mealsData?.map((meal, i) => (
            <div>
            <Card>
              <ul>
                <li>{meal.name}</li>
                <li>{meal.description}</li>
                <li>{meal.price}</li>
              </ul>
              </Card>
            </div>
          ))}
      </section>
    </>
  );
};

export default AvailableMeals;

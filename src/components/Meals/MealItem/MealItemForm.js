import React from "react";
import Input from "../../UI/Input";
import classes from "./MealItem.module.css";
const MealItemForm = (props) => {
  return (
    <>
      <form className={classes.form}>
        <Input
          label="Amount"
          input={{
            id: "amount_"+props.id,
            type: "number",
            min: "1",
            max: "5",
            defaultValue: "1",
          }}
        />
        <button className="btn btn-outline-dark">Add</button>
      </form>
    </>
  );
};

export default MealItemForm;

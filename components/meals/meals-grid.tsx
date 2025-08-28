import { ReactNode } from "react";
import MealItem, { type Meal } from "./meal-item";
import classes from "./meals-grid.module.scss";

export default function MealsGrid({ meals }: { meals: Meal[] }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal: Meal): ReactNode => {
        return (
          <li key={meal.slug}>
            <MealItem {...meal} />
          </li>
        );
      })}
    </ul>
  );
}

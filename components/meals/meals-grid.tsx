import { ReactNode } from "react";
import MealItem, { type MealProps } from "./meal-item";
import classes from "./meals-grid.module.scss";

export default function MealsGrid({ meals }: { meals: MealProps[] }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal: MealProps): ReactNode => {
        return (
          <li key={meal.slug}>
            <MealItem {...meal} />
          </li>
        );
      })}
    </ul>
  );
}

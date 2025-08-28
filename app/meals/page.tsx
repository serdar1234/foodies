import Link from "next/link";
import classes from "./page.module.scss";
import MealsGrid from "@/components/meals/meals-grid";
import getMeals from "@/lib/meals";
import { MealProps } from "@/components/meals/meal-item";

export default async function MealsPage() {
  const meals: MealProps[] = await getMeals();

  return (
    <>
      <header className={classes.header}>
        <h1>
          Super Meals created <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Voluptatum libero vel, corporis doloribus dignissimos consequuntur
          quisquam nemo quis quaerat quibusdam nihil?
        </p>
        <p className={classes.cta}>
          <Link href="/share">Share you favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}

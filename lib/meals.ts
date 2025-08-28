import { MealProps } from "@/components/meals/meal-item";
import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals(): Promise<MealProps[]> {
  await new Promise<void>((resolve) => setTimeout(resolve, 1000));

  // if (Math.random() > 0.5) {
  //   throw new Error("db error for meals");
  // }

  return db.prepare("SELECT * FROM meals").all() as unknown as MealProps[];
}

export function getMeal(slug: string): MealProps {
  return db
    .prepare("SELECT * FROM meals WHERE slug = ?")
    .get(slug) as unknown as MealProps;
}

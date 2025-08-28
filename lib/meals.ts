import { MealProps } from "@/components/meals/meal-item";
import sql from "better-sqlite3";

const db = sql("meals.db");

export default async function getMeals(): Promise<MealProps[]> {
  await new Promise<void>((resolve) => setTimeout(resolve, 1000));
  return db.prepare("SELECT * FROM meals").all() as unknown as MealProps[];
}

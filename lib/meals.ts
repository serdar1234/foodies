"use server";

import { Meal } from "@/components/meals/meal-item";
import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals(): Promise<Meal[]> {
  await new Promise<void>((resolve) => setTimeout(resolve, 1000));

  // if (Math.random() > 0.5) {
  //   throw new Error("db error for meals");
  // }

  return db.prepare("SELECT * FROM meals").all() as unknown as Meal[];
}

export async function getMeal(slug: string): Promise<Meal> {
  await new Promise<void>((resolve) => setTimeout(resolve));

  return db
    .prepare("SELECT * FROM meals WHERE slug = ?")
    .get(slug) as unknown as Meal;
}

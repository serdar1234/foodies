import fs from "node:fs";
import { Meal } from "@/components/meals/meal-item";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals(): Promise<Meal[]> {
  await new Promise<void>((resolve) => setTimeout(resolve, 1000));

  // if (Math.random() > 0.5) {
  //   throw new Error("db error for meals");
  // }

  return db.prepare("SELECT * FROM meals").all() as unknown as Meal[];
}

export function getMeal(slug: string): Meal {
  return db
    .prepare("SELECT * FROM meals WHERE slug = ?")
    .get(slug) as unknown as Meal;
}

export async function saveMeal(meal: Meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.summary = xss(meal.summary);
  meal.instructions = xss(meal.instructions);

  const extension = (meal.image as unknown as File).name.split(".").pop();
  const filename = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${filename}`);
  const bufferedImage = await (meal.image as unknown as File).arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed");
    }
  });

  meal.image = `/images/${filename}`;

  db.prepare(
    `INSERT INTO meals 
    (slug, title, image, summary, instructions, creator, creator_email)
    VALUES (
      @slug, @title, @image, @summary, @instructions, @creator, @creator_email
      )`
  ).run(meal);
}

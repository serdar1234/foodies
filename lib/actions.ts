"use server";

import { Meal } from "@/components/meals/meal-item";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function shareMeal(formData: FormData): Promise<void> {
  const meal: Meal = {
    title: formData.get("title") as string,
    slug: formData.get("slug") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image"),
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  };

  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}

import Image from "next/image";
import { notFound } from "next/navigation";

import { getMeal } from "@/lib/meals";
import style from "./style.module.scss";

type SlugParams = {
  readonly params: {
    [key: string]: string;
  };
};

export async function generateMetadata({ params }: SlugParams) {
  const meal = await getMeal(params.slug);
  if (!meal) {
    notFound();
  }
  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default async function MealDetailsPage({ params }: SlugParams) {
  const meal = await getMeal(params.slug);
  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replaceAll("\n", "<br />");

  return (
    <>
      <header className={style.header}>
        <div className={style.image}>
          <Image src={meal.image as string} alt={meal.title} fill />
        </div>
        <div className={style.headerText}>
          <h1>{meal.title}</h1>
          <p className={style.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={style.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={style.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}

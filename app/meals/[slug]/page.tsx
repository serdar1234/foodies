import { getMeal } from "@/lib/meals";
import style from "./style.module.scss";
import Image from "next/image";

type SlugParams = {
  readonly params: {
    [key: string]: string;
  };
};

export default async function Slug({ params }: SlugParams) {
  const meal = await getMeal(params.slug);
  meal.instructions = meal.instructions.replaceAll("\n", "<br />");

  return (
    <>
      <header className={style.header}>
        <div className={style.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={style.headerText}>
          <h1>{meal.title}</h1>
          <p className={style.creator}>
            by <a href={`mailto:${meal.creator__email}`}>{meal.creator}</a>
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

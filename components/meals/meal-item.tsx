import Link from "next/link";
import Image from "next/image";

import classes from "./meal-item.module.scss";

export type Meal = {
  creator_email: string;
  title: string;
  slug: string;
  image: FormDataEntryValue | null;
  summary: string;
  instructions: string;
  creator: string;
};

export default function MealItem({
  title,
  slug,
  image,
  summary,
  creator,
}: Meal) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image as string} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}

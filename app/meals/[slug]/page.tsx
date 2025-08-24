import Link from "next/link";
import style from "./style.module.scss";

type SlugParams = {
  readonly params: {
    [key: string]: string;
  };
};

export default function Slug({ params }: SlugParams) {
  return (
    <main>
      <h1>{params.slug}</h1>
      <Link href="/" className={style.asd}>
        Home page
      </Link>
    </main>
  );
}

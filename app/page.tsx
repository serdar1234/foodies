import Link from "next/link";
import classes from "./page.module.scss";
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes["slideshow"]}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Super food for super foodies</h1>
            <p>Taste and share snacks from all over the world</p>
          </div>
          <div className={classes.cta}>
            <Link href="./community">Join Community</Link>
            <Link href="./meals">Check out the meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>Time to get started!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            esse, distinctio fugit debitis necessitatibus nostrum similique nisi
            reprehenderit odit dolores perspiciatis fuga consequuntur nesciunt.
            Vitae eius dolore saepe officia enim.
          </p>
        </section>
      </main>
    </>
  );
}

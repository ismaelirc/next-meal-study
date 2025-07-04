import ImageSlideshow from "@/components/images/image-slideshow";
import Link from "next/link";
import classes from "./page.module.css";

export default function Home() {
  return (
    <>
    <header className={classes.header}>
      <div className={classes.slideshow}>
        <ImageSlideshow />
      </div>
      <div>
        <div className={classes.hero}>
          <h1>NextLevel Food</h1>
          <p>Taste and share food from all over the world by everyone!</p>
        </div>
        <div className={classes.cta}>
          <Link href="/comunity" className={classes.button}>Join the community</Link>
          <Link href="/meals" className={classes.button}>Explore Meals</Link>
        </div>
      </div>
    </header>
    <main>
    <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
    </main>
    </>
  );
}

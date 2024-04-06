import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h1>Hi, I'm Kelvin.</h1>
        <h1>Software Developer.</h1>
      </div>
      <div className={styles.subTitle}>
        <p>— changing the world, one line of code at a time.</p>
      </div>
    </section>
  );
}
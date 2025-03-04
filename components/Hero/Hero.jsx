import React from 'react';
import styles from "./Hero.module.css";
import heroImage from "/src/assets/hero/heroimage.png"; // Ensure this file exists

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Bhuvana</h1>
        <p className={styles.description}>
          I'm a full-stack developer using React and Node.js. Open to exciting opportunities where I can contribute and grow!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact me
        </a>
      </div>
      <img src={heroImage} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

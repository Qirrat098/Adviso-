import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>Leave the Tax Worries to Us.</h1>
      <p className={styles.subtext}>
        Stress-free tax solutions that save you time, maximize your returns
        <br />
        and eliminate the hassle.
      </p>
      <button className={styles.ctaButton}>Let's simplify your taxes!</button>

      {/* Stars and Text */}
      <div className={styles.reviews}>
  
  <div className={styles.profiles}>
    <img src="images/c1.png" alt="Profile 1" className={styles.profile} />
    <img src="images/c2.png" alt="Profile 2" className={styles.profile} />
    <img src="images/c3.png" alt="Profile 3" className={styles.profile} />
    <img src="images/c4.png" alt="Profile 4" className={styles.profile} />
  </div>
  <div className={styles.stars}>
    {'★'.repeat(5)} {/* Render 5 stars */}
  </div>
  <p className={styles.reviewsText}>150 happy customers</p>
</div>

      <div className={styles.images}>
        <img src="images/family.png" alt="Group" className={styles.image} />
        <img src="images/dbrd.png" alt="dashboard" className={styles.image} />
        <img src="images/laptop.png" alt="Laptop" className={styles.image} />
        <img src="images/updates.png" alt="Stats" className={styles.image} />
      </div>
    </section>
  );
};

export default Hero;
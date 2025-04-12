import React from 'react';
import styles from './Industries.module.css';

const Industries = () => {
  return (
    <section className={styles.industries}>
      <div className={styles.left}>
        <span className={styles.tag}>Industries</span>
        <h2>Helping All Businesses Thrive No Matter the Size or Industry.</h2>
        <p>
          Our goal is to serve everyone who needs help with their financial literacy.
        </p>
        <button className={styles.learnMore}>Learn more →</button>
      </div>
      <div className={styles.right}>
        <p>
          Adviso is here for businesses of all sizes, from individuals to large companies. No matter what industry you're in, we'll help you save money and stay stress-free with expert tax solutions.
        </p>
        <div className={styles.stats}>
          <div className={styles.statBox}>
            <h3>500+</h3>
            <p>Clients served</p>
          </div>
          <div className={styles.statBox}>
            <h3>$10M</h3>
            <p>Saved for our clients</p>
          </div>
          <div className={styles.statBox}>
            <h3>15+</h3>
            <p>Years of experience</p>
          </div>
          <div className={styles.statBox}>
            <h3>30</h3>
            <p>Financial experts</p>
          </div>
          <div className={styles.statBox}>
            <h3>98%</h3>
            <p>Client satisfaction</p>
          </div>
          <div className={styles.statBox}>
            <h3>500+</h3>
            <p>Increased savings</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
import React from 'react';
import styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
      <img src="images/adviso.png" alt="logo" className={styles.logo} />
      </div>
      <div className={styles.links}>
        <a href="#services">Services</a>
        <a href="#team">Team</a>
        <a href="#about">About</a>
        <a href="#pricing">Pricing</a>
      </div>
      <button className={styles.button}>Save the tab</button>
    </nav>
  );
};

export default Navbar;
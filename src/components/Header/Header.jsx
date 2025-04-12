import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
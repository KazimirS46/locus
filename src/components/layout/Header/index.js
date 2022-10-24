import React from 'react';
import styles from './index.module.css';

import logoSvg from '../../../assets/images/Locus-logo-min.svg';
import Button from './Button';

function Header() {
  return (
    <header className={styles.header} id="header">
      <h1 className={styles.mainTitle}>Locus interior store</h1>
      <div className="wrapper">
        <nav className={styles.navbar}>
          <a href="#header" className={styles.logoLink}>
            <img src={logoSvg} className={styles.logoImg} alt="Logo" />
            <h2 className={styles.logoTitle}>Locus</h2>
          </a>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#header" className={styles.navLink}>
                <span>Home</span>
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#header" className={styles.navLink}>
                <span>Contact</span>
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#header" className={styles.navLink}>
                <span>Location</span>
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#header" className={styles.navLink}>
                <span>About Us</span>
              </a>
            </li>
          </ul>
          <Button title="Sign Up" />
        </nav>
      </div>
    </header>
  );
}

export default Header;

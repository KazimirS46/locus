import React from 'react';
import styles from './index.module.css';

import logoSvg from '../../../assets/images/Locus-logo-min.svg';

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
                Home
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#header" className={styles.navLink}>
                Contact
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#header" className={styles.navLink}>
                Location
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#header" className={styles.navLink}>
                About Us
              </a>
            </li>
          </ul>
          <button className="button nav-button"></button>
        </nav>
      </div>
    </header>
  );
}

export default Header;

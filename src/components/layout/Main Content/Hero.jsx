import React from 'react';
import styles from './hero.module.css';
import Button from './../Button';
import img from './../../../assets/images/png/hero-background-image.png';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className="wrapper">
        <div className={styles.Content}>
          <div className={styles.infoContent}>
            <h2 className="title">
              Get the inspiration of interior design here
            </h2>
            <p className="description">
              architecture not only about engineering, it even lands to art and
              aesthetics. With us, you will get a residentical design with an
              extraordinary touch of art.
            </p>
            <Button title="Let’s go" />
          </div>
          <img
            src={img}
            className={styles.img}
            alt="interior"
            width="833"
            height="782"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

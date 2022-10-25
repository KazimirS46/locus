import React from 'react';
import styles from './presentation.module.css';

import exampleImage from './../../../assets/images/png/example-image.png';

function Presentation() {
  return (
    <section className={styles.presentation}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>How it works</h2>
        <p className={styles.description}>
          Spice up your space even simpler than you think
        </p>
        <div className={styles.video}>
          <div className={styles.container}>
            <div className={styles.annotation}>
              <p className={styles.annotationText}>
                We provide design and build for commercial building, interior
                and furniture to improve the better life.
              </p>
              <div className={styles.videoContainer}>
                <input type="button" id="playVideo" className={styles.button} />
                <label className={styles.buttonName} for="playVideo">
                  S E E V I D E O
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.advantage}>
          <img
            className={styles.exampleImage}
            src={exampleImage}
            alt="example"
            width="642px"
            height="650px"
          />
          <div>
            <h3 className={styles.subtitle}>
              Our mission is to deliver aesthetic visual for your home
            </h3>
            <p className={styles.advantageText}>
              By applying bacis psychology principles, we are going to explain
              how perception works and how we can use this understanding to
              maximise the space that we occupy in our homes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Presentation;

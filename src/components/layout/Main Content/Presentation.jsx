import React from 'react';
import styles from './presentation.module.css';

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
      </div>
    </section>
  );
}

export default Presentation;

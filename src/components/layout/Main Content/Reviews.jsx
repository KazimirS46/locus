import React from 'react';
import styles from './reviews.module.css';
import klamby from './../../../assets/images/klamby-logo.svg';
import mayoutfit from './../../../assets/images/mayoutfit-logo.svg';
import zalora from './../../../assets/images/zalora-logo.svg';
import geulislogo from './../../../assets/images/geulis-logo.svg';
import reviewPhoto from './../../../assets/images/jpg/review-photo-1.jpg';

function Reviews() {
  return (
    <section className={styles.reviews}>
      <div className="wrapper">
        <h2 className={`title`}>Testimonial</h2>
        <ul className={styles.sponsors}>
          <li className={styles.sponsorsItem}>
            <a href="!#">
              <img src={klamby} className={styles.logo} alt="Klamby" />
            </a>
          </li>
          <li className={styles.sponsorsItem}>
            <a href="!#">
              <img src={mayoutfit} className={styles.logo} alt="May outfit" />
            </a>
          </li>
          <li className={styles.sponsorsItem}>
            <a href="!#">
              <img src={zalora} className={styles.logo} alt="ZALORA" />
            </a>
          </li>
          <li className={styles.sponsorsItem}>
            <a href="!#">
              <img src={geulislogo} className={styles.logo} alt="Geulis" />
            </a>
          </li>
        </ul>
        <div className={styles.reviewsContent}>
          <div className={styles.photoContainer}>
            <img src={reviewPhoto} className={styles.photo} alt="review" />
          </div>
          <div className={styles.reviewsContainer}>
            <ul className={styles.companyInfo}>
              <li className={styles.numberOfProjects}>
                <span>105</span>
                <p>project done</p>
              </li>
              <li className={styles.workingHours}>
                <span>12</span>
                <p>years of experience</p>
              </li>
              <li className={styles.numberOfLargeOrders}>
                <span>10+</span>
                <p>big company partnership</p>
              </li>
            </ul>
            <figure className={styles.review}>
              <blockquote>
                "Not able to tell you how happy I am with interior design.
                Interior design has completely surpassed our expectations.
                Interior design saved my business. Interior design is worth much
                more than I paid."
              </blockquote>
              <figcaption>- Roscoe</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;

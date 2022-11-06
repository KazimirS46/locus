import React from 'react';
import Button from './../Button';
import styles from './contacts.module.css';

function Contacts() {
  return (
    <section className={`wrapper ${styles.contacts}`}>
      <div className={styles.header}>
        <h2 className={`title ${styles.title}`}>Contact Us</h2>
        <p className={`description ${styles.description}`}>
          Have any questions? Want help before getting started?
        </p>
      </div>
      <form className={styles.form}>
        <input
          className={styles.nameField}
          type="text"
          placeholder="Full name"
        />
        <input
          className={styles.emailField}
          type="email"
          placeholder="Email address"
        />
        <p className={styles.question}>Description</p>
        <Button title="Send now" />
      </form>
    </section>
  );
}

export default Contacts;

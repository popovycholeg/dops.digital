import React from "react";
import styles from './styles.module.css';

const InfoSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <p className={`big-text ${styles.bigText}`}>How much does animation cost to make?</p>
      <p className={`small-text ${styles.smallText} ${styles.textContainer1}`}>How much is a video with us going to cost? Fill in the details below for an instant cost estimate.</p>
      <p className={`small-text ${styles.smallText} ${styles.textContainer2}`}>This estimate should be viewed as a rough guide only, as many factors specific to your project can affect the final cost. Get in touch to discuss your specific requirements.</p>
    </section>
  );
}

export default InfoSection;
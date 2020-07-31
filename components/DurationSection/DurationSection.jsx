import React from "react";

import styles from "./styles.module.css";
import Dot from "../Dot/Dot";
import RadioButton from "../RadioButton/RadioButton";

const DurationSection = () => {
  return (
    <section className={styles.container}>
      <Dot number={3} />
      <p className={`medium-text ${styles.marginTop}`}>Duration</p>
      <p className={`small-text ${styles.textContainer1} ${styles.marginTop}`}>
        Find a time that suits your animation idea.
      </p>
      
    </section>
  );
};

export default DurationSection;

import React from "react";

import styles from "./styles.module.css";
import Dot from "../Dot/Dot";

const TimeFrame = () => {
  return (
    <section className={styles.container}>
      <Dot number={4} />
      <p className={`medium-text ${styles.marginTop}`}>TimeFrame</p>
      <p className={`small-text ${styles.textContainer1} ${styles.marginTop}`}>
        Do you have a particular time frame in mind?
      </p>
      
    </section>
  );
};

export default TimeFrame;

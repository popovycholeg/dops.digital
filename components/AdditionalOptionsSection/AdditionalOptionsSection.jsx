import React from "react";

import styles from "./styles.module.css";
import Dot from "../Dot/Dot";

const AdditionalOptionsSection = () => {
  return (
    <section className={styles.container}>
      <Dot number={6} />
      <p className={`medium-text ${styles.marginTop}`}>Additional Options</p>
      <p className={`small-text ${styles.textContainer1} ${styles.marginTop}`}>
        Choose Additional Options
      </p>
      
    </section>
  );
};

export default AdditionalOptionsSection;

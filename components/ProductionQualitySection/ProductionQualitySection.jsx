import React from "react";

import styles from "./styles.module.css";
import Dot from "../Dot/Dot";
import RadioButton from "../RadioButton/RadioButton";

const ProductionQualitySection = () => {
  return (
    <section className={styles.container}>
      <Dot number={5} />
      <p className={`medium-text ${styles.marginTop}`}>Production Quality</p>
      <p className={`small-text ${styles.textContainer1} ${styles.marginTop}`}>
        Choose Quality
      </p>
      
    </section>
  );
};

export default ProductionQualitySection;

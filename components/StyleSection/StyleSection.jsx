import React from "react";

import styles from "./styles.module.css";
import Dot from "../Dot/Dot";
import RadioButton from "../RadioButton/RadioButton";
import buttonsData from "./buttonsData.json";

const MediumSection = () => {
  return (
    <section className={styles.container}>
      <Dot number={2} />
      <p className={`medium-text ${styles.marginTop}`}>Choose the medium</p>
      <p className={`small-text ${styles.textContainer1} ${styles.marginTop}`}>
        Find out the difference in our examples by hovering the cursor.
      </p>

      <div className={styles.buttonsContainer}>
        {buttonsData.map((button, index) => (
          <RadioButton
            text={button.title}
            number={index + 1 + ".0"}
            key={index}
          />
        ))}
        <RadioButton text='2D Animation' number='1.0' isActive={true} />
      </div>
    </section>
  );
};

export default MediumSection;

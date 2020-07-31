import React, {useState} from "react";

import styles from "./styles.module.css";
import Dot from "../Dot/Dot";
import RadioButton from "../RadioButton/RadioButton";
import buttonsData from "./buttonsData.json";

const MediumSection = () => {
  const [activeId, setActiveId] = useState(-1);
  const handleClick = (index) => {
    setActiveId(index);
  }

  return (
    <section className={styles.container}>
      <Dot number={1} />
      <p className={`medium-text ${styles.marginTop}`}>Choose the medium</p>
      <p className={`small-text ${styles.textContainer1} ${styles.marginTop}`}>
        Find out the difference in our examples by hovering the cursor.
      </p>

      <div className={styles.buttonsContainer}>
        {buttonsData.map((button, index) => (
          <RadioButton
            text={button.title}
            number={index}
            key={index}
            isActive={index === activeId}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default MediumSection;

import React, {useState} from "react";

import styles from "./styles.module.css";
import Dot from "../Dot/Dot";
import RadioButton from "../RadioButton/RadioButton";
import buttonsData from "./buttonsData.json";

const StyleSection = () => {
  const [activeId, setActiveId] = useState(-1);
  const handleClick = (index) => {
    setActiveId(index);
  }

  return (
    <section className={styles.container}>
      <Dot number={2} />
      <p className={`medium-text ${styles.marginTop}`}>Choose the style</p>
      <p className={`small-text ${styles.textContainer1} ${styles.marginTop}`}>
        How does the price change? Some styles take more time to produce = higher price.
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

export default StyleSection;

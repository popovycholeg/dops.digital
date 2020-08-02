import React, {useState} from "react";

import styles from "./styles.module.css";
import Dot from "../Dot/Dot";
import QualityRadio from "../QualityRadio/QualityRadio";

const BUTTONS = [
  { title: "Acceptable Quality", imagePath: "/apple.svg" },
  { title: "Acceptable Quality", imagePath: "/cherries.svg" },
  { title: "Premium Quality", imagePath: "/soft--ice--cream.svg" },
];

const ProductionQualitySection = () => {
  const [activeId, setActiveId] = useState(-1);

  return (
    <section className={styles.container}>
      <Dot number={5} />
      <p className={`medium-text ${styles.marginTop}`}>Production Quality</p>
      <p className={`small-text ${styles.textContainer1} ${styles.marginTop}`}>
        Choose Quality
      </p>
      <div className={styles.buttonsContainer}>
        {BUTTONS.map(({ title, imagePath }, index) => (
          <QualityRadio
            title={title}
            imagePath={imagePath}
            key={index}
            isActive={index === activeId}
            onClick={() => setActiveId(index)}
          />
        ))}
        {/* <QualityRadio title='Acceptable Quality' imagePath='/apple.svg' />
        <QualityRadio title='Appropriate Quality' imagePath='/cherries.svg' />
        <QualityRadio title='Appropriate Quality' imagePath='/soft--ice--cream.svg'/> */}
      </div>
    </section>
  );
};

export default ProductionQualitySection;

import React, { useState } from "react";
import { connect } from "react-redux";

import styles from "./styles.module.css";
import Dot from "../Dot/Dot";
import RadioButton from "../RadioButton/RadioButton";
import buttonsData from "./buttonsData.json";
import { setAdditionalOptionsPrice } from "../../redux/slices/priceSlice";

const AdditionalOptionsSection = ({setAdditionalOptionsPrice}) => {
  const [activeId, setActiveId] = useState(-1);
  const handleClick = (index, price) => {
    setActiveId(index);
    setAdditionalOptionsPrice(price);
  };

  return (
    <section className={styles.container}>
      <Dot number={6} />
      <p className={`medium-text ${styles.marginTop}`}>Additional Options</p>
      <p className={`small-text ${styles.textContainer1} ${styles.marginTop}`}>
        Choose Additional Options
      </p>
      <div className={styles.buttonsContainer}>
      {buttonsData.map(({ title, path, price }, index) => (
          <RadioButton
            text={title}
            number={index}
            key={index}
            isActive={index === activeId}
            imgPath={path}
            onClick={() => handleClick(index, price)}
          />
        ))}
      </div>
    </section>
  );
};

const mapDispatchToProps = { setAdditionalOptionsPrice };
export default connect(null, mapDispatchToProps)(AdditionalOptionsSection);
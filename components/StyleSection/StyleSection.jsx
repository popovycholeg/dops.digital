import React, { useState } from "react";
import { connect } from "react-redux";

import styles from "./styles.module.css";
import Dot from "../Dot/Dot";
import RadioButton from "../RadioButton/RadioButton";
import buttonsData from "./buttonsData.json";
import { setStyleSectionPrice } from "../../redux/slices/priceSlice";

const StyleSection = (props) => {
  const [activeId, setActiveId] = useState(-1);
  const handleClick = (index, price) => {
    setActiveId(index);
    props.setStyleSectionPrice(price);
  };

  return (
    <section className={styles.container}>
      <Dot number={2} />
      <p className={`medium-text ${styles.marginTop}`}>Choose the style</p>
      <p className={`small-text ${styles.textContainer1} ${styles.marginTop}`}>
        How does the price change? Some styles take more time to produce =
        higher price.
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

const mapDispatchToProps = { setStyleSectionPrice };
export default connect(null, mapDispatchToProps)(StyleSection);

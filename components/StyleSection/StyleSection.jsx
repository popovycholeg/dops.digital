import React, { useState } from "react";
import { connect } from "react-redux";

import styles from "./styles.module.css";
import Dot from "../Common/Dot/Dot";
import RadioButton from "../Common/RadioButton/RadioButton";
import buttonsData from "./buttonsData.json";
import SectionDescription from "../SectionDescription/SectionDescription";
import { updatePrice } from "../../redux/slices/priceSlice";

const StyleSection = (props) => {
  const [activeId, setActiveId] = useState(-1);
  const handleClick = (index, price) => {
    setActiveId(index);
    props.updatePrice({ styleSectionPrice: price });
  };

  return (
    <section className={styles.container}>
      <Dot number={2} />
      <SectionDescription
        title='Choose the style'
        description='How does the price change? Some styles take more time to produce =
        higher price.'
      />

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

const mapDispatchToProps = { updatePrice };
export default connect(null, mapDispatchToProps)(StyleSection);

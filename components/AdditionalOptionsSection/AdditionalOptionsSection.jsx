import React, { useState } from "react";
import { connect } from "react-redux";

import styles from "./styles.module.css";
import Dot from "../Common/Dot/Dot";
import RadioButton from "../Common/RadioButton/RadioButton";
import buttonsData from "./buttonsData.json";
import SectionDescription from "../SectionDescription/SectionDescription";
import { updatePrice } from "../../redux/slices/priceSlice";

const AdditionalOptionsSection = ({ updatePrice }) => {
  const [activeId, setActiveId] = useState(-1);
  const handleClick = (index, price) => {
    setActiveId(index);
    updatePrice({ additionalOptionsPrice: price });
  };

  return (
    <section className={styles.container}>
      <Dot number={6} />
      <SectionDescription
        title='Additional Options'
        description='Choose Additional Options'
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
export default connect(null, mapDispatchToProps)(AdditionalOptionsSection);

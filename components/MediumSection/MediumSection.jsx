import React, { useState } from "react";
import { connect } from "react-redux";

import styles from "./styles.module.css";
import Dot from "../Dot/Dot";
import RadioButton from "../RadioButton/RadioButton";
import buttonsData from "./buttonsData.json";
import SectionDescription from "../SectionDescription/SectionDescription";
import { updatePrice } from "../../redux/slices/priceSlice";

const MediumSection = (props) => {
  const [activeId, setActiveId] = useState(-1);
  const handleClick = (index, price) => {
    setActiveId(index);
    props.updatePrice({ mediumSectionPrice: price });
  };

  return (
    <section className={styles.container}>
      <Dot number={1} />
      <SectionDescription
        title='Choose the medium'
        description='Find out the difference in our examples by hovering the cursor.'
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
      <p>{props.mediumReducer}</p>
    </section>
  );
};

const mapDispatchToProps = { updatePrice };
export default connect(null, mapDispatchToProps)(MediumSection);

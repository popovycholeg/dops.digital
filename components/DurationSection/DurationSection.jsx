import React from "react";
import { connect } from "react-redux";

import styles from "./styles.module.css";
import Dot from "../Dot/Dot";
import StepRange from "../StepRange/StepRange";
import marks from "./marks.json";
import SectionDescription from "../SectionDescription/SectionDescription";
import { setDurationSectionPrice } from "../../redux/slices/priceSlice";

const DurationSection = ({ setDurationSectionPrice }) => {
  const handleChange = (event, newValue) => {
    setDurationSectionPrice(newValue);
  };

  return (
    <section className={styles.container}>
      <Dot number={3} />
      <SectionDescription
        title='Duration'
        description='Find a time that suits your animation idea.'
      />
      <StepRange
        aria-label='slider'
        defaultValue={20}
        step={5}
        marks={marks}
        valueLabelDisplay='off'
        min={5}
        max={40}
        onChange={handleChange}
      />
    </section>
  );
};

const mapDispatchToProps = { setDurationSectionPrice };
export default connect(null, mapDispatchToProps)(DurationSection);

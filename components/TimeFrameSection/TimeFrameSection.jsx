import React from "react";
import { connect } from "react-redux";

import styles from "./styles.module.css";
import Dot from "../Dot/Dot";
import StepRange from "../StepRange/StepRange";
import marks from "./marks.json";
import SectionDescription from "../SectionDescription/SectionDescription";
import { setTimeFrameSectionPrice } from "../../redux/slices/priceSlice";

const TimeFrame = ({ setTimeFrameSectionPrice }) => {
  const handleChange = (event, newValue) => {
    setTimeFrameSectionPrice(newValue);
  };

  return (
    <section className={styles.container}>
      <Dot number={4} />
      <SectionDescription
        title='TimeFrame'
        description='Do you have a particular time frame in mind?'
      />
      <StepRange
        aria-label='slider'
        defaultValue={20}
        step={10}
        marks={marks}
        valueLabelDisplay='off'
        min={10}
        max={50}
        onChange={handleChange}
      />
    </section>
  );
};

const mapDispatchToProps = { setTimeFrameSectionPrice };
export default connect(null, mapDispatchToProps)(TimeFrame);

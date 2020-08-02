import React, { useState } from "react";
import PropTypes from "prop-types";
import Slider from "@material-ui/core/Slider";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import styles from "./styles.module.css";

const CustomSlider = withStyles({
  root: {
    color: "red",
    height: 2,
    padding: "15px 0",
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: "red",
    marginTop: -14,
    marginLeft: -14,
    "&:focus, &:hover, &$active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      "@media (hover: none)": {
        boxShadow: "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)",
      },
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 12px)",
    top: -22,
    "& *": {
      background: "transparent",
      color: "#fff",
    },
  },
  track: {
    height: 0,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: "#494949",
  },
  mark: {
    backgroundColor: "#494949",
    height: 16,
    width: 1,
    marginTop: -7,
  },
  markActive: {
    opacity: 1,
    backgroundColor: "#494949",
  },
  markLabel: {
    color: "#fff"
  }
})(Slider);

const StepRange = () => {
  const marks = [
    {
      value: 5,
      label: '5'
    },
    {
      value: 10,
      label: '10'
    },
    {
      value: 15,
      label: '15'
    },
    {
      value: 20,
      label: '20'
    },
    {
      value: 25,
      label: '25'
    },
    {
      value: 30,
      label: '30'
    },
    {
      value: 35,
      label: '35'
    },
    {
      value: 40,
      label: '40'
    },
  ];
  return (
    <div className={styles.container}>
      <CustomSlider
        aria-label='slider'
        defaultValue={0}
        step={5}
        marks={marks}
        valueLabelDisplay='off'
        min={5}
        max={40}
      />
    </div>
  );
};

export default StepRange;

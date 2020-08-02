import React, { useState } from "react";
import PropTypes from "prop-types";
import Slider from "@material-ui/core/Slider";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import { styles } from './styles';

const CustomSlider = withStyles(styles)(Slider);

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
      <CustomSlider
        aria-label='slider'
        defaultValue={0}
        step={5}
        marks={marks}
        valueLabelDisplay='off'
        min={5}
        max={40}
      />
  );
};

export default StepRange;

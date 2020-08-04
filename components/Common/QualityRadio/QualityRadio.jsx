import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import styles from "./styles.module.css";

const QualityRadio = ({ title, isActive = false, imagePath, onClick }) => {

  return (
    <div className={styles.container} onClick={onClick}>
      <img src={imagePath} alt='Apple' className={styles.fruitImg} />

      <div className={styles.flexRow}>
        {isActive ? (
          <div className={styles.outerCircle}>
            <div className={styles.innerCircle}>&nbsp;</div>
          </div>
        ) : (
          <div className={styles.circle}></div>
        )}
        <p className={`small-text`}>{title}</p>
      </div>
    </div>
  );
};

QualityRadio.propTypes = {
  title: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default QualityRadio;

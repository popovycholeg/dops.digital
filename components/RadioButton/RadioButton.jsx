import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import styles from "./styles.module.css";

const RadioButton = ({ number, text, isActive = false }) => {
  return (
    <div
      className={cn({
        [styles.container]: true,
        [styles.active]: isActive,
      })}
    >
      <div className={styles.textContainer}>
        <p className={`small-text ${styles.version}`}>{number}</p>
        <p className={`medium-text`}>{text}</p>
      </div>
      {isActive ? (
        <div className={styles.outerCircle}>
          <div className={styles.innerCircle}>&nbsp;</div>
        </div>
      ) : (
        <div className={styles.circle}></div>
      )}
    </div>
  );
};

RadioButton.propTypes = {
  text: PropTypes.string,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default RadioButton;

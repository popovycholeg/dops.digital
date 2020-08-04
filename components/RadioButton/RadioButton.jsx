import React, {useState} from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import styles from "./styles.module.css";

const RadioButton = ({ number, text, isActive = false, imgPath = null, onClick }) => {
  const [isHover, setHover] = useState(false);

  return (
    <div
      className={cn({
        [styles.container]: true,
        [styles.active]: isActive,
      })}
      onClick={onClick}
    >
      <div className={styles.textContainer}>
        <p className={`small-text ${styles.version}`}>{(number + 1) + ".0"}</p>
        <p className={`medium-text`}>{text}</p>
      </div>
      {isActive ? (
        <div className={styles.outerCircle}>
          <div className={styles.innerCircle}>&nbsp;</div>
        </div>
      ) : (
        <div className={styles.circle}></div>
      )}
      {imgPath && <img src="/image.png" alt="img" className={styles.image} />}
    </div>
  );
};

RadioButton.propTypes = {
  text: PropTypes.string,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func
};

export default RadioButton;

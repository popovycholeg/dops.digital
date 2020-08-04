import React from "react";
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Dot = ({number}) => {
  return (
    <div className={styles.dot}>
      {number}
    </div>
  );
}

Dot.propTypes = {
  number: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};

export default Dot;
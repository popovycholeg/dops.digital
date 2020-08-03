import React, { useState } from "react";

import styles from "./styles.module.css";

const SectionDescription = ({ title, description }) => {
  return (
    <>
      <p className={`medium-text ${styles.marginTop}`}>{title}</p>
      <p className={`small-text ${styles.text} ${styles.marginTop}`}>
        {description}
      </p>
    </>
  );
};

export default SectionDescription;

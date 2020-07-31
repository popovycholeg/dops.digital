import React from "react";
import styles from './styles.module.css';

import Dot from '../Dot/Dot';
import RadioButton from '../RadioButton/RadioButton';

const MediumSection = () => {
  return (
    <div className={styles.container}>
      <Dot number={1} />
      <p className={`medium-text ${styles.marginTop}`}>Choose the medium</p>
      <p className={`small-text ${styles.textContainer1} ${styles.marginTop}`}>Find out the difference in our examples by hovering the cursor.</p>
      
      <RadioButton text='2D Animation' number='1.0' isActive={true}/>
      <RadioButton text='2D Animation' number='1.0'/>
    </div>
  );
}

export default MediumSection;
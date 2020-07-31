import React from "react";
import styles from './styles.module.css';

const EstimatedCost = () => {
  return (
    <div className={styles.container}>
      <p className={`small-text ${styles.text1}`} >Estimated Cost</p>
      <p className={styles.price}>$19.350</p>
      <div className={styles.horizontalLine}></div>
      <input type="text" className={styles.emailInput} placeholder="E-mail" />
      <button className={styles.submitBtn}>Submit</button>
    </div>
  );
}

export default EstimatedCost;
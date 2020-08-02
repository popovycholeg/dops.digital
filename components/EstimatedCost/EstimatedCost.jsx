import React from "react";
import { connect } from "react-redux";

import styles from "./styles.module.css";
import TimeLine from '../TimeLine/TimeLine';

const EstimatedCost = ({ priceReducer }) => {
  const {mediumSectionPrice, styleSectionPrice, productionQualityPrice, additionalOptionsPrice} = priceReducer;
  const price = mediumSectionPrice + styleSectionPrice + productionQualityPrice + additionalOptionsPrice;
  return (
    <div className={styles.container}>
      <p className={`small-text ${styles.text1}`}>Estimated Cost</p>
      <p className={styles.price}>${price}</p>
      <div className={styles.horizontalLine}></div>
      <TimeLine />
      <input type='text' className={styles.emailInput} placeholder='E-mail' />
      <button className={styles.submitBtn}>Submit</button>
    </div>
  );
};

const mapStateToProps = (state) => ({ priceReducer: state.priceReducer });
export default connect(mapStateToProps)(EstimatedCost);

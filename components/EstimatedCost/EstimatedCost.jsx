import React from "react";
import { connect } from "react-redux";

import styles from "./styles.module.css";
import TimeLine from "../TimeLine/TimeLine";

const EstimatedCost = ({ priceReducer }) => {
  const {
    mediumSectionPrice,
    styleSectionPrice,
    productionQualityPrice,
    additionalOptionsPrice,
    durationSectionPrice,
    timeFrameSectionPrice,
  } = priceReducer;

  const price =
    mediumSectionPrice +
    styleSectionPrice +
    productionQualityPrice +
    additionalOptionsPrice +
    durationSectionPrice +
    timeFrameSectionPrice;

  const disabled =
    mediumSectionPrice == 0 ||
    styleSectionPrice === 0 ||
    productionQualityPrice === 0 ||
    additionalOptionsPrice === 0 ||
    durationSectionPrice === 0 ||
    timeFrameSectionPrice === 0;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    // const text = await res.text();
    // handleResponse(res.status, text);
  };

  return (
    <div className={styles.container}>
      <p className={`small-text ${styles.text1}`}>Estimated Cost</p>
      <p className={styles.price}>${price}</p>
      <div className={styles.horizontalLine}></div>
      <TimeLine />
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type='text' className={styles.emailInput} placeholder='E-mail' required />
        <button className={styles.submitBtn} disabled={disabled} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({ priceReducer: state.priceReducer });
export default connect(mapStateToProps)(EstimatedCost);

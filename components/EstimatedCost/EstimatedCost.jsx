import React, { useState } from "react";
import { connect } from "react-redux";
import { sendMail } from "../../utils/sendMail";

import styles from "./styles.module.css";
import TimeLine from "../Common/TimeLine/TimeLine";

const EstimatedCost = ({ priceReducer }) => {
  const [email, setEmail] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      send_to: email,
      from_name: "Dops test",
      message_html: `Approximate cost of animation - ${price}$`,
    };

    sendMail(templateParams)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        window.location.reload();
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <div className={styles.container}>
      <p className={`small-text ${styles.label}`}>Estimated Cost</p>
      <p className={styles.price}>${price}</p>
      <div className={styles.horizontalLine}></div>
      <TimeLine />
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='email'
          className={styles.emailInput}
          placeholder='E-mail'
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <button className={styles.submitBtn} disabled={disabled} type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({ priceReducer: state.priceReducer });
export default connect(mapStateToProps)(EstimatedCost);

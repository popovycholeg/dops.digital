import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { connect } from "react-redux";

import styles from "./styles.module.css";

const TimeLine = ({ priceReducer }) => {
  const [scrolled, setScrolled] = useState(0);
  const {
    mediumSectionPrice,
    styleSectionPrice,
    productionQualityPrice,
    additionalOptionsPrice,
    durationSectionPrice,
    timeFrameSectionPrice
  } = priceReducer;

  const progressBarStyle = {
    height: "3px",
    background: "#674BB1",
    width: scrolled,
  };

  const scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;

    setScrolled(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);

    return () => {
      window.removeEventListener("scroll", scrollProgress);
    };
  }, []);

  return (
    <div className={styles.timelineWrap}>
      <div className={styles.timeline}>
        <div className={styles.progressBar} style={progressBarStyle} />
      </div>
      <div
        className={cn({
          [styles.marker]: true,
          [styles.active]: mediumSectionPrice !== 0,
        })}
      ></div>
      <div
        className={cn({
          [styles.marker]: true,
          [styles.active]: styleSectionPrice !== 0,
        })}
        style={{ left: "20%" }}
      ></div>
      <div
        className={cn({
          [styles.marker]: true,
          [styles.active]: durationSectionPrice !== 0,
        })}
        style={{ left: "40%" }}
      ></div>
      <div
        className={cn({
          [styles.marker]: true,
          [styles.active]: timeFrameSectionPrice !== 0,
        })}
        style={{ left: "60%" }}
      ></div>
      <div
        className={cn({
          [styles.marker]: true,
          [styles.active]: productionQualityPrice !== 0,
        })}
        style={{ left: "80%" }}
      ></div>
      <div
        className={cn({
          [styles.marker]: true,
          [styles.active]: additionalOptionsPrice !== 0,
        })}
        style={{ left: "100%" }}
      ></div>
    </div>
  );
};

TimeLine.propTypes = {
  points: PropTypes.number,
};

const mapStateToProps = (state) => ({ priceReducer: state.priceReducer });
export default connect(mapStateToProps)(TimeLine);

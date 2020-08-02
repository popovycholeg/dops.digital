import React from "react";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.logoContainer}>
        <p className={styles.logo}>Logo</p>
        <p className={styles.toTop} onClick={() => window.scrollTo(0, 0)}>to top ^</p>
      </div>
      <div className={styles.horizontalLine}></div>
      <div className={styles.linksContainer}>
        <div className={styles.contentContainer}>
          <p className={`medium-text`}>Navigation</p>
          <div className={styles.links}>
            <a href='#' className={`small-text ${styles.link}`}>
              Works
            </a>
            <a href='#' className={`small-text ${styles.link}`}>
              About us
            </a>
            <a href='#' className={`small-text ${styles.link}`}>
              Services
            </a>
            <a href='#' className={`small-text ${styles.link}`}>
              Contacts
            </a>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <p className={`medium-text`}>Social Media</p>
          <div className={styles.links}>
            <a href='#' className={`small-text ${styles.link}`}>
              Instagram
            </a>
            <a href='#' className={`small-text ${styles.link}`}>
              LinkedIn
            </a>
            <a href='#' className={`small-text ${styles.link}`}>
              Facebook
            </a>
            <a href='#' className={`small-text ${styles.link}`}>
              Behance
            </a>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <p className={`medium-text`}>Contact us</p>
          <div className={styles.links}>
            <p className={`small-text ${styles.link}`}>
              55 New Montgomery, Suite 607
            </p>
            <p className={`small-text ${styles.link}`}>
              San Francisco, CA 94105
            </p>
            <p className={`small-text ${styles.link}`}>(800) 566-2340</p>
          </div>
        </div>
      </div>
      <div className={`${styles.horizontalLine} ${styles.marginBottom}`}></div>
      <div className={`${styles.logoContainer} ${styles.marginBottom}`}>
        <a
          href='#'
          className={`small-text ${styles.link} ${styles.marginLeft}`}
        >
          Privacy Policy
        </a>
        <a
          href='#'
          className={`small-text ${styles.link} ${styles.marginLeft}`}
        >
          Terms of Use
        </a>
        <a
          href='#'
          className={`small-text ${styles.link} ${styles.alignCenter}`}
        >
          Copyright © 2019
        </a>
        <div className={styles.dopsDigital}>
          <p className={`small-text ${styles.link} ${styles.marginRight}`}>created by  </p>
          <a
            href='#'
            className={`small-text ${styles.dopsDigital}`}
          >
            dops.digital
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

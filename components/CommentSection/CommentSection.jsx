import React, { useState } from "react";

import styles from "./styles.module.css";

const CommentSection = () => {
  const [lettersCount, setLettersCount] = useState(0);
  const handleChange = (event) => {
    setLettersCount(event.target.value.split(" ").length);
  };
  return (
    <section className={styles.container}>
      <p className={`small-text ${styles.label} ${styles.marginTop}`}>
        Leave comment
      </p>
      <textarea
        className={styles.textArea}
        placeholder='Paste your text to count words...'
        onChange={handleChange}
      ></textarea>
      <div className={styles.flexRow}>
        <div className={styles.wordsCounter}>{lettersCount}</div>
        <p className={`small-text ${styles.marginLeft}`}>Words</p>
      </div>
    </section>
  );
};
export default CommentSection;

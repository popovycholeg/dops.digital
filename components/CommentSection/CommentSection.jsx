import React, { useState } from "react";

import styles from "./styles.module.css";

const CommentSection = () => {
  const [lettersCount, setLettersCount] = useState(0);
  const countWords = (s) => {
    s = s.replace(/(^\s*)|(\s*$)/gi, "");
    s = s.replace(/[ ]{2,}/gi, " ");
    s = s.replace(/\n /, "\n");
    return s.split(" ").filter((str) => str != "").length;
  };

  const handleChange = (event) => {
    setLettersCount(countWords(event.target.value));
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
      <div className={styles.wordsCounter}>{lettersCount}</div>
    </section>
  );
};
export default CommentSection;

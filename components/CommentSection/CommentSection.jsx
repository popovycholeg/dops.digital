import React, {useState} from "react";

import styles from "./styles.module.css";
import Dot from "../Dot/Dot";

const CommentSection = () => {
  const [lettersCount, setLettersCount] = useState(0);
  const handleChange = (event) => {
    setLettersCount(event.target.value.split(' ').length);
  }
  return (
    <section className={styles.container}>
      <p className={`small-text ${styles.label} ${styles.marginTop}`}>Leave comment</p>
      <textarea className={styles.textArea} placeholder='Paste your text to count words...' onChange={handleChange}>
      </textarea>
      <div className={styles.wordsCounter}>{lettersCount}</div>
    </section>
  );
};

export default CommentSection;

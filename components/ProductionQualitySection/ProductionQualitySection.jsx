import React, {useState} from "react";
import { connect } from "react-redux";

import styles from "./styles.module.css";
import Dot from "../Dot/Dot";
import QualityRadio from "../QualityRadio/QualityRadio";
import { setProductionQualityPrice } from "../../redux/slices/priceSlice";

const BUTTONS = [
  { title: "Acceptable Quality", imagePath: "/apple.svg", price: 100.1 },
  { title: "Acceptable Quality", imagePath: "/cherries.svg", price: 100.3  },
  { title: "Premium Quality", imagePath: "/soft--ice--cream.svg", price: 150.5  }
];

const ProductionQualitySection = (props) => {
  const [activeId, setActiveId] = useState(-1);

  const handleClick = (index, price) => {
    setActiveId(index);
    props.setProductionQualityPrice(price)
  };

  return (
    <section className={styles.container}>
      <Dot number={5} />
      <p className={`medium-text ${styles.marginTop}`}>Production Quality</p>
      <p className={`small-text ${styles.textContainer1} ${styles.marginTop}`}>
        Choose Quality
      </p>
      <div className={styles.buttonsContainer}>
        {BUTTONS.map(({ title, imagePath, price }, index) => (
          <QualityRadio
            title={title}
            imagePath={imagePath}
            key={index}
            isActive={index === activeId}
            onClick={() => handleClick(index, price)}
          />
        ))}
      </div>
    </section>
  );
};

const mapDispatchToProps = { setProductionQualityPrice };
export default connect(null, mapDispatchToProps)(ProductionQualitySection);
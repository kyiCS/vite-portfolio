import React from "react";
import styles from "./InfoCard.module.css";

export const InfoCard = (props) => {
    return (
        <div className={styles.cardContainer}>
          <div className={styles.cardTitle}>
            <p>{props.subTitle}</p>
            <h2>{props.title}</h2>
          </div>
          <div className={styles.cardContent}>{props.content}</div>
        </div>
  );
}
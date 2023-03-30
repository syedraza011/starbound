import React from 'react'
import styles from "@/styles/Home.module.css";
import robStyles from "@/styles/robsStyles/Training.module.css";
import Train3 from '../../components/trainingGames/train3'

import Link from "next/link";

const Training3 = () => {
  return (
    <>
      <div className={robStyles.trainBox}>
        <h1 className={robStyles.trainHeadBox}>PRE-FIGHT TRAINING</h1>

        <div className={robStyles.trainingBox}>
          <h1>TRAINING PAGE 3</h1>
          < Train3 />
          <div className={robStyles.lowBar} >
            <button className={styles.btnStyle}>
              <Link href="/training2">{"PREV"}</Link>
            </button>
            <h2 className={styles.btnStyle} >PROGRESS = 66%</h2>
            <button className={styles.btnStyle}>
              <Link href="/training4">{"NEXT"}</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="main"></div>
    </>
  );
};
export default Training3;

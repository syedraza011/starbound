import React from 'react'
import styles from "@/styles/Home.module.css";
import robStyles from "@/styles/robsStyles/Training.module.css";
import Train1 from '../../components/trainingGames/train1'
import Link from "next/link";

const Training1 = () => {
  return (
    <>
      <div className={robStyles.trainBox}>
        <h1 className={robStyles.trainHeadBox}>PRE-FIGHT TRAINING</h1>
        <div className={robStyles.trainingBox}>
          <h1>TRAINING PAGE 1</h1>
          < Train1 />
          <div className={robStyles.lowBar} >
            <button className={styles.btnStyle}>
              <Link href="/training">{"PREV"}</Link>
            </button>
            <h2 className={styles.btnStyle} >PROGRESS = 0%</h2>
            <button className={styles.btnStyle}>
              <Link href="/training2">{"NEXT"}</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="main"></div>
    </>
  );
};
export default Training1;

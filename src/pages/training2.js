import React from 'react'
import styles from "@/styles/Home.module.css";
import robStyles from "@/styles/robsStyles/Training.module.css";
import Train2 from '../../components/trainingGames/train2'
import Link from "next/link";

const Training2 = () => {
  return (
    <>
      <div className={robStyles.trainBox}>
        <h1 className={robStyles.trainHeadBox}>PRE-FIGHT TRAINING</h1>

        <div className={robStyles.trainingBox}>
          <h1>TRAINING PAGE 2</h1>
          < Train2 />
          <div className={robStyles.lowBar} >
            <button className={styles.btnStyle}>
              <Link href="/training1">{"PREV"}</Link>
            </button>
            <h2 className={styles.btnStyle} >PROGRESS = 33%</h2>
            <button className={styles.btnStyle}>
              <Link href="/training3">{"NEXT"}</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="main"></div>
    </>
  );
};
export default Training2;

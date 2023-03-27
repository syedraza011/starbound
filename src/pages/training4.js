import styles from "@/styles/Home.module.css";
import robStyles from "@/styles/robsStyles/Training.module.css";
import Link from "next/link";

const Training4 = () => {
  return (
    <>
      <div className={robStyles.trainBox}>
        <h1 className={robStyles.trainHeadBox}>PRE-FIGHT TRAINING</h1>

        <div className={robStyles.trainingBox}>
          <h1>TRAINING PAGE 4</h1>
          <div>training game to test customer compliance to reaction</div>
          <div className={robStyles.lowBar} >
            <button className={styles.btnStyle}>
              <Link href="/training3">{"PREV"}</Link>
            </button>
            <h2 className={styles.btnStyle} >PROGRESS = 60%</h2>
            <button className={styles.btnStyle}>
              <Link href="/training5">{"NEXT"}</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="main"></div>
    </>
  );
};
export default Training4;

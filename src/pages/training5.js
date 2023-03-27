import styles from "@/styles/Home.module.css";
import robStyles from "@/styles/robsStyles/Training.module.css";
import Link from "next/link";

const Training5 = () => {
  return (
    <>
      <div className={robStyles.trainBox}>
        <h1 className={robStyles.trainHeadBox}>PRE-FIGHT TRAINING</h1>

        <div className={robStyles.trainingBox}>
          <h1>TRAINING PAGE 5</h1>
          <div>training game to test customer compliance</div>
          <div className={robStyles.lowBar} >
            <button className={styles.btnStyle}>
              <Link href="/training4">{"PREV"}</Link>
            </button>
            <h2 className={styles.btnStyle} >PROGRESS = 80%</h2>
            <button className={styles.btnStyle}>
              <Link href="/payment">{"PAYMENT"}</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="main"></div>
    </>
  );
};
export default Training5;

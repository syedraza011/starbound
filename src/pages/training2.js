import styles from "@/styles/Home.module.css";
import robStyles from "@/styles/robsStyles/Training.module.css";
import Link from "next/link";

const Training2 = () => {
  return (
    <>
      <div className={robStyles.trainBox}>
        <h1 className={robStyles.trainHeadBox}>PRE-FIGHT TRAINING</h1>

        <div className={robStyles.trainingBox}>
          <h1>TRAINING PAGE 2</h1>
          <div>training game to test customer hearing</div>
          <div className={robStyles.lowBar} >
            <button className={styles.btnStyle}>
              <Link href="/training">{"PREV"}</Link>
            </button>
            <h2 className={styles.btnStyle} >PROGRESS = 20%</h2>
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

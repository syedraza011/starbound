import styles from "@/styles/Home.module.css";
import robStyles from "@/styles/robsStyles/Training.module.css";
import Link from "next/link";

const Training4 = () => {
  return (
    <>
      <div className={robStyles.trainBox}>
        <h1 className={robStyles.trainHeadBox}>PRE-FIGHT TRAINING</h1>

        <div className={robStyles.trainingBox}>

          <div className={robStyles.trainBox4} >
            <h1>Congratulations on passing your pre-space travel training! This is a significant accomplishment, and it demonstrates your dedication, hard work, and commitment to this incredible endeavor. Your training has equipped you with the necessary skills and knowledge to prepare you for the challenges that lie ahead. You are now one step closer to achieving your goal of space travel, and I wish you the best of luck on your journey. May you continue to learn, grow, and excel as you pursue this remarkable opportunity.</h1>
          </div>
        
          <div className={robStyles.lowBar} >
            <button className={styles.btnStyle}>
              <Link href="/training3">{"PREV"}</Link>
            </button>
            <h2 className={styles.btnStyle} >PROGRESS = 100%</h2>
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
export default Training4;
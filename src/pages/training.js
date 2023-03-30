import styles from "@/styles/Home.module.css";
import robStyles from "@/styles/robsStyles/Training.module.css";
import Link from "next/link";

const Training = () => {
  return (
    <>
      <div className={robStyles.trainBox}>
        <h1 className={robStyles.trainHeadBox}>PRE-FIGHT TRAINING</h1>
        <div className={robStyles.trainingBox}>
          <div className={robStyles.trainTextBox} >
            <h1>
              Before you can embark on your space travel adventure, it's important to go through some important training material to ensure your safety and the safety of those around you.
          </h1>
          <br/>
          <h1>
            Space travel can be a complex and potentially dangerous undertaking, and it's critical that you understand the various risks and procedures involved in order to make informed decisions and respond appropriately in case of an emergency.
          </h1>
          <br/>
          <h1>
            We highly recommend that you take the time to read and understand the training material thoroughly before embarking on your space travel adventure. This will help ensure a successful and enjoyable journey, and most importantly, keep you and others safe.
          </h1>
          </div>
          <div className={robStyles.lowBar} >
            <h2 className={styles.btnStyle} >PROGRESS = 0%</h2>
            <button className={styles.btnStyle}>
              <Link href="/training1">{"NEXT"}</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="main"></div>
    </>
  );
};
export default Training;

import styles from "@/styles/Home.module.css";
import robStyles from "@/styles/robsStyles/Training.module.css"
import Link from "next/link";


const Training5 = () => {
  return (
    <>
    <div className={robStyles.trainBox}>
    <h1 className={robStyles.trainHeadBox}>PRE-FIGHT TRAINING</h1>

      <div className={robStyles.trainingBox} >
        <h1>TRAINING PAGE 5</h1>
        <div>
          training game to test customer compliance
        </div>
        <div>
          <button  className={styles.btnStyle} >
            <Link href="/training4">{"Prev"}</Link>
          </button>

          {/* {setTimeout(function () { */}

          {/* <button  className={styles.btnStyle} >
            <Link href="/training">{"Next"}</Link>
          </button> */}

          {/* }, 5000)} */}

          <button  className={styles.btnStyle} >
            <Link href="/payment">{"Payment"}</Link>
          </button>
        </div>
      </div>
    </div>
    <div className="main"></div>
    </>
  );
};
export default Training5;
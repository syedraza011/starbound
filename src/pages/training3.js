import styles from "@/styles/Home.module.css";
import robStyles from "@/styles/robsStyles/Training.module.css"
import Link from "next/link";


const Training3 = () => {
  return (
    <>
    <div className={robStyles.trainBox}>
    <h1 className={robStyles.trainHeadBox}>PRE-FIGHT TRAINING</h1>

      <div className={robStyles.trainingBox} >
        <h1>TRAINING PAGE 3</h1>
        <div>
          training game to test customer coordination
        </div>
        <div>
          <button  className={styles.btnStyle} >
            <Link href="/training2">{"Prev"}</Link>
          </button>

          {/* {setTimeout(function () { */}

          <button  className={styles.btnStyle} >
            <Link href="/training4">{"Next"}</Link>
          </button>

          {/* }, 5000)} */}

          {/* <button  className={styles.btnStyle} >
            <Link href="/payment">{"Payment"}</Link>
          </button> */}
        </div>
      </div>
    </div>
    <div className="main"></div>
    </>
  );
};
export default Training3;

import styles from "@/styles/Home.module.css";
import robStlyes from '@/styles/robsStyles/Payment.module.css'
import Link from "next/link";


const Payment = () => {
  return (
    <>
    {/* <div className={robStlyes.pmntBox} > */}
      

      <form className={robStlyes.pmntBox} >
        <h1 className={robStlyes.pmntHeadBox} >PAYMENT</h1>
        {/* <div> */}
          {/* <p>Pay using Credit or Debit card</p> */}
          <div className={robStlyes.crdDtlBox} >
            <label> CARD NUMBER </label>
            <input
              type="text"
              class="card-number-field"
              placeholder="###-###-###"
            />
          </div>
          <div className={robStlyes.crdDtlBox}>
            <label> EXPIRATION DATE </label>
            <input
              type="text"
              class="date-number-field"
              placeholder="DD-MM-YY"
            />
          </div>
          <div className={robStlyes.crdDtlBox}>
            <label> CVV NUMBER </label>
            <input type="text" class="cvv-number-field" placeholder="xxx" />
          </div>
          <div className={robStlyes.crdDtlBox}>
            <label> CARD HOLDER NAME </label>
            <input
              type="text"
              class="card-name-field"
              placeholder="Enter your Name"
            />
          </div>
          <button type="submit" className={styles.btnStyle}>
            <Link href="/bpass"> {"BOARDING PASS"}</Link>
          </button>
        {/* </div> */}
      </form>
    {/* </div> */}
    <div class="main"></div>
    </>
  );
};
export default Payment;

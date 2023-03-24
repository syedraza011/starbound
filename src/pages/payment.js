import react from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
const Payment = () => {
  return (
    <>
      <div>payment</div>

      <form>
        <div className="card-details">
          <p>Pay using Credit or Debit card</p>

          <div className="card-number">
            <label> Card Number </label>
            <input
              type="text"
              className="card-number-field"
              placeholder="###-###-###"
            />
          </div>
          <br />
          <div className="date-number">
            <label> Expiry Date </label>
            <input
              type="text"
              className="date-number-field"
              placeholder="DD-MM-YY"
            />
          </div>

          <div className="cvv-number">
            <label> CVV number </label>
            <input type="text" className="cvv-number-field" placeholder="xxx" />
          </div>
          <div className="nameholder-number">
            <label> Card Holder name </label>
            <input
              type="text"
              className="card-name-field"
              placeholder="Enter your Name"
            />
          </div>
          <button type="submit" className={styles.btnStyle}>
            <Link href="/bpass"> {"Boarding pass"}</Link>
          </button>
        </div>
      </form>
    </>
  );
};
export default Payment;

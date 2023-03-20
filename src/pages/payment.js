import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
const Payment = () => {
  return (
    <>
      <div>payment</div>

      <form>
        <div class="card-details">
          <p>Pay using Credit or Debit card</p>

          <div class="card-number">
            <label> Card Number </label>
            <input
              type="text"
              class="card-number-field"
              placeholder="###-###-###"
            />
          </div>
          <br />
          <div class="date-number">
            <label> Expiry Date </label>
            <input
              type="text"
              class="date-number-field"
              placeholder="DD-MM-YY"
            />
          </div>

          <div class="cvv-number">
            <label> CVV number </label>
            <input type="text" class="cvv-number-field" placeholder="xxx" />
          </div>
          <div class="nameholder-number">
            <label> Card Holder name </label>
            <input
              type="text"
              class="card-name-field"
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

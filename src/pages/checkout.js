// import react from "react";
import Link from "next/link";

import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import robStyles from "@/styles/robsStyles/Checkout.module.css";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className={robStyles.chckOutBox}>
        <h1 className={robStyles.headBox}>CHECKOUT HERE</h1>
        <form className={styles.formStyling} onSubmit={handleFormSubmit}>
          <div className={robStyles.allTextBox}>
            <ul>
              <li className={robStyles.textBox}>
                <label className="label" htmlFor="firstName">
                  FIRST NAME:
                </label>
                <input
                  className={robStyles.textInptBox}
                  placeholder="John"
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </li>
              <li className={robStyles.textBox}>
                <label className="label" htmlFor="firstName">
                  LAST NAME:
                </label>
                <input
                  className={robStyles.textInptBox}
                  placeholder="Smith"
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </li>
              <li className={robStyles.textBox}>
                <label className="label" htmlFor="Address">
                  1ST ADDRESS:
                </label>

                <input
                  // className="field-style field-split student-edit-input-small"
                  className={robStyles.textInptBox}
                  placeholder="123 tribe street"
                  type="text"
                  name="address"
                  required
                ></input>
              </li>
              <li className={robStyles.textBox}>
                <label className="label" htmlFor="Address">
                  2ND ADDRESS:
                </label>
                <input
                  // className="field-style field-split student-edit-input-small"
                  className={robStyles.textInptBox}
                  placeholder="Apt/Suite/Unit"
                  type="text"
                  name="address2"
                  required
                ></input>
              </li>
              <li className={robStyles.textBox}>
                <label className="label" htmlFor="imageUrl">
                  ZIP-CODE:
                </label>
                <input
                  // width={4}
                  className={robStyles.textInptBox}
                  type="number"
                  name="postal_zip_code"
                  label="Zip/Postal"
                  placeholder="Zip/Postal"
                  required
                ></input>
              </li>
              <li className={robStyles.textBox}>
                <label className="label" htmlFor="Email">
                  EMAIL:
                </label>
                <input
                  // className="field-style field-split student-edit-input-small"
                  className={robStyles.textInptBox}
                  type="text"
                  name="email"
                  label="Email"
                  placeholder="xyz@example.com"
                  required
                ></input>
              </li>
              <div className={robStyles.btnBox}>
                <Link href="/bpass">
                  <button className={styles.btnStyle} type="submit">
                    Book my Flight <BsFillRocketTakeoffFill />
                  </button>
                </Link>
                {/* <button className={styles.btnStyle} type="submit" >
              Cancel
            </button> */}
              </div>
            </ul>
          </div>
        </form>
      </div>

      <div className="main"></div>
    </>
  );
};
export default Checkout;

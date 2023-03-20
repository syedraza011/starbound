import react from "react";
import Link from "Next/link";
import styles from "@/styles/Home.module.css";
const Checkout = () => {
  return (
    <>
      <form className="formStyling ">
        <div className={styles.sizingBox}>
          <ul>
            <li>
              <label className="label" htmlFor="firstName">
                firstName:
              </label>
              <input
                className="field-style field-split student-edit-input-small"
                placeholder="John"
                type="text"
                name="name"
                required
              ></input>
            </li>
            <li>
              <label className="label" htmlFor="firstName">
                lastName:
              </label>
              <input
                className="field-style field-split student-edit-input-small"
                placeholder="Smith"
                type="text"
                name="name"
                required
              ></input>
            </li>
            <li>
              <label className="label" htmlFor="Address">
                Address:
              </label>
              <input
                className="field-style field-split student-edit-input-small"
                placeholder="123 tribe street"
                type="text"
                name="address"
                required
              ></input>
            </li>
            <li>
              <label className="label" htmlFor="Address">
                Address 2:
              </label>
              <input
                className="field-style field-split student-edit-input-small"
                placeholder="Apt/Suite/Unit"
                type="text"
                name="address2"
                required
              ></input>
            </li>
            <li>
              <label className="label" htmlFor="Email">
                Email:
              </label>
              <input
                className="field-style field-split student-edit-input-small"
                type="text"
                name="email"
                label="Email"
                placeholder="xyz@example.com"
                required
              ></input>
            </li>
            <li>
              <label className="label" htmlFor="imageUrl">
                postal_zip_code:
              </label>
              <input
                width={4}
                type="number"
                name="postal_zip_code"
                label="Zip/Postal"
                placeholder="Zip/Postal"
                required
              ></input>
            </li>
            <button className={styles.btnStyle} type="submit">
              Book my Flight
            </button>
          </ul>
        </div>
      </form>
    </>
  );
};
export default Checkout;

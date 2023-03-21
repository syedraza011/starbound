import react from "react";
import Link from "Next/link";
import styles from "@/styles/Home.module.css";
const Contact = () => {
  return (
    <form>
      <div>
        <ul>
          <li>
            <label className="label" htmlFor="firstName">
              Name:
            </label>
            <input
              className="field-style field-split student-edit-input-small"
              placeholder="John Smith"
              type="text"
              name="name"
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
              Message:
            </label>
            <input
             className={styles.boxInput}
              type="text"
              name="message"
              label="message"
              placeholder="write something here...."
              required
            ></input>
          </li>
          <button className={styles.btnStyle} type="submit">
            Submit
          </button>
        </ul>
      </div>
    </form>
  );
};
export default Contact;

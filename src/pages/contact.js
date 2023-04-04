import { useState } from "react";
import styles from "@/styles/Home.module.css";
import robvStyles from "@/styles/robsStyles/Contact.module.css";
import { BsFillRocketTakeoffFill } from "react-icons/bs";

const Contact = () => {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleClearForm = (e) => {
    e.preventDefault();
    alert("Sucessfully response submitted!");
    setFormInputs({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // add code here to handle form submission, e.g. send form data to server
    console.log("Form submitted:", formInputs);
    handleClearForm(e);
  };

  return (
    <>
      <div className={robvStyles.cnctBox}>
        <h1 className={robvStyles.conHeadBox}>
          Contact via, help@starbound.com, or by filling out the form
        </h1>
        <form onSubmit={handleSubmit}>
          <div className={robvStyles.conDtlBox}>
            <label>YOUR NAME: </label>
            <input
              className={robvStyles.conInBox}
              type="text"
              name="name"
              placeholder="Name Here..."
              value={formInputs.name}
              onChange={handleChange}
            />
          </div>
          <div className={robvStyles.conDtlBox}>
            <label>YOUR EMAIL: </label>
            <input
              className={robvStyles.conInBox}
              type="text"
              name="email"
              placeholder="Email Here..."
              value={formInputs.email}
              onChange={handleChange}
            />
          </div>
          <div className={robvStyles.conDtlBox}>
            <label>YOUR MESSAGE: </label>
            <textarea
              className={robvStyles.conComBox}
              type="text"
              name="message"
              rows="5"
              placeholder="Message Here..."
              value={formInputs.message}
              onChange={handleChange}
            />
          </div>
          <button className={styles.btnStyle} type="submit">
            Send Message

            <BsFillRocketTakeoffFill />
          </button>
       
        </form>
      </div>
      <div className="main"></div>
    </>
  );
};

export default Contact;

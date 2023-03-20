import Link from "next/link";
import styles from "@/styles/Home.module.css";
const Training = () => {
  return (
    <>
      <h1>Training page</h1>
      <div>
        <p>
          Welcome to Starbound, the premier space tourism company for those
          seeking a truly out-of-this-world experience. Our mission is to make
          space travel accessible and safe for everyone, so that you can
          experience the thrill of exploring the cosmos for yourself. At
          Starbound, we offer a range of exciting and unforgettable space travel
          experiences, from short suborbital flights to longer stays aboard the
          International Space Station. Our state-of-the-art spacecraft are
          designed for maximum comfort and safety, so you can relax and enjoy
          the ride while our experienced crew takes care of everything else.
          Whether you’re a space enthusiast looking to fulfill a lifelong dream,
          an adventurer seeking a new challenge, or simply looking to experience
          the awe-inspiring beauty of the universe, Galactic Adventures has a
          space travel package that’s perfect for you. Our team of experts will
          guide you through every step of the process, from pre-flight training
          to your actual space flight, to ensure that you have a safe,
          enjoyable, and truly unforgettable experience. So why wait? Contact us
          today to start planning your journey to the stars with Starbound!
        </p>
        <button  className={styles.btnStyle} >
         <Link href="/training">{"Prev"}</Link>
        </button>
        {/* {setTimeout(function () { */}
        <button  className={styles.btnStyle} >
         <Link href="/training">{"Next"}</Link>
        </button>
        {/* }, 5000)} */}
        <button  className={styles.btnStyle} >
         <Link href="/payment">{"Payment"}</Link>
        </button>
      </div>
    </>
  );
};
export default Training;

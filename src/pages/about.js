import Link from "next/link";
import styles from '@/styles/About.module.css'

const About = () => {
  return (
    <>
      <h1>About page</h1>
      <div className={styles.abtBox} >
        <p>
          Welcome to Starbound, the premier space tourism company for those
          seeking a truly out-of-this-world experience.
        </p>
        <br></br>
        <p>
           Our mission is to make
          space travel accessible and safe for everyone, so that you can
          experience the thrill of exploring the cosmos for yourself. At
          Starbound, we offer a range of exciting and unforgettable space travel
          experiences, from short suborbital flights to longer stays aboard the
          International Space Station.  
        </p>
        <br></br>
        <p>
          Our state-of-the-art spacecraft are
          designed for maximum comfort and safety, so you can relax and enjoy
          the ride while our experienced crew takes care of everything else.
          Whether you’re a space enthusiast looking to fulfill a lifelong dream,
          an adventurer seeking a new challenge, or simply looking to experience
          the awe-inspiring beauty of the universe, Galactic Adventures has a
          space travel package that’s perfect for you. Our team of experts will
          guide you through every step of the process, from pre-flight training
          to your actual space flight, to ensure that you have a safe,
          enjoyable, and truly unforgettable experience.
        </p>
        <br></br>
        <p>
          So why wait? Contact us
          today to start planning your journey to the stars with Starbound!
        </p>
        <br></br>
        <p>
          Wanna Meet the Founders? <Link href='/aboutus' ><br></br>CLICK HERE</Link>
        </p>
      </div>
      <div class="main"></div>
    </>
  );
};
export default About;

// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Link from "next/link";
import { useEffect, useState } from "react";
// const inter = Inter({ subsets: ["latin"] });

// destructure session and supabase out of the props being passed into the function
export default function Home({ session, supabase }) {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    // !! will turn session into a boolean and check to see if it has any data inside it
    setLoggedIn(!!session);
    // look for variables inside the function that could change
  }, [session]);
  return (
    <>
      <div className={styles.indexBox}>
        <div className={styles.welcBox}>
          <h1>WELCOME TO STARBOUND</h1>
          <h2>placeHolderText</h2>
          <h2>placeHolderText</h2>
        </div>
        <div className={styles.graphicBox}>
          <h1>Graphics box</h1>
        </div>
      </div>
      <div className={styles.outFlightBox}>
        <h1>Out Flight Box</h1>
      </div>
      <div className={styles.someElseBox}>
        <h1>Something Else Box</h1>
      </div>
      <div class="main"></div>
    </>
  );
}

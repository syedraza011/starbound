import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../supabase";
import styles from "@/styles/robsStyles/About.module.css";
import withAuth from "./withAuth";

function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  return (
    <>
      <div>dash</div>
      {user ? (
        <button className={styles.btnStyle} onClick={handleSignOut}>
          Sign Out
        </button>
      ) : (
        <a href="/login">
          <button className={styles.btnStyle}>Sign In</button>
        </a>
      )}
    </>
  );
}

export default withAuth(Dashboard);

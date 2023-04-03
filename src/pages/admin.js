import { useState, useEffect } from "react";
import supabase from "../../supabase";
import styles from "@/styles/Dash.module.css";

export default function Dash() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.session();
    setUser(session?.user ?? null);
  }, []);

  return (
    <div className={styles.dashContainer}>
      {user ? (
        <div className={styles.welcomeMessage}>
          <h1>Welcome, {user.email}!</h1>
          <p>Here's some information about your dashboard:</p>
          <ul>
            <li>You have 5 unread notifications.</li>
            <li>Your account was last updated on March 29, 2023.</li>
            <li>You have 3 active projects.</li>
          </ul>
        </div>
      ) : (
        <div className={styles.signInMessage}>
          <h1>Please sign in to access your dashboard.</h1>
        </div>
      )}
    </div>
  );
}

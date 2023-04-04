import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../supabase";
import styles from "@/styles/robsStyles/About.module.css";
import withAuth from "./withAuth";
import Link from "next/link";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session);
    setUser(session?.user ?? null);
    setIsLoadingInitial(false);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  // useEffect(() => {
  //   console.log("Dashboard");
  //   const sessionData = sessionStorage.getItem("supabase.auth.token");
  //   console.log("SessionData", sessionData);
  //   if (sessionData) {
  //     const { user } = JSON.parse(sessionData);
  //     console.log("user", user);
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       console.log("Error parsing session data: user is undefined");
  //     }
  //   }
  // }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("Error signing out:", error);
    } else {
      sessionStorage.removeItem("supabase.auth.token");
      setUser(null);
      router.push("/");
    }
  };

  return (
    <>
      <div>dash</div>
      {user ? (
        <>
          <p>Welcome, {user.email}!</p>
          <button className={styles.btnStyle} onClick={handleSignOut}>
            Sign Out
          </button>
        </>
      ) : (
        <>
          <p>Welcome you are not an authorized user/Admin </p>
          <Link href="/signIn">
            <button className={styles.btnStyle}>Sign In</button>
          </Link>
        </>
      )}
    </>
  );
}

export default withAuth(Dashboard);



import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import supabase from "../../supabase";
import styles from "@/styles/Home.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // state to track if user is signing up
  const router = useRouter();

  const [fetchError, setFetchError] = useState(null);
  const [sessions, setSessions] = useState(null);

  useEffect(() => {
    const checkSessions = async () => {
      const sessionData = sessionStorage.getItem("supabase.auth.token");
      if (sessionData) {
        return JSON.parse(sessionData);
      } else {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          setFetchError("Could not fetch flights data");
          console.log("Error: ", error);
          return null;
        }
        if (data) {
          sessionStorage.setItem("supabase.auth.token", JSON.stringify(data));
          console.log("Sessions: ", data);
          setFetchError(null);
          return data;
        }
      }
    };

    const sessions = checkSessions();
    if (!sessions) {
      router.push("/signIn");
    } else {
      console.log("Sessions", sessions);
    }
  }, [router]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { user, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      alert(error.message);
      setLoading(false);
    } else {
      console.log("User:", user);
      setLoading(false);
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.log("Error: ", error);
      }
      if (data) {
        setSessions(data);
        sessionStorage.setItem("supabase.auth.token", JSON.stringify(data));
        router.push("/dashboard");
      }
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    const { user, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      alert(error.message);
      setLoading(false);
    } else {
      alert("Sucess redirecting ....");
      console.log("User:", user);
      alert("Sucess 2 redirecting ....");
      alert("Sucess 3 redirecting ....");
      setLoading(false);
      console.log("importtant");
      const { data, error } = await supabase.auth.getSession();
      console.log("importtant");
      console.log("inside Google Auth grabbing Session", data);
      if (error) {
        console.log("Error: ", error);
      }
      if (data) {
        console.log("inside Google Auth", data);
        setSessions(data);
        sessionStorage.setItem("supabase.auth.token");
        router.push("/dashboard");
      }
    }
  };

  const handleSignOut = async () => {
    sessionStorage.removeItem("supabase.auth.token");
    await supabase.auth.signOut();
    router.push("/");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    toggleSignUp();
    setLoading(true);
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      alert(error.message);
      setLoading(false);
    } else {
      console.log("User:", user);
      setLoading(false);
      //   router.push("/dashboard");
    }
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={styles.signInContainer}>
      <div className={styles.space}></div>
      <div className={styles.signInForm}>
        <div className={styles.signInTitle}>
          <h1>{isSignUp ? "Sign Up" : "Sign In"}</h1>
        </div>
        <form
          onSubmit={isSignUp ? handleSignUp : handleSignIn}
          className={styles.signInForm}
        >
          <div className={styles.inputContainer}>
            <label htmlFor="email" className={styles.inputLabel}>
              Email
            </label>
            <input
              id="email"
              type="email"
              className={styles.inputField}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="password" className={styles.inputLabel}>
              Password
            </label>
            <input
              id="password"
              type="password"
              className={styles.inputField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className={styles.signInButton}
            disabled={loading}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
            {/* {loading ? "Signing in..." : "Sign In"} */}
          </button>
        </form>

        {/* ------------------- */}

        <div className={styles.or}>
          <hr className={styles.hr} />
          <span>or</span>
          <hr className={styles.hr} />
        </div>
        <button className={styles.googleButton} onClick={handleGoogleSignIn}>
          <span className="google-icon"></span>
          <span className="google-text">Sign in with Google</span>
        </button>

        {/* --------------------- */}
        <div className={styles.signUpOption}>
          <p>
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
          </p>
          <button className={styles.signUpButton} onClick={handleSignUp}>
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}

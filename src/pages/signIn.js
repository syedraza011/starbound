import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import supabase from "../../supabase";
import styles from "@/styles/Home.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [fetchError, setFetchError] = useState(null);
  const [session, setSessions] = useState(null);

  useEffect(() => {
    const fetchSessions = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        setFetchError("Could not fetch flights data");
        setSessions(null);
        console.log("Error: ", error);
      }
      if (data) {
        setSessions(data);
        setFetchError(null);
      }
    };
    fetchSessions();

    if (session) {
      //   router.push("/dashboard");
    }
  }, [router, session]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { user, error } = await supabase.auth.signInWithPassword({
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

  const handleGoogleSignIn = async () => {
    setLoading(true);
    const { user, error } = await supabase.auth.signIn({
      provider: "google",
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

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
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

  return (
    <div className={styles.signInContainer}>
      <div className={styles.space}></div>
      <div className={styles.signInForm}>
        <div className={styles.signInTitle}>
          <h1>Sign In</h1>
        </div>
        <form onSubmit={handleSignIn} className={styles.signInForm}>
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
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        <div className={styles.or}>
          <hr className={styles.hr} />
          <span>or</span>
          <hr className={styles.hr} />
        </div>
        <button class="google-button">
          <span class="google-icon">
            <img
              src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_dark.svg"
              alt="Google logo"
            />
          </span>
          <span class="google-text">Sign in with Google</span>
        </button>

        <button
          className={styles.googleButton}
          onClick={handleGoogleSignIn}
          disabled={loading}
        >
          {loading ? "Signing in with Google..." : "Sign In with Google"}
        </button>
      </div>
    </div>
  );
}

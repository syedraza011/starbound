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
        // console.log(data);
        setSessions(data);
        setFetchError(null);
      }
    };
    fetchSessions();

    if (session) {
      router.push("/dash");
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
      router.push("/dashboard");
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
      console.log("User:", user);
      setLoading(false);
      router.push("/dashboard");
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
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
        <button
          className={styles.googleButton}
          onClick={handleGoogleSignIn}
          disabled={loading}
        >
          {loading ? "Signing in with Google..." : "Sign In with Google"}
        </button>
        <div className={styles.signUp}>
          <span>Don't have an account?</span>
          <a href="/signup" className={styles.signUpLink}>
            Sign Up
          </a>
        </div>
        <div className="main"></div>
      </div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

// import react,{ useState } from "react";
// import supabase from "../../supabase";
// import styles from "@/styles/Home.module.css";

// export default function login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignIn = async (e) => {
//     console.log("Handle Sign In");
//     e.preventDefault();

//     console.log("Sign in");
//     const { data, error } = await supabase.auth.signInWithPassword({
//       email: email,
//       password: password,
//     });

//     if (error) {
//       alert(error.message);
//       console.log(data);
//     } else {
//       console.log("Email in else ", data);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     const { error } = await supabase.auth.signInWithOAuth({
//       provider: "google",
//     });
//     if (error) alert(error.message);
//   };

//   const handlePasswordReset = async (e) => {
//     e.preventDefault();
//     const { error } = await supabase.auth.resetPasswordForEmail(email);
//     if (error) alert(error.message);
//     else alert("Password reset email sent!");
//   };

//   const handlePasswordUpdate = async (e) => {
//     e.preventDefault();
//     const { error } = await supabase.auth.updateUser({ email: email });
//     if (error) alert(error.message);
//     else alert("Magic link sent to update password!");
//   };

//   return (
//     <div className={styles.signInContainer}>
//       <div className={styles.space}></div>
//       <div className={styles.signInForm}>
//         <div className={styles.signInTitle}>
//           <h1>Sign In</h1>
//         </div>
//         <form onSubmit={handleSignIn} className={styles.signInForm}>
//           <div className={styles.inputContainer}>
//             <label htmlFor="email" className={styles.inputLabel}>
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               className={styles.inputField}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className={styles.inputContainer}>
//             <label htmlFor="password" className={styles.inputLabel}>
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               className={styles.inputField}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button type="submit" className={styles.signInButton}>
//             Sign In
//           </button>
//         </form>
//         <div className={styles.passwordReset}>
//           <button
//             type="button"
//             className={styles.passwordResetButton}
//             onClick={handlePasswordReset}
//           >
//             Reset Password
//           </button>
//           <button
//             type="button"
//             className={styles.passwordResetButton}
//             onClick={handlePasswordUpdate}
//           >
//             Update Password
//           </button>
//         </div>
//         <div className={styles.or}>
//           <hr className={styles.hr} />
//           <span>or</span>
//           <hr className={styles.hr} />
//         </div>
//         <button className={styles.googleButton} onClick={handleGoogleSignIn}>
//           Sign In with Google
//         </button>
//         <div className={styles.signUp}>
//           <span>Don't have an account?</span>
//           <a href="/signUp" className={styles.signUpLink}>
//             Sign Up
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

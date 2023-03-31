import { useState } from "react";
import { useRouter } from "next/router";
import supabase from "../../supabase";
import styles from "@/styles/Home.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSignup = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setLoading(false);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // delay for 2 seconds
      router.push("/login?success=1"); // navigate to login page with success parameter
    }
  };

  const handleGoogleSignup = async () => {
    const { error } = await supabase.auth.signIn({ provider: "google" });
    if (error) {
      setError(error.message);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.signupcontainer}>
      <h2>Sign up for an account</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSignup} className={styles.signUpform}>
        <div className={styles.formgroup}>
          <label className={styles.signUplabel} htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            className={styles.inputemail}
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className={styles.signUplabel} htmlFor="password">
            Password
          </label>
          <div className={styles.passwordInput}>
            <input
              type={showPassword ? "text" : "password"}
              className={styles.inputemail}
              id="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            {showPassword ? (
              <FaEyeSlash
                className={styles.showPasswordIcon}
                onClick={toggleShowPassword}
              />
            ) : (
              <FaEye
                className={styles.showPasswordIcon}
                onClick={toggleShowPassword}
              />
            )}
          </div>
        </div>
        <button
          type="submit"
          className={styles.signInButton}
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign up"}
        </button>
      </form>
      <hr />
      <button className={styles.googleButton} onClick={handleGoogleSignup}>
        Sign up with Google
      </button>
      <p className="text-center">
        Already have an account? <a href="/login">Log in</a>
      </p>
    </div>
  );
}


//old code below
// import { useState } from "react";
// import { useRouter } from "next/router";
// import supabase from "../../supabase";
// import styles from "@/styles/Home.module.css";

// export default function Signup() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [message, setMessage] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setError(null);
//     const { error } = await supabase.auth.signUp({ email, password });
//     if (error) {
//       setError(error.message);
//       setLoading(false);
//     } else {
//       // Navigate to sign in page on successful submission
//       router.push("/signin");
//       // Show success message
//       setMessage("Please check your email for verification");
//     }
//   };

//   const handleGoogleSignup = async () => {
//     const { error } = await supabase.auth.signIn({ provider: "google" });
//     if (error) {
//       setError(error.message);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={styles.signupcontainer}>
//       <h2>Sign up for an account</h2>
//       {error && <p className="error">{error}</p>}
//       {message && <p className="success">{message}</p>}
//       <form onSubmit={handleSubmit} className={styles.signUpform}>
//         <div className={styles.formgroup}>
//           <label className={styles.signUplabel} htmlFor="email">
//             Email address
//           </label>
//           <input
//             type="email"
//             className={styles.inputemail}
//             id="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label className={styles.signUplabel} htmlFor="password">
//             Password
//           </label>
//           <input
//             type="password"
//             className={styles.inputemail}
//             id="password"
//             placeholder="Password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className={styles.submitButton}
//           disabled={loading}
//         >
//           {loading ? "Loading..." : "Sign up with email and password"}
//         </button>
//       </form>
//       <hr />
//       <button className={styles.googleButton} onClick={handleGoogleSignup}>
//         Sign up with Google
//       </button>
//       <p className="text-center">
//         Already have an account? <a href="/login">Log in</a>
//       </p>
//     </div>
//   );
// }

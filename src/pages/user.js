import react from "react";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import supabase from "../../supabase";
import { useState, useEffect } from "react";
const User = () => {
  const [fetchError, setFetchError] = useState(null);
  const [session, setSessions] = useState(null);
  useEffect(() => {
    const fetchSessions = async () => {
      const { data, error } = await supabase.auth.getSession();
      console.log("session",data);
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
  }, []);

  // async fetchSessions=()=>{
  // const { data, error } = await supabase.auth.getSession()
  // }

  return (
    <div>
      <h1>Users page</h1>
      <div>
    
        {/* <p>Is Logged In: {session.isLoggedIn ? "Yes" : "No"}</p> */}
        {/* <p>Token: {session.token}</p> */}
      </div>
    </div>
  );
};
export default User;

import react from "react";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
const Users = () => {
  return (
    <>
      <div className={styles.users}>
        <h1> All Users</h1>
        <div className="card">
          <h4>UserName:{"John Doe"}</h4>
          <p>User Phone: {"123456786"}</p>
        </div>
        <div className="card">
          <h4>UserName:{"Jane Doe"}</h4>
          <p>User Phone: {"123456786"}</p>
        </div>
        <div className="card">
          <h4>UserName:{"Joe camaro"}</h4>
          <p>User Phone: {"123456786"}</p>
        </div>
      </div>
    </>
  );
};
export default Users;

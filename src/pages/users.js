import react, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import supabase from "../../supabase";

const Users = () => {
  const [userError, setUserError] = useState(null);
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const { data, error } = await supabase.from("users").select();
      if (error) {
        setUserError("could not fetch user data")
        setUsers(null)
      }
      if (data) {
        setUsers(data);
        setUserError(null)
      }
    }
    console.log(users)
    getUsers()
  }, [])
 
  return (
    <>
      
        {users.map((element, idx) => {
          return (
            <div className="userCards">
              <p>{element.first_name} {element.last_name}</p>
              <p>{element.isAdmin}</p>
            </div>
          )
        })}
      
    </>
  );
};
export default Users;

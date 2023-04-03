import { useState, useEffect } from "react";
import supabase from "../../supabase";

export default function UserNav() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      supabase.auth
        .apiRequest("https://<your_domain>.auth0.com/userinfo", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        })
        .then(({ data, error }) => {
          if (error) throw error;
          setUser(data);
          setLoading(false);
        })
        .catch(console.error);
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    localStorage.removeItem("jwt");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Not logged in</div>;
  }

  return (
    <div>
      <p>{user.email}</p>
      <img src={user.picture} alt={user.email} />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}


// import { useState, useEffect } from "react";
// import supabase from "../../supabase";

// export default function UserNav() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const jwt = localStorage.getItem("jwt");

//     if (jwt) {
//       supabase.auth
//         .apiRequest("https://local3000.auth0.com/userinfo", {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${jwt}`,
//           },
//         })
//         .then(({ data, error }) => {
//           if (error) throw error;
//           setUser(data);
//         })
//         .catch(console.error);
//     }
//   }, []);

//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     setUser(null);
//     localStorage.removeItem("jwt");
//   };

//   if (!user) {
//     return <div>Not logged in</div>;
//   }

//   return (
//     <div>
//       <p>{user.email}</p>
//       <img src={user.picture} alt={user.email} />
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// }


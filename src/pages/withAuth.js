

import { useRouter } from "next/router";
import { useEffect } from "react";
import supabase from "../../supabase";

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    useEffect(() => {
      const session = supabase.auth.getSession();
      if (!session) {
        router.replace("/");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;

// import { useRouter } from "next/router";
// import { useEffect } from "react";
// import supabase from "../../supabase";

// const withAuth = (WrappedComponent) => {
//   const Wrapper = (props) => {
//     const router = useRouter();
//     useEffect(() => {
//       const session = supabase.auth.session();
//       if (!session) {
//         const storedSession = sessionStorage.getItem("supabase.auth.token");
//         if (storedSession) {
//           const { user, access_token } = JSON.parse(storedSession);
//           supabase.auth.setAuth(access_token);
//         } else {
//           router.replace("/");
//         }
//       }
//     }, []);

//     return <WrappedComponent {...props} />;
//   };

//   return Wrapper;
// };

// export default withAuth;

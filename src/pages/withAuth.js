import { useRouter } from "next/router";
import { useEffect } from "react";
import supabase from "../../supabase";

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();

    useEffect(() => {
      const { user } = supabase.auth.session();
      if (!user) {
        router.replace("/login");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;

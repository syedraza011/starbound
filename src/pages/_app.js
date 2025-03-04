import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import Head from "next/head";
import { useState } from "react";
import { CartProvider } from "../../context/cartContext";
import NavigationAdmin from "/components/NavigationAdmin";
// import { SessionContextProvider } from "@supabase/supabase-js";

import Footer from "/components/Footer";
import "../styles/globals.css";
import NavigationBar from "../../components/NavigationBar";

function MyApp({ Component, pageProps }) {
  // const [supabaseClient]=useState({initialState :()=>createBrowserSupabaseClient()});
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Head>
        <title>StarBound</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationBar />
      <CartProvider cartItems={cartItems} setCartItems={setCartItems}>
        {/* <SessionContextProvider supabaseClient={supabaseClient} initialSession={pageProps.initialSession}> */}
        <Component {...pageProps} />
        {/* </SessionContextProvider> */}
      </CartProvider>

      <Footer />
    </>
  );
}

export default MyApp;

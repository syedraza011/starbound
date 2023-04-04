import Head from "next/head";
import { useState } from "react";
import { CartProvider } from "../../context/cartContext";
import NavigationAdmin from "/components/NavigationAdmin";

import Footer from "/components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Head>
        <title>StarBound</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationAdmin />
      <CartProvider cartItems={cartItems} setCartItems={setCartItems}>
        <Component {...pageProps} />
      </CartProvider>
   
      <Footer />
    </>
  );
}

export default MyApp;

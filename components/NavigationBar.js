import React from "react";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <>
      <div className="nav-class">
        <Link href="/">Home</Link>

        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/flights">DepatingFlights</Link>
        <Link href="/flights">ArivingFlight</Link>
        <Link href="/training">Training</Link>
        <Link href="/users">Users</Link>
        <Link href="/checkout">checkout</Link>
      </div>
    </>
  );
}

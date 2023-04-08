import Link from "next/link";
import styles from "@/styles/Home.module.css";

import CartIcon from "../cart/cartIcon";

function NavigationBar() {
  return (
    <nav className="sticky bg-[#ffffff] shadow-lg">
      <div className="max-w-8l mx-auto px-2">
        <div className="flex justify-between">
          <div className="flex space-x-20">
            <div>
              <Link href="/" className="companyLogo">
                <img src="starbound.png" alt="Logo" className="starlogo" />
              </Link>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                href="/"
                className="py-4 px-2 text-gray-800 font-extrabold hover:text-blue-600 transition duration-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="py-4 px-2 text-gray-800 font-extrabold hover:text-blue-600 transition duration-300"
              >
                About
              </Link>
              <a
                href="/flights"
                className="py-4 px-2 text-gray-800 font-extrabold hover:text-blue-600 transition duration-300"
              >
                Flights
              </a>

              <Link
                href="/destinations"
                className="py-4 px-2 text-gray-800 font-extrabold hover:text-blue-600 transition duration-300"
              >
                Destinations
              </Link>

              <Link
                href="/training"
                className="py-4 px-2 text-gray-800 font-extrabold hover:text-blue-600 transition duration-300"
              >
                Training
              </Link>

              <Link
                href="/store"
                className="py-4 px-2 text-gray-800 font-extrabold hover:text-blue-600 transition duration-300"
              >
                Store
              </Link>

              <Link
                href="/contact"
                className="py-4 px-2 text-gray-800 font-extrabold hover:text-blue-600 transition duration-300"
              >
                Contact
              </Link>

              <Link
                href="/users"
                className="py-4 px-2 text-gray-800 font-extrabold hover:text-blue-600 transition duration-300"
              >
                Users
              </Link>
            </div>
          </div>
          {/* Secondary Navbar items */}
          <div className="hidden md:flex items-center space-x-3 ">
            <Link
              href="/cart"
              className="py-3 px-6 font-medium text-white bg-gray-600 rounded hover:bg-gray-800 transition duration-300"
            >
              <CartIcon />
            </Link>

            <Link
              href="/signIn"
              className="py-2 px-2 font-medium text-white bg-gray-600 rounded hover:bg-gray-800 transition duration-300"
            >
              Log In
            </Link>
            <Link
              href="/account"
              className="py-2 px-2 font-medium text-white bg-gray-600 rounded hover:bg-gray-800 transition duration-300"
            >
              Sign Out
            </Link>
            <Link
              href="/signUp"
              className="py-2 px-2 font-medium text-white bg-gray-600 rounded hover:bg-gray-800 transition duration-300"
            >
              Dashboard
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg
                className=" w-6 h-6 text-blue-600 hover:text-blue-800 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <div className="hidden mobile-menu">
        <ul className="">
          <li>
            <div
              href="/"
              className="block text-sm px-2 py-4 hover:bg-blue-600 transition duration-300"
            >
              Home
            </div>
          </li>
          <li>
            <div
              href="/about"
              className="w-6 h-6 text-blue-600 hover:text-blue-800 "
            >
              About
            </div>
          </li>
          <li>
            <div
              href="/uFlights"
              className="py-4 px-2 text-gray-800 font-extrabold hover:text-blue-600 transition duration-300"
            >
              Flights
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;

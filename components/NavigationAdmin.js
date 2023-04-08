import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { BsCart4 } from "react-icons/bs";

function NavigationBar() {
  return (
    <nav className="sticky bg-[white] shadow-lg">
      <div className="max-w-8l mx-auto px-2">
        <div className="flex justify-between">
          <div className="flex space-x-20">
            <div>
              {/* Website Logo */}
              <Link href="/" className="companyLogo">
                <img src="starbound.png" alt="Logo" className="starlogo" />
              </Link>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                href="/"
                className="py-4 px-2 text-gray-800 font-bold hover:text-blue-600 transition duration-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="py-4 px-2 text-gray-800 font-bold hover:text-blue-600 transition duration-300"
              >
                About
              </Link>
              <a
                href="/flights"
                className="py-4 px-2 text-gray-800 font-bold hover:text-blue-600 transition duration-300"
              >
                Flights
              </a>
              {/* <Link href="/src/pages/flights.js">Podcast</Link> */}
              <Link
                href="/destinations"
                className="py-4 px-2 text-gray-800 font-bold hover:text-blue-600 transition duration-300"
              >
                Destinations
              </Link>

              <Link
                href="/training"
                className="py-4 px-2 text-gray-800 font-bold hover:text-blue-600 transition duration-300"
              >
                Training
              </Link>
             

             <Link
                href="/store"
                className="py-4 px-2 text-gray-800 font-bold hover:text-blue-600 transition duration-300"
              >
                Store
              </Link> 
              <Link
                href="/contact"
                className="py-4 px-2 text-gray-800 font-bold hover:text-blue-600 transition duration-300"
              >
                Contact
              </Link>
              <Link
                href="/checkout"
                className="py-4 px-2 text-gray-800 font-bold hover:text-blue-600 transition duration-300"
              >
                Checkout
              </Link>

              {/* <Link
                href="/users"
                className="py-4 px-2 text-gray-800 font-bold hover:text-blue-600 transition duration-300"
              >
                Users
              </Link> */}
              {/* <Link
                href="/date"
                className="py-4 px-2 text-gray-800 font-bold hover:text-blue-600 transition duration-300"
              >
                Date
              </Link> */}
              {/* <Link
                href="/time"
                className="py-4 px-2 text-gray-800 font-bold hover:text-blue-600 transition duration-300"
              >
                time
              </Link> */}
              {/* <Link
                href="/admin"
                className="py-4 px-2 text-gray-800 font-bold hover:text-blue-600 transition duration-300"
              >
                AdminPage
              </Link> */}
            </div>
          </div>
          {/* Secondary Navbar items */}
          <div className="hidden md:flex items-center space-x-3 ">
            <Link
              href="https://buy.stripe.com/test_3cs01K2bEaQO0Hm5kl"
              className="py-5 px-2 text-gray-800 font-bold hover:text-blue-600 transition duration-300"
            >
              <BsCart4 />
            </Link>

            <Link
              href="/signIn"
              className="py-2 px-2 font-medium text-white bg-blue-600 rounded hover:bg-blue-800 transition duration-300"
            >
              Log In
            </Link>
            <Link
              href="/account"
              className="py-2 px-2 font-medium text-white bg-blue-600 rounded hover:bg-blue-800 transition duration-300"
            >
              Account
            </Link>
            {/* <Link
              href="/signUp"
              className="py-2 px-2 font-medium text-white bg-blue-600 rounded hover:bg-blue-800 transition duration-300"
            >
              Sign Up
            </Link> */}
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
              about
            </div>
          </li>
          <li>
            <div
              href="/flights"
              className="py-4 px-2 text-gray-800 font-bold hover:text-blue-600 transition duration-300"
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

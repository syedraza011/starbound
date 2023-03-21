import Link from "next/link";
import styles from "@/styles/Home.module.css";

function NavigationBar() {
  return (
    <nav className="sticky bg-[#9ca3af] shadow-lg">
      <div className="max-w-8l mx-auto px-2">
        <div className="flex justify-between">
          <div className="flex space-x-20">
            <div>
              {/* Website Logo */}
              <div href="/" className="companyLogo">
                <img src="starbound.png" alt="Logo" className="starlogo" />
              </div>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <div
                href="/"
                className="py-4 px-2 text-gray-800 font-bold hover:text-blue-600 transition duration-300"
              >
                Home
              </div>
              <div
                href="/about"
                className="py-4 px-2 text-gray-800 font-bold hover:text-blue-600 transition duration-300"
              >
                About
              </div>
              <div
                href="/flights"
                className="py-4 px-2 text-gray-800 font-bold hover:text-blue-600 transition duration-300"
              >
                Flights
              </div>

              <div
                href="/destinations"
                className="py-4 px-2 text-gray-800 font-bold hover:text-blue-600 transition duration-300"
              >
                Destinations
              </div>

              <div
                href="/training"
                className="py-4 px-2 text-gray-800 font-bold hover:text-blue-600 transition duration-300"
              >
                Training
              </div>

              <div
                href="/store"
                className="py-4 px-2 text-gray-800 font-bold hover:text-blue-600 transition duration-300"
              >
                Store
              </div>
              <div
                href="/contact"
                className="py-4 px-2 text-gray-800 font-bold hover:text-blue-600 transition duration-300"
              >
                Contact
              </div>
              <div
                href="/checkout"
                className="py-4 px-2 text-gray-800 font-bold hover:text-blue-600 transition duration-300"
              >
                Checkout
              </div>
              <div
                href="/user"
                className="py-4 px-2 text-gray-800 font-bold hover:text-blue-600 transition duration-300"
              >
                Users
              </div>
            </div>
          </div>
          {/* Secondary Navbar items */}
          <div className="hidden md:flex items-center space-x-3 ">
            <div
              href="/login"
              className="py-2 px-2 font-medium text-white bg-blue-600 rounded hover:bg-blue-800 transition duration-300"
            >
              Log In
            </div>
            <div
              href="/register"
              className="py-2 px-2 font-medium text-white bg-blue-600 rounded hover:bg-blue-800 transition duration-300"
            >
              Register
            </div>
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

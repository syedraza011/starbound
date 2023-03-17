import Link from "next/link";
import styles from "@/styles/Home.module.css";
function NavigationBar() {
  return (
    <nav className="sticky bg-[#f0e7db] shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-2">
            <div>
              {/* Website Logo */}
              <div href="/" className="companyLogo">
                <img src="rocketlogo.png" alt="Logo" className="rocket" />
              </div>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <div
                href="/"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Home
              </div>
              <div
                href="/about"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                About
              </div>
              <div
                href="/flights"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Flights
              </div>

              <div
                href="/destinations"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Destinations
              </div>

              <div
                href="/training"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Training
              </div>

              <div
                href="/store"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Store
              </div>
              <div
                href="/contact"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Contact
              </div>
              <div
                href="/checkout"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Checkout
              </div>
              <div
                href="/user"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Users
              </div>
            </div>
          </div>
          {/* Secondary Navbar items */}
          <div className="hidden md:flex items-center space-x-3 ">
            <div
              href="/login"
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
            >
              Log In
            </div>
            <div
              href="/register"
              className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
            >
              Register
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-green-500 "
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
              href="/services"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Serviçes
            </div>
          </li>
          <li>
            <div
              href="/about"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              About
            </div>
          </li>
          <li>
            <div
              href="/contacts"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Contact
            </div>
          </li>
        </ul>
      </div>
      {/* <Script id="show-responsive-menu" strategy="lazyOnload">
        {`const btn = document.querySelector("button.mobile-menu-button");
            const menu = document.querySelector(".mobile-menu");

            btn.addEventListener("click", () => {
                menu.classList.toggle("hidden");
            });`}
      </Script> */}
    </nav>
  );
}

export default NavigationBar;

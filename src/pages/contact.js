import react from "react";
import Link from "Next/link";
import styles from "@/styles/Home.module.css";
const Contact = () => {
  return (
    <div>
      you can contcat StarBound at help@starbound.com or by filling out the form
      <div>
        <div>
          <hr />
        </div>
        <form>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative z-0">
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Your Name:
              </label>
              <input
                type="text"
                name="name"
                className="peer block w-full appearance-none border-0 border-b border-red-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder="Name Here..."
              />
              <div>
                <hr />
              </div>
            </div>
            <div className="relative z-0">
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Your Name
              </label>
              <input
                type="email"
                name="email"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder="Email here.."
              />
              <div>
                <hr />
              </div>
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Your Email:
              </label>
            </div>
            <div className="relative z-0 col-span-2">
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Your message:
              </label>
              <textarea
                name="message"
                rows="5"
                className="peer block w-full appearance-none border-2 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder="Type your message..."
              ></textarea>
              <div>
                <hr />
              </div>
            </div>
          </div>
          <button
            className={styles.btnStyle}
            type="submit"
            // className="mt-5 rounded-md bg-black px-10 py-2 text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );

  // );
};
export default Contact;

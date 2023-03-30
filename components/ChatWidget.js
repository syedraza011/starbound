import React from "react";
import { createPopper } from "@popperjs/core";
import { useState, useEffect, createRef } from "react";

const ChatWidget = () => {
    const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
    const btnDropdownRef = createRef();
    const popoverDropdownRef = createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: 'top-end',
            strategy: 'fixed',
            modifiers: [
                {
                    name: 'preventOverflow',
                    enabled: true,
                    options: {
                        boundary: 'viewport'
                    }
                }
            ],
            container: 'body'
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    // useEffect(() => {
    //     const checkClickTarget = e => {
    //         if (dropdownPopoverShow && btnDropdownRef.current && !btnDropdownRef.current.contains(e.target))
    //             setDropdownPopoverShow(false)
    //         };
    //         if (typeof document !== "undefined") {
    //         document.addEventListener("mousedown", checkClickTarget);
    //         }
    //         return () => {
    //             if (typeof document !== "undefined") {
    //             document.removeEventListener("mousedown", checkClickTarget);
    //             }
    //         };
    //     }, [dropdownPopoverShow]);        
return (
        <>
            <div className="fixed z-90 bottom-10 right-8 flex items-center justify-center p-12">
                <div className="w-full">
                    <div className="relative inline-flex align-middle w-full">                        
                        <button
                            className={
                                "text-white flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#3fb0ac] ease-linear transition-all duration-150 drop-shadow-lg"
                            }
                            type="button"
                            ref={btnDropdownRef}
                            onClick={() => {
                                dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                            }}
                        >
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M19.8333 14.0002V3.50016C19.8333 3.19074 19.7103 2.894 19.4915 2.6752C19.2728 2.45641 18.976 2.3335 18.6666 2.3335H3.49992C3.1905 2.3335 2.89375 2.45641 2.67496 2.6752C2.45617 2.894 2.33325 3.19074 2.33325 3.50016V19.8335L6.99992 15.1668H18.6666C18.976 15.1668 19.2728 15.0439 19.4915 14.8251C19.7103 14.6063 19.8333 14.3096 19.8333 14.0002ZM24.4999 7.00016H22.1666V17.5002H6.99992V19.8335C6.99992 20.1429 7.12284 20.4397 7.34163 20.6585C7.56042 20.8772 7.85717 21.0002 8.16659 21.0002H20.9999L25.6666 25.6668V8.16683C25.6666 7.85741 25.5437 7.56066 25.3249 7.34187C25.1061 7.12308 24.8093 7.00016 24.4999 7.00016Z"
                                fill="white"
                                />
                            </svg>
                        </button>
                        <div
                            ref={popoverDropdownRef}
                            className={
                                (dropdownPopoverShow ? "block " : "hidden ")
                        }
                        >
                            <div className="hidden lg:col-span-2 lg:block rounded-lg border border-[#e0e0e0] bg-[#dddfd4] bg-opacity-50 backdrop-blur-xl drop-shadow-lg">
                                <div className="w-full">
                                    <div className="relative flex items-center p-3 border-b rounded-t-lg border-gray-300 bg-[#3fb0ac]">
                                    <img className="object-cover w-10 h-10 rounded-full"
                                        src="" alt="username" />
                                    <span className="block ml-2 font-bold text-gray-600">Placeholder Name</span>
                                    <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3">
                                    </span>
                                    </div>
                                    <div className="relative w-full p-6 overflow-y-auto h-[40rem] ">
                                        <ul className="space-y-2">
                                            <li className="flex justify-start">
                                                <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-200 rounded shadow">
                                                    <span className="block">Hi</span>
                                                </div>
                                            </li>
                                            <li className="flex justify-end">
                                                <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-[#F69D56] rounded shadow">
                                                    <span className="block">Hiiii</span>
                                                </div>
                                            </li>
                                            <li className="flex justify-end">
                                                <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-[#F69D56] rounded shadow">
                                                    <span className="block">how are you?</span>
                                                </div>
                                            </li>
                                            <li className="flex justify-start">
                                                <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-200 rounded shadow">
                                                    <span className="block">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex items-center justify-between w-full p-3 border-t rounded-b-lg border-gray-300 bg-[#3fb0ac]">
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </button>
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                            </svg>
                                        </button>
                                        <input type="text" placeholder="Message"
                                            className="block w-full py-2 pl-4 mx-3 bg-gray-200 rounded-full outline-none focus:text-gray-700"
                                            name="message" required />
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                            </svg>
                                        </button>
                                        <button type="submit">
                                            <svg className="w-5 h-5 text-gray-600 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20" fill="currentColor">
                                                <path
                                                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatWidget;

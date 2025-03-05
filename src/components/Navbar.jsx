
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                            alt="Logo"
                        />
                    </div>

                    {/* Hamburger Icon - Only Visible on Small Screens */}
                    <div className="sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-400 hover:text-white focus:outline-none"
                        >
                            {isOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-16 6h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Navigation Links (Desktop) */}
                    <div className="hidden sm:block">
                        <div className="flex space-x-4">
                            <NavLink to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                                Home
                            </NavLink>
                            <NavLink to="/login" className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">
                                Login
                            </NavLink>
                            <NavLink to="/profile" className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">
                                Profile
                            </NavLink>
                            <NavLink to="/register" className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">
                                Register
                            </NavLink>
                            <NavLink to="/cart" className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">
                                Cart
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Only Visible When isOpen is True */}
            {isOpen && (
                <div className="sm:hidden">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        <NavLink to="/" className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md">
                            Home
                        </NavLink>
                        <NavLink to="/login" className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
                            Login
                        </NavLink>
                        <NavLink to="/profile" className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
                            Profile
                        </NavLink>
                        <NavLink to="/register" className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
                            Register
                        </NavLink>
                        <NavLink to="/cart" className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
                            Cart
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
}

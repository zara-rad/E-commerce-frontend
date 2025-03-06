import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../context/context"; // Import your context

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { cart } = useContext(MyContext); // Access the cart from context

    // Calculate total number of items in the cart
    const totalItemsInCart = cart.reduce((sum, item) => sum + item.quantity, 0);

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
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="text-sm px-4 py-2 rounded-md text-gray-900 border-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Cart Icon with Item Count */}
                            <NavLink to="/cart" className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white relative">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/3225/3225209.png"
                                    width="30"
                                    alt="Cart"
                                />
                                {/* Display number of items in cart if greater than 0 */}
                                {totalItemsInCart > 0 && (
                                    <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-2 py-1">
                                        {totalItemsInCart}
                                    </span>
                                )}
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

                        {/* Cart Icon with Item Count in Mobile Menu */}
                        <NavLink to="/cart" className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md relative">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3225/3225209.png"
                                width="30"
                                alt="Cart"
                            />
                            {/* Display number of items in cart if greater than 0 */}
                            {totalItemsInCart > 0 && (
                                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-2 py-1">
                                    {totalItemsInCart}
                                </span>
                            )}
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
}

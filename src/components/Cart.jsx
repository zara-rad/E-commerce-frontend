/* 

import React, { useContext } from 'react'
import { MyContext } from '../context/context'

export default function Cart() {
    const { cart } = useContext(MyContext)

    // Calculate total price using reduce
    const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    // <button>Total amount: {totalAmount.toFixed(2)}$</button>


    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-6">Your Order 🎁</h1>
            <h3>Total Items: {cart.reduce((sum, item) => sum + item.quantity, 0)}</h3>
            <ul>
                {cart.map((item) => (
                    <li key={item._id}>
                        {item.name} - ${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                    </li>
                ))}
            </ul>

            <h2 className="text-xl font-bold mt-4">Total Amount: ${totalAmount.toFixed(2)}</h2>

        </div>
    )
}
 */
import React, { useContext } from "react";
import { MyContext } from "../context/context";

export default function Cart() {
    const { cart, setCart } = useContext(MyContext);

    // ✅ Increase Quantity
    const increaseQuantity = (id) => {
        setCart(
            cart.map((item) =>
                item._id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // ✅ Decrease Quantity (min: 1)
    const decreaseQuantity = (id) => {
        setCart(
            cart.map((item) =>
                item._id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    // ✅ Delete Item from Cart
    const deleteItem = (id) => {
        setCart(cart.filter((item) => item._id !== id));
    };

    // ✅ Calculate total price
    const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">🛒 Your Cart</h1>

            {cart.length === 0 ? (
                <p className="text-lg text-gray-600">Your cart is empty. Start shopping!</p>
            ) : (
                <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">
                        Total Items: {totalItems}
                    </h3>

                    <ul className="divide-y divide-gray-300">
                        {cart.map((item) => (
                            <li key={item._id} className="flex items-center justify-between py-4">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.image[0]}
                                        alt={item.name}
                                        className="w-16 h-16 object-cover rounded-lg shadow"
                                    />
                                    <div>
                                        <h2 className="text-lg font-medium text-gray-800">{item.name}</h2>
                                        <p className="text-gray-600">
                                            ${item.price} {/* Display price only */}
                                        </p>
                                    </div>
                                </div>

                                {/* ✅ Quantity Controls */}
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => decreaseQuantity(item._id)}
                                        className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                                    >
                                        -
                                    </button>
                                    <span className="px-4 py-2 bg-gray-200 rounded-md">
                                        {item.quantity}
                                    </span>
                                    <button
                                        onClick={() => increaseQuantity(item._id)}
                                        className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                                    >
                                        +
                                    </button>
                                </div>

                                {/* ✅ Delete Button */}
                                <button
                                    onClick={() => deleteItem(item._id)}
                                    className="ml-4 px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* ✅ Total Price & Checkout */}
                    <div className="flex justify-between items-center mt-6 border-t pt-4">
                        <h2 className="text-2xl font-bold text-gray-800">Total: ${totalAmount.toFixed(2)}</h2>
                        <button className="px-6 py-3 bg-blue-500 text-white text-lg rounded-lg shadow hover:bg-blue-600">
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

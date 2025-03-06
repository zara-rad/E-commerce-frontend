import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Add product to cart or increase quantity
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item._id === product._id);
            if (existingItem) {
                return prevCart.map(item =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    // Remove item completely from cart
    const removeFromCart = (id) => {
        setCart(cart.filter(item => item._id !== id));
    };

    // Increase quantity
    const increaseQuantity = (id) => {
        setCart(cart.map(item =>
            item._id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    // Decrease quantity, remove if 0
    const decreaseQuantity = (id) => {
        setCart(cart.map(item =>
            item._id === id
                ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 0 }
                : item
        ).filter(item => item.quantity > 0));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export function useCart() {
    return useContext(CartContext);
}
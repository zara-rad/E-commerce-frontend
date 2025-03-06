

import { useContext } from "react";
import { MyContext } from "../context/context";

export default function Home() {
    const { products, cart, setCart } = useContext(MyContext);

    console.log("Products in Home:", products); // Debugging
    const addToCart = (item) => {
        const existItem = cart.find(product => product._id === item._id)
        if (existItem) {
            existItem.quantity++
            setCart([...cart])
        } else {
            item.quantity = 1
            setCart([...cart, item])

        }

    }
    console.log(cart)
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold text-center my-6">Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((item) => (
                    <div
                        key={item._id}
                        className="border-2 border-gray p-4 rounded-lg shadow-lg flex flex-col items-center w-80"
                    >
                        <h2 className="text-xl font-semibold">{item.title}</h2>

                        <img
                            src={item.image[0]}
                            alt={item.name}
                            className="w-48 h-48 object-cover my-2"
                        />

                        <p>{item.name}</p>
                        <h1 className="text-2xl font-bold text-green-600">${item.price}</h1>

                        <div className="mt-auto w-full flex justify-center">
                            <button onClick={() => addToCart(item)} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full">
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

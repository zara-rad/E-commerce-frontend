/* 
import { useContext } from "react";
import { MyContext } from "../context/context";

export default function Home() {
    // Consuming context/using context value
    const { products } = useContext(MyContext);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">

            <h1 className="text-3xl font-bold text-center my-6">Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                {products.map((item) => (
                    <div key={item._id} className="border-2 border-gray p-4 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold">{item.title}</h2>
                        <img src={item.image[0]} width={200} alt={item.name} className="my-2" />
                        <p>{item.name}</p>
                        <h1 className="text-2xl font-bold text-green-600">${item.price}</h1>
                        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
 */
import { useContext } from "react";
import { MyContext } from "../context/context";

export default function Home() {
    const { products } = useContext(MyContext);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold text-center my-6">Products</h1>

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((item) => (
                    <div
                        key={item._id}
                        className="border-2 border-gray p-4 rounded-lg shadow-lg flex flex-col items-center w-80"
                    >
                        <h2 className="text-xl font-semibold">{item.title}</h2>

                        {/* Image with fixed size */}
                        <img
                            src={item.image[0]}
                            alt={item.name}
                            className="w-48 h-48 object-cover my-2"
                        />

                        <p>{item.name}</p>
                        <h1 className="text-2xl font-bold text-green-600">${item.price}</h1>

                        {/* Button always at the bottom */}
                        <div className="mt-auto w-full flex justify-center">
                            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full">
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

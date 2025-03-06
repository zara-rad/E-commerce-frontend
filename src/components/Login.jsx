/* import React, { useContext } from 'react'
import { MyContext } from "../context/context"
import { useNavigate } from 'react-router-dom'

export default function Login() {
    //hame dataha tuye context hast save miknim mifrestim tu profile
    const { setUser } = useContext(MyContext)
    const navigate = useNavigate()

    const loginUser = (e) => {
        e.preventDefault()
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        fetch("http://localhost:5000/users/login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "content-type": "application/json" }
        })
            .then(res => {
                //extract token out from header
                const token = res.headers.get("token")
                localStorage.setItem("token", token)
                return res.json()
            })
            .then(result => {
                if (result.success) {
                    //user successfully logged in!
                    console.log(result)
                    //storing user in context
                    setUser(result.data)
                    navigate("/profile")
                }
            })

    }
    return (
        <div>
            <h1>This is Login Component</h1>
            <form onSubmit={loginUser}>
                <label>Email: <input type="email" name="email" /></label><br />
                <label>Passowrd: <input type="password" name="password" /></label><br />
                <button>login</button>

            </form>
        </div>
    )
}
 */

import React, { useContext } from 'react'
import { MyContext } from "../context/context"
import { useNavigate } from 'react-router-dom'

export default function Login() {
    // hame dataha tuye context hast save miknim mifrestim tu profile
    const { setUser } = useContext(MyContext)
    const navigate = useNavigate()

    const loginUser = (e) => {
        e.preventDefault()
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        fetch("http://localhost:5000/users/login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "content-type": "application/json" }
        })
            .then(res => {
                // extract token out from header
                const token = res.headers.get("token")
                localStorage.setItem("token", token)
                return res.json()
            })
            .then(result => {
                if (result.success) {
                    // user successfully logged in!
                    console.log(result)
                    // storing user in context
                    setUser(result.data)
                    navigate("/profile")
                }
            })
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-center text-2xl font-extrabold text-gray-900">Login</h2>
                <form onSubmit={loginUser} className="space-y-4">
                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    {/* Login Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

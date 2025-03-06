/* import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const navigate = useNavigate()
    const registerUser = (e) => {
        e.preventDefault()
        const user = {
            first_name: e.target.first_name.value,
            last_name: e.target.last_name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        fetch("http://localhost:5000/users", {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "content-type": "application/json" }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.success) {
                    navigate("/login")
                }
            })

    }
    return (
        <div>
            <h1>This is Register Component</h1>
            <form onSubmit={registerUser}>
                <label>First Name: <input type="text" name="first_name" /></label><br />
                <label>Last Name: <input type="text" name="last_name" /></label><br />
                <label>Email: <input type="email" name="email" /></label><br />
                <label>Passowrd: <input type="password" name="password" /></label><br />
                <input type="file" name="profile_image" /><br />
                <button>register</button>

            </form>
        </div>
    )
}
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

    const registerUser = (e) => {
        e.preventDefault();
        const user = {
            first_name: e.target.first_name.value,
            last_name: e.target.last_name.value,
            email: e.target.email.value,
            password: e.target.password.value
        };

        fetch("http://localhost:5000/users", {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "content-type": "application/json" }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.success) {
                    navigate("/login");
                }
            });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-center text-2xl font-extrabold text-gray-900">Register</h2>
                <form onSubmit={registerUser} className="space-y-4">
                    {/* First Name */}
                    <div>
                        <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            name="first_name"
                            id="first_name"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            name="last_name"
                            id="last_name"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    {/* Email */}
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

                    {/* Password */}
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

                    {/* Profile Image */}
                    <div>
                        <label htmlFor="profile_image" className="block text-sm font-medium text-gray-700">Profile Image</label>
                        <input
                            type="file"
                            name="profile_image"
                            id="profile_image"
                            className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                        />
                    </div>

                    {/* Register Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

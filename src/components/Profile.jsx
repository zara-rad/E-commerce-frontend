/* import React, { useContext } from 'react'
import { MyContext } from '../context/context'
import { Navigate } from 'react-router-dom'

export default function Profile() {
    //mikhaim info user ro neshun bedim inja hame chi tu context save shode
    const { user } = useContext(MyContext)
    //bcos Profile is a conponent by usin Navigate we keep it like a component


    const logoutUser = () => {
        setUser(null)
        localStorage.removeItem("token")
    }




    return (
        <>
            {user ?
                <div>
                    <h1>Profile Page</h1>
                    <h2>{user.first_name}{user.last_name}</h2>
                    <h3>{user.email}</h3>
                    <img src={user.profile_avatar} width={100} alt="" />
                    <button onClick={logoutUser}>Log out</button>
                </div> :
                <Navigate to="/login" />
            }
        </>
    )
}
 */


import React, { useContext } from 'react'
import { MyContext } from '../context/context'
import { Navigate } from 'react-router-dom'

export default function Profile() {
    // Get user information from context
    const { user, setUser } = useContext(MyContext)

    // Logout function
    const logoutUser = () => {
        setUser(null)
        localStorage.removeItem("token")
    }

    return (
        <>
            {user ? (
                <div className="min-h-screen bg-gray-50 flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
                        <div className="text-center mb-6">
                            {/* Profile Picture */}
                            <img
                                src={user.profile_avatar}
                                alt="Profile"
                                className="w-32 h-32 rounded-full mx-auto border-4 border-indigo-600 mb-4"
                            />
                            {/* User Name */}
                            <h1 className="text-3xl font-semibold text-gray-900">{user.first_name} {user.last_name}</h1>
                            <h2 className="text-xl text-gray-600">{user.email}</h2>
                        </div>

                        <div className="flex justify-center mt-6">
                            {/* Logout Button */}
                            <button
                                onClick={logoutUser}
                                className="w-40 py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <Navigate to="/login" />
            )}
        </>
    )
}

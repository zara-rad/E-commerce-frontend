import React, { useEffect, useState } from 'react'
import { MyContext } from './context'
//its a container of whole project
//it takes children as props
export default function Provider({ children }) {
    //at the moment we dont have product and user,so it will be null
    const [user, setUser] = useState(null)
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    //to get data and show in Home page
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    setProducts(result.data)
                    //to see all data should console log
                    //console.log(result)
                } else {
                    console.log(result.messagae)
                }
            })

    }, [])

    useEffect(() => {
        //check the token in localstorage
        const token = localStorage.getItem("token")
        if (token) {
            fetch("http://localhost:5000/users/verifytoken",
                {
                    method: "GET",
                    headers: { "token": token }
                })
                .then(res => {
                    console.log(res)
                    return res.json()
                })
                .then(result => {
                    if (result.success) {
                        setUser(result.data)
                    } else {
                        alert(result.message)
                    }
                })
        }
    }, [])


    return (

        <MyContext.Provider value={{ user, setUser, products, setProducts, cart, setCart }}>
            {children}
        </MyContext.Provider>
    )
}
{/* <Provider>
    <App></App>
</Provider> */}
import { useContext } from "react"
import { MyContext } from "../context/context"

export default function ProtectRoute() {
    const { user } = useContext(MyContext)
    return (
        <>
            {user ? <Navigate to="/profile" /> : children}
        </>
    )
}

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Profile from "./components/Profile"
import Register from "./components/Register"
import Cart from "./components/Cart"
import Navbar from "./components/Navbar"
import { CartProvider } from "./context/CartContext"; // Import CartProvider



console.clear()
function App() {

  return (

    <BrowserRouter>
      {/*   <nav>
        <Navbar />
       
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/register">Register</NavLink></li>
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li><NavLink to="/cart">Cart</NavLink></li>
        </ul>
      </nav> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App

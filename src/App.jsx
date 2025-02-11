import './App.css'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Shop from './Pages/Shop'
import Orders from './Pages/Orders'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Services from './Pages/Services'
import Login from './Pages/Login'
import Register from './Pages/Register'

function App() {

  return (
    <div className="overflow-x-hidden">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/services" element={<Services />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </div>
  )
}

export default App


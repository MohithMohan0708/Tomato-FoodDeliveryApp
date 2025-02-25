import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/Home/Home.jsx'
import Cart from './pages/Cart/Cart.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'
import LoginPopup from './components/LoginPopup/LoginPopup.jsx'
import Verify from './pages/Verify/Verify.jsx'
const App = () => {
  const [showLogin, setshowLogin] = useState(false)
  return (
    <>
      {showLogin ? <LoginPopup setshowLogin={setshowLogin} /> : <></>}
      <div className='app'>
        <Navbar setshowLogin={setshowLogin} ></Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/order' element={<PlaceOrder />}></Route>
          <Route path='/verify' element={<Verify />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App

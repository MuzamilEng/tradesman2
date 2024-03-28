import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './app/pages/Mian/Home'
import About from './app/pages/Mian/About'
import Profile from './app/pages/Profile'
import ProfileCards from './app/pages/BrowseTradesman'

import SearchUser from './app/pages/Mian/SearchUser'
import Register from './app/pages/Auth/Register'
import Login from './app/pages/Auth/Login'
import Contact from './app/pages/Mian/Contact'
import HowItWorks from './app/pages/Mian/HowItWorks'
import SingleProfile from './app/Component/TradesmanProfile/SingleProfile'
import Navbar from './app/Component/Common/Navbar'
import Checkout from './app/pages/Payment/Checkout'
import ReviewForm from './app/pages/Review/ReviewForm'
import Chatpage from './app/pages/Message/Chatpage'
import BrowseTradesman from './app/pages/BrowseTradesman'
import BookingForm from './app/pages/Booking/BookingForm'
import BookingPage from './app/pages/Booking/BookingPage';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <>
    {/* <Navbar /> */}
    <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/myProfile/:id' element={<Profile />} />
        <Route path='/browse-tradesman' element={<BrowseTradesman />} />
        <Route path='/profile/:id' element={<SingleProfile />} />
        <Route path='/searchUser' element={<SearchUser />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/howitworks' element={<HowItWorks />} />
        <Route path='/chat' element={<Chatpage />} />

        <Route
          path="/tradesman/book-appointment/:id"
          element={<BookingPage />}
        />
        <Route
          path="/tradesman/book-appointment/:id/booking-form"
          element={<BookingForm />}
        />
        <Route
          path="/tradesman/book-appointment/:id/checkout"
          element={<Checkout />}
        />
        <Route
          path="/tradesman/:id/review-form"
          element={<ReviewForm />}
        />
      </Routes>
    </>
  )
}


export default App
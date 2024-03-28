import React from 'react'
import Navbar from '../Component/Common/Navbar'
import Footer from '../Component/Common/Footer'

const Layout = ({children}) => {
  return (
    <main className='w-full'>
        <Navbar />
        <div className="w-full">{children}</div>
        <Footer />
    </main>
  )
}

export default Layout
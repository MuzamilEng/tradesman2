import React from 'react'
import { Link } from 'react-router-dom'
import { navData } from '../../Data'
import { useGlobalContext } from '../../UserContext/UserContext'

const Navbar = () => {
    const {isLogedUser} = useGlobalContext();
    const loggedUserId = isLogedUser?.tradesmanProfile?._id
  return (
    <>
    <nav className='flex items-center justify-between gap-2 p-[1vw] bg-[#e8f3df] opacity-80 sticky top-0 z-50' >
        <main className="w-full max-w-[70vw] flex items-center">
        <div className="w-full max-w-[3vw]"><img src="/img/logo.png" alt="tradesman" className='w-full' /></div>        
        <div className='ml-[4vw] flex items-start'>
    {navData?.map((item, index) => {
        return (
            <div className='ml-[2vw]' key={index}>
            <p key={index} className='cursor-pointer '>
                <Link className='text-vw font-medium hover:text-gray-700' to={item.url}>{item.title}</Link>
            </p>
            </div>
        )
        })}
    </div>
        </main>
      {
        isLogedUser ?
         <div className="flex">
            {loggedUserId && loggedUserId !== null && <Link to={`/profile/${loggedUserId}`}><button className='text-vw p-[0.5vw] w-fit rounded-md bg-amber-500 text-white'>Dashboard</button></Link>}
            <Link to={`/myProfile/${loggedUserId}`}><button className='text-vw p-[0.5vw] ml-2vw w-fit rounded-md bg-amber-500 text-white'>Profile</button></Link>
            <Link to={`/chat`}><button className='text-vw p-[0.5vw] ml-2vw w-fit rounded-md bg-amber-500 text-white'>Messages</button></Link>

        </div> :
         <div class="flex items-center">
        <Link to='/login'>
            <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            class="mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none"
            >
            Login
            </button>
        </Link>
        <Link to='/register'>
            <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            class="mr-3 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
            Register
            </button>
        </Link>
      </div> 
      }
          </nav>
    </>
  )
}

export default Navbar

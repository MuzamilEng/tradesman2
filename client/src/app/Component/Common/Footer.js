import React from 'react'
import { handymanFooter, handymanSocialLinks } from '../../Data'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <> 
    <footer className='bg-[#343C3E] p-4vw w-full'>
        <main className="grid grid-cols-4 gap-[2vw]">
            {handymanFooter?.map((item, index)=> {
                return <div className='w-full max-w-[20vw] p-vw' key={index}>
                    <h1 className='text-[1.2vw] text-white'>{item?.title}</h1>
                    <p className='text-[1vw] mt-[1vw] text-gray-300 w-full max-w-[18vw]'>{item?.info}</p>
                    {item?.button && <Link to={item?.link}><button className={`p-vw bg-gray-600 mt-vw w-full max-w-[12vw] text-vw text-white hover:bg-yellow-600 rounded-full`}>{item?.button}</button></Link>}
                    <section className='-ml-[1.8vw]'>{item?.lists?.map((list, idnex)=> (
                        <div className="w-full flex items-center p-0.5vw" key={idnex}>
                            <Link className='flex items-center hover:underline text-white'>
                               <span className='text-white text-vw'>{list?.icon}</span>
                                <span className='ml-[1vw] text-white text-vw'>{list?.title}</span>
                            </Link>
                        </div>
                    ))}</section>
                </div>
            })}
        </main>
        <section className="w-full row-center">
            <div className="w-full flex items-center max-w-[20vw]">
            {handymanSocialLinks?.map((item, index)=> {
                return <div className='w-full max-w-[20vw] p-vw' key={index}>
                    <Link to={item?.url} target="_blank" rel="noopener noreferrer" className=''>
                        <span className='text-white hover:text-yellow-500 p-2vw text-[2.5vw]'>{item?.icon}</span>
                    </Link>
                </div>
            })}
            </div>
        </section>
            <p className='w-full -mt-[2vw] text-center text-white text-vw'>© Copyright 2014 - 2024 RateMyTrade Pvt. Limited</p>
    </footer>
    </>
  )
}

export default Footer
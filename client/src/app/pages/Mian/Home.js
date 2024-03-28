import React from 'react'

import Hero from '../../Component/Common/Hero'
import Cards from '../../Component/Card/Cards'
import Reasons from '../../Component/Common/Reasons'
import Service from '../../Component/Service'
import { handymanTestimonials } from '../../Data'
import Layout from '../../Layout/Layout'

const Home = () => {
  return (
    <>   
    <Layout>
      <Hero />
      <div className='flex flex-col justify-center items-center p-[2vw]'>
        <h1 className='font-bold w-full max-w-[50vw] text-center  mt-[2vw] text-[2vw] p-[1vw]'>OUR SERVICES</h1>
        <div className='w-full max-w-[9vw]  border bottom-2 border-orange-400 ml-[1vw] -mt-[1vw]'></div>
        <p className='text-center p-[3vw] font-bold w-full max-w-[80vw] text-[1.5vw]'>The Handyman is a facilities management company providing premium maintenance & repair services to both corporate & residential clients. We offer one stop solution for all your needs with prices starting as low as Rs. 500* per hour only!</p>
        </div>
        <Cards />
      <Reasons />
      <section className='flex p-[5vw] bg-[#e8f3df]  '>
     <div className='flex flex-col items-center  text-vw w-full max-w-[50vw]'>
    <h1 className='font-bold w-full max-w-[50vw] text-center  mt-[2vw] text-[2vw]'>ABOUT OUR COMPANY</h1>    
    <p className='text-center text-[1.5vw] '>Premium maintenance services at your doorstep</p>
    <p className='text-center text-[1.2vw] w-full mt-vw max-w-[40vw]'>The Handyman is a maintenance & repair company that provides services to residential and commercial clients. The company is registered with Pakistan Engineering Council and also provides construction, renovation and complete facilities management services.</p>
    <button className='bg-orange-500 text-white p-[0.9vw] mt-[2vw] rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300'>see cleaning service detail</button>
    </div>
    <div className='grid grid-cols-2 gap-[2vw]'>
        <img src="/img/tradesman.avif" alt="image man" className='w-full max-w-[30vw] h-[20vw] object-cover m-[1.5vw] rounded-lg' />
        <img src="/img/tradesman2.jpg" alt="image man" className='w-full max-w-[30vw] h-[20vw] object-cover m-[1.5vw] rounded-lg' />
    </div>
    </section> 
      <article className="w-full bg-gray-100 p-2vw flex flex-col justify-center items-center col-center">
        <h1 className='font-bold w-full max-w-[50vw] text-center  mt-[2vw] text-[2vw] p-[1vw]'>SIMPLE PLANS. SIMPLE PRICING</h1>
        <div className='w-full max-w-[9vw]  border bottom-2 border-orange-400 ml-[1vw] -mt-[1vw]'></div>
        <p className='text-center p-[3vw] text-gary-800 w-full max-w-[80vw] text-[1.5vw]'>The Handyman offers a very simple and fixed pricing system. Every job has a fixed unit cost in Pakistani Rupees. In case the job is not listed in our price list, you will be billed as low as Rs. 500* per hour only. This makes our service both affordable and transparent giving you complete satisfaction and peace of mind. See our prices here.</p>
        </article>
      <Service />
      <main className="w-full bg-gray-800 p-3vw row-center">
        {handymanTestimonials?.map((item, index)=> (
          <div className='flex w-full max-w-[20vw] items-center' key={index}>
            <span className='text-2vw text-yellow-600'>{item?.icon}</span>
            <span className='text-[1.2vw] ml-0.5vw text-white'>{item?.title}</span>
          </div>
        ))}
      </main>
    </Layout>
    </>
  )
}

export default Home

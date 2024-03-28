import React from 'react'

const Hero = () => {
  return (
    <>
     <section className='bg-cover bg-center h-screen' style={{backgroundImage:`url('../images/main1.jpg')`}}>
     <h1 className='font-white text-[3vw] text-white grid place-content-center place-items-center h-full'>WE OFFER PREMIUM
     <h1 className='font-bold'>PLUMBING SERVICES</h1>
     </h1>
     <button className='p-[1.2vw] bg-orange-500 rounded-full  hover:border-blue-500 transform translate-y-[-15vw] translate-x-[42vw] hover:bg-transparent transition-all duration-300 text-white'>see cleaning service detail</button>
   
    </section> 
    </>
  )
}

export default Hero

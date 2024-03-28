import React from 'react'
import { aboutData } from '../../Data'
import Reasons from '../../Component/Common/Reasons';
import AboutCards from '../../Component/Card/AboutCards';
import Layout from '../../Layout/Layout';
const About = () => {
  return (
    <Layout>
    <main >
    <div className='w-full'>
    <h1 className='bg-slate-200 p-[3vw] text-[2vw] w-full'>ABOUT US</h1>   
    </div>
    <div className=' p-[1.5vw] h-[34vw]'>
    <img src="/img/aboutus.jpg" alt="" className='w-full h-full'/>
    </div>
    <section className='grid grid-cols-3 gap-[2vw] place-content-center place-items-start w-full p-[3vw] bg-white '>
        { aboutData?.map((elem,i)=>(
         <AboutCards key={i} title={elem?.title} info={elem?.info} icon={elem?.icon} />
      ))}
    </section>
    <Reasons />
    </main>
    </Layout>
  )
}

export default About

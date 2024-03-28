import React from 'react'
import { Icon } from '@iconify/react';
import { handymanReason } from '../../Data';

const Reasons = () => {
  return (
    <main className='w-full bg-gray-100 flex'>
        <img src="/img/trade3.jpg" alt="remorte" className="w-full max-w-[50vw] object-cover" />
        <section className='w-full p-2vw'>
            <h1 className='text-[1.5vw] font-medium text-gray-900'>REASONS TO CHOOSE US</h1> 
            <p className='text-[1.2vw] text-gray-600 w-full max-w-[40vw]'>The Handyman provides a variety of services including construction, renovation, and maintenance & repair. Choose us because we are:</p>
            <div className="grid p-2vw grid-cols-2 gap-3">
                {handymanReason?.map((item, index)=> (
                    <div key={index} className='w-full m-vw max-w-[20vw]'>
                        <p className='flex items-center'><Icon icon="eva:arrow-up-fill" className='text-vw text-yellow-500' /><span className='text-gray-900 text-[1.2vw] ml-0.5vw font-medium'>{item?.title}</span></p>
                        <p className='text-[1vw] ml-2vw w-full text-gray-600 mt-vw'>{item?.info}</p>
                    </div>
                ))} 
            </div>
        </section>
    </main>
  )
}

export default Reasons
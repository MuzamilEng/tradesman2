import React from 'react';
import { Icon } from '@iconify/react';

const Service = () => {
    const array = [{title :"Call or book online"}, {title :"We schedule the visit"}, {title :"Handyman arrives & completes the job"}, {title: "Pay when the job is done"}, {title: "Follow up feedback call to ensure satisfaction"}]
  return (
    <article className='w-full p-2vw bg-white col-center'>
        <h1 className='text-[1.2vw] font-medium'>READY TO TRY OUR SERVICES?</h1>
        <div className="w-full bg-gray-100 mt-2vw flex">
            <section className="w-full max-w-[30vw] p-2vw">
                <h1 className='text-[1vw] font-medium'>HOW IT WORKS:</h1>
                <div className="mt-vw">
                    {array?.map((list, index)=> (
                        <div className='flex w-full max-w-[20vw] items-start' key={index}>
                            <Icon icon="teenyicons:tick-circle-outline" className='text-vw mt-[0.3vw] text-yellow-600' />
                            <p className='text-vw text-black ml-0.5vw'>{list?.title}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="w-full max-w-[35vw]">
                <img className='w-full h-[25vw]' src="https://www.mrhandyman.com/us/en-us/mr-handyman/_assets/expert-tips/images/Local-blogs-images/mrh-blog-top-15-reasons-to-have-a-handyman-service-on-you2.webp" alt="" />
            </section>
            <section className="w-full max-w-[30vw] bg-yellow-500 p-4vw">
                <h1 className='text-white text-[1.3vw] font-medium'>Want to talk?</h1>
                <p className='text-white w-full max-w-[20vw] mt-vw text-[1vw]'>We are happy to answer any queries you may have. You may also contact us from the link below:</p>
                <button className='text-vw bg-white mt-vw text-gray-700 p-vw rounded-full w-full max-w-[11vw]'>Contact Trademan</button>
            </section>
        </div>
    </article>
  )
}

export default Service
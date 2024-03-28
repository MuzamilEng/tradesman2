import React from 'react'
import Layout from '../../Layout/Layout'
import { Icon } from '@iconify/react'

const Contact = () => {
  return (
    <Layout>
    <main className='w-full col-center p-2vw'>
        <h1 className='text-[1.5vw] italic font-medium text-black'>We would love to hear from you!</h1>
        <p className='text-vw text-gray-600 w-full max-w-[80vw] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores itaque voluptates doloribus, quaerat cupiditate sunt maiores facere tenetur iusto eveniet veniam tempore reprehenderit neque nemo modi praesentium error facilis. Voluptatibus!</p>
        <article className="w-full flex items-start mt-2vw bg-white rounded-lg p-2vw max-w-[80vw] border-[1px]">
            <section className="w-full max-w-[40vw] p-vw">
                <img src="/img/mail.jpg" alt="mail" className='w-full h-[30vw] rounded-2xl' />
            </section>
            <section className="w-full max-w-[40vw] ml-2vw p-2vw">
                <h1 className='text-[1.5vw] font-bold text-black'>Get in touch</h1>
                <div className="flex mt-vw items-center w-full max-w-[35vw] bg-gray-100 border-[1px] rounded-xl focus:outline-none">
                <Icon icon="mdi:account" className="text-2vw text-gray-500" />
                    <input type="text" placeholder='jhon doe' className='text-vw w-full p-[0.7vw] border-none focus:outline-none' />
                </div>
                <div className="flex mt-vw items-center w-full max-w-[35vw] bg-gray-100 border-[1px] rounded-xl focus:outline-none">
                <Icon icon="tabler:mail-filled" className="text-2vw text-gray-500" />
                    <input type="email" placeholder='jhon@example.com' className='text-vw w-full p-[0.7vw] border-none focus:outline-none' />
                </div>
                <div className="flex mt-vw items-center w-full max-w-[35vw] bg-gray-100 border-[1px] rounded-xl focus:outline-none">
                    <textarea type="text" placeholder='enter your message....' rows={7} className='text-vw w-full p-[0.7vw] border-none focus:outline-none'></textarea>
                </div>
                <button className='p-[0.7vw] bg-amber-300 w-full hover:bg-amber-400 text-white text-vw rounded-md mt-vw'>Submit</button>
            </section>
        </article>
    </main>
    </Layout>
  )
}

export default Contact
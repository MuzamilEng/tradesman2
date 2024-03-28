import React from 'react'
import Layout from '../../Layout/Layout'
import { Link } from 'react-router-dom'
import { howItWorks } from '../../Data'

const HowItWorks = () => {
  return (
    <main>
        <Layout>
            <article className="w-full p-2vw bg-amber-200 h-[30vw]">
                <div className="flex items-center ml-[3vw] mt-vw">
                    <Link to="/userprofiles">
                    <h1 className="text-[1.5vw] text-amber-800 hover:underline font-medium">Tradesmen</h1>
                    </Link>
                    <Link to="/searchTrademen" className='ml-3vw'>
                    <h1 className="text-[1.5vw] text-amber-800 hover:underline font-medium">Search</h1>
                    </Link>
                     </div>
                <section className="w-full flex items-start p-2vw">
                <div className="w-full p-vw max-w-[50vw]">
                <h1 className="text-[2vw] text-amber-800 italic font-medium">How It Works?</h1>
                    <p className="text-vw w-full max-w-[40vw] text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nostrum laudantium aliquid vitae eveniet modi sint corporis magni natus minima! Suscipit architecto culpa tempore cupiditate magni adipisci magnam quibusdam debitis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quo sit numquam voluptatem placeat sed soluta saepe aperiam quas earum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore reprehenderit tenetur illo ipsam optio assumenda ducimus odio. Sed voluptatum iste, architecto optio quod quam molestiae enim aperiam soluta quaerat quidem?</p>
                    <button className='w-full mt-vw max-w-[12vw] text-vw text-white p-[0.7vw] hover:bg-orange-600 rounded-md bg-orange-500'>Get Started</button>
                </div>
                <div className="w-full max-w-[40vw]">
                    <img src="/img/service3.avif" alt="services" className='w-full rounded-lg h-[20vw] object-cover' />
                </div>
                </section>
            </article>
            <main className="w-full bg-white p-2vw col-center">
                <div className="grid grid-cols-3 gap-4">
                    {howItWorks?.map((item, index)=> {
                        return <article className='w-full shadow-lg cursor-pointer transition_card max-w-[25vw] col-center p-vw rounded-md border-[1px]' key={index}>
                            <h1 className='text-[1.5vw] text-amber-800 font-semibold'>{item?.title}</h1>
                            <span className='text-[5vw] mt-vw text-amber-600 font-medium'>{item?.icon}</span>
                            <p className='text-vw mt-vw text-gray-900 w-full max-w-[25vw] text-center'>{item?.info}</p>
                        </article>
                    })}
                </div>
            </main>
        </Layout>
    </main>
  )
}

export default HowItWorks
import React from 'react'
import { cards } from '../../Data'

const Cards = () => {
  return (
    <>
    <div className='grid   grid-cols-3  place-content-center place-items-center  text-vw w-full p-[2vw] '>

     {
        cards.map((card) => {
            return (
                <div className="bg-[#e8f3df]  p-[1vw] w-full max-w-[28vw] rounded-lg m-vw h-[32vw] flex flex-col justify-center items-center shadow-lg">
                    <img src={card.img} alt="img" className='w-full max-w-[13vw]' />
                    <h3 className='font-bold p-[1vw] w-full text-center text-[1.4vw]'>{card.title}</h3>
                    <p className='text-center text-vw'>{card.info}</p>
                    <button className='bg-orange-500 text-white p-[0.9vw] mt-[2vw] rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300'>see cleaning service detail</button>
                </div>
            )
        })
     }
    </div>

    </>
  )
}

export default Cards

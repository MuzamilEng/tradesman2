import React from 'react'

const AboutCards = ({icon,title,info}) => {
  return (
    <>
     <div  className='  m-vw p-[1vw] w-full max-w-[30vw]'>
        <p className='text-[4vw] text-yellow-600 w-full '>{icon}</p>
        <h1 className='font-medium text-[1.5vw] mt-[1.5vw]'>{title}</h1>
        <p className='text-vw mt-[1.5vw]'>{info}</p>
     </div>
    </>
  )
}

export default AboutCards

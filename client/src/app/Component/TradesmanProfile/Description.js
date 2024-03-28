import React, { useEffect } from 'react'
import { tradesmanProfileForm } from '../../Data'
import { Controller, useForm } from 'react-hook-form'

const Description = ({control, handleDataChange}) => {
  return (
    <div>
         <main className="grid grid-cols-2 p-vw">
          {tradesmanProfileForm?.map((elem, i) => (
            <div  className='p-[1vw]'>
                <lable className='text-[1vw] font-medium' key={i}>{elem.lable}</lable> <br />
              {elem.type === "text" ? (
                <>
                <Controller 
                  name={elem?.name}
                  control={control}
                  rules={elem?.rules}
                  render={({ field }) => (
                    <input 
                    {...field}
                      className='w-full max-w-[30vw] p-[0.7vw] rounded-md focus:outline-none text-vw border-[1px] border-gray-300'
                      type={elem?.type} placeholder={elem?.placeholder} onChange={handleDataChange}
                      />
                  )}
                />
                </>
              ) :elem.type === "password" ? (
                <>
                  <Controller 
                  name={elem?.name}
                  control={control}
                  rules={elem?.rules}
                  render={({ field }) => (
                    <input 
                    {...field}
                      className='w-full max-w-[30vw] p-[0.7vw] rounded-md focus:outline-none text-vw border-[1px] border-gray-300'
                      type={elem?.type} placeholder={elem?.placeholder} onChange={handleDataChange}
                      />
                  )}
                />
                </>
              ) :
              elem.type === "number" ? (
                <>
                   <Controller 
                  name={elem?.name}
                  control={control}
                  rules={elem?.rules}
                  render={({ field }) => (
                    <input 
                    {...field}
                      className='w-full max-w-[30vw] p-[0.7vw] rounded-md focus:outline-none text-vw border-[1px] border-gray-300'
                      type={elem?.type} placeholder={elem?.placeholder} onChange={handleDataChange}
                      />
                  )}
                />
                </>
              ) :
              elem.type === "email" ? (
                <>
                   <Controller 
                  name={elem?.name}
                  control={control}
                  rules={elem?.rules}
                  render={({ field }) => (
                    <input 
                    {...field}
                      className='w-full max-w-[30vw] p-[0.7vw] rounded-md focus:outline-none text-vw border-[1px] border-gray-300'
                      type={elem?.type} placeholder={elem?.placeholder} onChange={handleDataChange}
                      />
                  )}
                />
                </>
              ) :(
                <>
                 <Controller 
                  name={elem?.name}
                  control={control}
                  rules={elem?.rules}
                  render={({ field }) => (
                    <textarea 
                    {...field}
                      className='w-full max-w-[30vw] p-[0.7vw] rounded-md focus:outline-none text-vw border-[1px] border-gray-300'
                      type={elem?.type} placeholder={elem?.placeholder} rows={4} onChange={handleDataChange}
                      ></textarea>
                  )}
                />
                </>
              )}
            </div>
          ))}
          </main>
    </div>
  )
}

export default Description
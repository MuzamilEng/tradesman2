import React, { useEffect, useState } from 'react'


const ProfileCard = ({ location,}) => {
  const userDetails = JSON.parse(localStorage.getItem('token'));
  const [showuserInitialDetails, setShowuserInitialDetails] = useState(null)
  const member = showuserInitialDetails?.user?.updatedAt;
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { month: 'short', day: '2-digit', year: 'numeric' };
  return date.toLocaleString('en-US', options);
};

  useEffect(()=> {
    if (userDetails && userDetails !== undefined){
      setShowuserInitialDetails(userDetails)
    }
  }, [])
  return (
    <>
      <main className='w-full max-w-[25vw] col-center shadow-md'>
        <div className="w-full max-w-[10vw] h-[10vw] rounded-full mt-vw border-[1px]">
        <img src={showuserInitialDetails?.user?.image ? showuserInitialDetails?.user?.image :"/img/avatar.png"} alt={'profile image'} className='w-full h-full rounded-full' />
        </div>
        <h1 className='font-medium text-[1vw] mt-[0.4vw]'>{ showuserInitialDetails?.user?.firstName ? showuserInitialDetails?.user?.firstName + " " + showuserInitialDetails?.user?.lastName  : 'John Doe'}</h1>
        <section className="w-full mt-vw flex p-vw justify-between items-center border-[1px]">
          <p className='text-vw text-gray-700'>Member Since</p>
          <p className='text-vw text-gray-700'>{member ? formatDate(member) : '2022'}</p>
        </section>
        <section className="w-full flex p-vw justify-between items-center border-[1px]">
          <p className='text-vw text-gray-700'>From</p>
          <p className='text-vw text-gray-700'>{location ? location : 'Pakistan'}</p>
        </section>
        
      </main>
    </>
  )
}

export default ProfileCard

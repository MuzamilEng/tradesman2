import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import ProfileCard from "../Component/Card/ProfileCard";
import { useAddTradesmanMutation, useGetTrademanByIdQuery, useUpdateTradesmanMutation } from "../store/storeApi";
import Description from "../Component/TradesmanProfile/Description";
import Map from "../Component/GoogleMap/Map";
import Portfolio from "../Component/TradesmanProfile/Portfolio";
import { useGlobalContext } from "../UserContext/UserContext";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  const {id} = useParams()
  const { data:profileData, isLoading } = useGetTrademanByIdQuery(id);
  const {tradesManProfile,setTradesManProfile} = useGlobalContext()
  const loggedUserId = JSON.parse(localStorage.getItem('token'));
  const [searchedLocation, setSearchedLocation] = useState(null)
  const navigate = useNavigate()
  const [addTradesman] = useAddTradesmanMutation();
  const [updateTradesman] = useUpdateTradesmanMutation();
  const [activeSection, setActiveSection] = useState('description');
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null
  })

  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      tradeType: profileData?.tradeType   || "",
      hourlyRate: profileData?.hourlyRate || "",
      location: profileData?.location     || "",
      phoneNumber: profileData?.phoneNumber || "",
      description: profileData?.description ||"",
      lat: profileData?.lat ||  coordinates?.lat || 0, 
      lng: profileData?.lng || coordinates?.lng  || 0,
      gigImage1: profileData?.gigImage1 || "",
      gigImage2: profileData?.gigImage2 || "",
      gigImage3: profileData?.gigImage3 || "",
    
    }
  });
  
  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setValue(name, value);
    setTradesManProfile({...tradesManProfile, [name]: value});
  };
  

  const renderSection = () => {
    switch (activeSection) {
      case 'description':
        return <Description control={control} handleDataChange={handleDataChange} />;
      case 'location':
        return <Map setSearchedLocation={setSearchedLocation} lat={profileData?.lat} lng={profileData?.lng}/>;
      case 'portfolio':
        return <Portfolio image1={profileData?.gigImage1} image2={profileData?.gigImage2} image3={profileData?.gigImage3} />;
      default:
        return null;
    }
  }


  const onSubmit = async (data, e) => {
    e.preventDefault();
    const formData = new FormData();
   try{
    for (const key in data) {
      if (data[key] !== undefined) {
        formData.append(key, data[key]);
      }
    }
    formData.append('userId', loggedUserId?.user._id);
    formData.append('image', tradesManProfile?.image)
    formData.append('gigImage1', tradesManProfile?.gigImage1);
    formData.append('gigImage2', tradesManProfile?.gigImage2);
    formData.append('gigImage3', tradesManProfile?.gigImage3);
    formData.append('lat', coordinates?.lat);
    formData.append('lng', coordinates?.lng)
    try {
      if (id) {
        const result = await updateTradesman({ id, data: formData });
        // console.log(result, 'update');
        toast.success('Profile successfully updated', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
        });
        setTimeout(() => {
          navigate(`/profile/${id}`);
        }, 3000);
      } else {
        const result = await addTradesman(formData);
        // console.log(result, 'add');
        toast.success('Profile successfully created', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
        });
        setTimeout(() => {
          navigate(`/profile/${id}`);
        }, 3000);
      }
    } catch (error) {
      toast.error('An error occurred.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
      });
    }
   }catch(err){
    toast.error(err.message)
   }
  };


  useEffect(() => {
    // console.log(searchedLocation, 'searchedLocation');
    const lat = Number(searchedLocation?.center?.[0]) || 0;
    const lng = Number(searchedLocation?.center?.[1]) || 0;
  
    setCoordinates({ ...coordinates, lat, lng });
  }, [searchedLocation]);

  if (isLoading) {
    return (
      <div className='flex justify-center items-center h-[100vh]'>
   <div role="status">
            <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span class="sr-only">Loading...</span>
        </div>
        </div>
    );
  }

  return (
    <div className="w-full h-full">
      <h1 className="text-[2vw] text-yellow-600 underline mt-vw font-medium text-center w-full">Complete your profile</h1>
      <main className='flex p-vvw mt-2vw w-full'>
        <div className="w-full max-w-[20vw] h-[21.3vw] mt-[1vw] ml-[5vw] border-[1px] rounded-md ">
          <ProfileCard  />
        </div >
        <ToastContainer />
        <form className='w-full h-[30vw] m-vw rounded-md shadow-md border-[1px] ' onSubmit={handleSubmit(onSubmit)}>
          <section className="flex border-b-[1px] border-yellow-600 p-vw items-center">
            <p onClick={() => {setActiveSection('description')}} className={`text-[1vw] ${activeSection === 'description' ? 'text-yellow-600 underline font-semibold' : ''} cursor-pointer ml-vw font-medium`}>Description</p>
            <p onClick={() => {setActiveSection('location')}} className={`text-[1vw] ${activeSection === 'location' ? 'text-yellow-600 underline font-semibold' : ''} cursor-pointer ml-vw font-medium`}>Location</p>
            <p onClick={() => {setActiveSection('portfolio')}} className={`text-[1vw] ${activeSection === 'portfolio' ? 'text-yellow-600 underline font-semibold' : ''} cursor-pointer ml-vw font-medium`}>Portfolio</p>
          </section>
          {renderSection()}
          <input type="submit" value='Submit' className='bg-yellow-600 hover:bg-yellow-500 p-[0.5vw] text-vw ml-[1vw] text-white rounded-md shadow-lg cursor-pointer' />
        </form>
      </main>
    </div>
  );
};

export default Profile;

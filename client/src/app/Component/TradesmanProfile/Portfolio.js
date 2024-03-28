import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useGlobalContext } from '../../UserContext/UserContext';


export const ImageInput = ({ id, name, selectedImage, handleImageChange }) => {
  return (
    <div className='relative m-vw w-full bg-gray-300 cursor-pointer hover:bg-gray-400 overflow-hidden max-w-[20vw] h-[12vw] rounded-md border-2'>
      <label htmlFor={id} className='relative bg-gray-300'>
        <img src={selectedImage ? selectedImage : " "} alt={selectedImage ? '' : ''} className='w-full h-full z-10 object-cover' />
        {!selectedImage && (
          <Icon icon='ant-design:camera-filled' className='text-3vw text-white absolute top-[4vw] left-[8vw] z-50' />
        )}
      </label>
      <input type='file'  id={id} name={name} onChange={handleImageChange} className='sr-only hover:cursor-pointer' />
    </div>
  );
};

const Portfolio = ({image1, image2, image3}) => {
  const {tradesManProfile,setTradesManProfile} = useGlobalContext()
  const [userInfo, setUserInfo] = useState({
    gigImage1: "", gigImage2: "", gigImage3: "",
  });
  const [selectedFileURL, setSelectedFileURL] = useState({
    gigImage1: image1 || "", gigImage2: image2 || "", gigImage3: image3 || "",
  });

  const navigate = useNavigate();
  const {  setValue } = useForm({
    defaultValues: {
      gigImage1: "",
      gigImage2: "",
      gigImage3: "",
    },
  });
  const handleImageChange = (name, e) => {
    const file = e.target.files[0];
    if (file) {
      setValue(name, file);
      const imageURL = URL.createObjectURL(file);
      setSelectedFileURL((prevSelectedFileURL) => ({
        ...prevSelectedFileURL,
        [name]: imageURL,
      }));
      setTradesManProfile({ ...tradesManProfile, [name]: file });
    }
  };
  return (
    <div className="mt-vw w-full">
    <h1 className='text-[1.5vw] font-medium text-center'>Showcase Your Services In A Gallery</h1>
    <section className="w-full p-[0.5vw]">
      <h1 className='text-vw text-black font-semibold'>Images (up to 3)</h1>
      <div className="flex mt-vw items-center">
        <ImageInput id='gigImage1' name='gigImage1' selectedImage={selectedFileURL?.gigImage1} handleImageChange={(e)=>handleImageChange('gigImage1',e)} />
        <ImageInput id='gigImage2' name='gigImage2' selectedImage={selectedFileURL?.gigImage2} handleImageChange={(e)=>handleImageChange('gigImage2',e)} />
        <ImageInput id='gigImage3' name='gigImage3' selectedImage={selectedFileURL?.gigImage3} handleImageChange={(e)=>handleImageChange('gigImage3',e)} />
      </div>
    </section>
  </div>
  );
};


export default Portfolio;
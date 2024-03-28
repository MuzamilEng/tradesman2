import React from "react";
// import Layout from "../../Layout/Layout";

import { Link, useNavigate, useParams } from "react-router-dom";
// import { useGetTrademanByIdQuery } from "../store/storeApi";
import axios from "axios";

import { useGetTrademanByIdQuery } from "../../store/storeApi";

const BookingPage = () => {
  const { id } = useParams();
  const { data } = useGetTrademanByIdQuery(id);
  const navigate = useNavigate();
  const loginTokken  = JSON.parse(localStorage.getItem('token'));
  const userToken = loginTokken?.token
  const loggedUserId = loginTokken?.user?._id
  const accessChat = async (userId) => {
    console.log(userId, "chat access");

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      };
      const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/chat`, { userId }, config);
      if (data){
        navigate('/chat')
      }
    } catch (error) {
      console.log(error.message, "error");
    }
  };

  return (
    <>
      <div class="p-16">
        <div class="p-8 bg-white shadow mt-20">
          {" "}
          <div class="grid grid-cols-1 md:grid-cols-3">
            {" "}
            <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              {" "}
              <div>
                {" "}
                <p class="font-bold text-yellow-400 text-xl">
                  {data?.ratings}
				          <i class="fas fa-star filled"></i>
                </p>{" "}
                <p class="text-gray-400">Rating</p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p class="font-bold text-green-600 text-xl">
                  {data?.hourlyRate} PKR
                </p>{" "}
                <p class="text-gray-400">Rate per hour</p>{" "}
              </div>{" "}
            </div>{" "}
            <div class="relative">
              {" "}
              <div class="w-full max-w-[14vw] h-auto md:h-[14vw] bg-transparent mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center">
                <img
                  src={data?.user?.image ? data?.user?.image : "/img/man.png"}
                  class="img-fluid w-full max-w-[14vw] rounded-full h-auto md:h-[14vw]"
                  alt="Users"
                />
              </div>{" "}
            </div>{" "}
            <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button
                onClick={() =>
                  navigate(
                    `/tradesman/book-appointment/${data?._id}/booking-form`
                  )
                }
                class="text-white py-2 px-4 md:w-full uppercase rounded bg-orange-400 hover:bg-orange-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                {" "}
                Book Appointment
              </button>{" "}
              <button onClick={()=> accessChat(data?.user?._id)} class="text-white py-2 px-4 md:w-full uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Message
              </button>
              
            </div>{" "}
          </div>{" "}
          <div class="mt-20 text-center border-b pb-12">
            {" "}
            <h1 class="text-4xl font-medium text-gray-700">
              {data?.user?.firstName}
              &nbsp;
              {data?.user?.lastName}
            </h1>{" "}
            <p class="font-light text-gray-600 mt-3">{data?.tradeType}</p>{" "}
            <p class="mt-8 text-gray-500">{data?.location}</p>{" "}
            <p class="mt-2 text-gray-500">({data?.ratings}) Reviews</p>{" "}
          </div>{" "}
          <div class="mt-8 flex flex-col justify-center">
            {" "}
            <p class="text-gray-600 text-center font-light lg:px-16">
              {data?.description}
            </p>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;

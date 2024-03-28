import React, { useEffect, useState } from "react";
import { useGetAllTradesmenQuery } from "../store/storeApi";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Form from "../Component/Form";
import Layout from "../Layout/Layout";
import TradesmanCard from "../Component/Card/TradesmanCard";
import ServiceCard from "../Component/Card/ServiceCard";
import { servicesCards } from "../Data";

const BrowseTradesman = () => {
  let { data:tradesmanProfile, isLoading, isError } = useGetAllTradesmenQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{isError.message}</h1>;
  }
  const CustomPrevArrow = (props) => (
    <span {...props} className="text-vw text-black absolute cursor-pointer top-[8vw] left-0vw z-50">
    <FontAwesomeIcon icon={faArrowLeft} className='text-2vw text-black  rounded-full hover:bg-gray-100 bg-white p-[0.7vw] text-center' />
  </span>);
  const CustomNextArrow = (props) => (
      <span {...props} className="text-vw text-black absolute cursor-pointer top-[8vw] right-vw">
    <FontAwesomeIcon icon={faArrowRight} className='text-2vw text-red-800 rounded-full hover:bg-gray-100 bg-white p-[0.7vw] text-center' />
  </span> );

const settings = { dots: false, prevArrow: <CustomPrevArrow />, nextArrow: <CustomNextArrow />, arrows: true, infinite: true, speed: 500, slidesToShow: 4, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000 };


  return (
    <Layout>
    <main className="overflow-x-hidden">
      <Form />
      <main className="pl-2vw">
      <div className="grid w-full gap-vw m-vw  grid-cols-1">
      <Slider {...settings}>
      {tradesmanProfile?.map((card , index) => (
        <main key={index}>
          <TradesmanCard key={card._id} username={card?.user?.firstName} image={card?.user?.image} occupation={card?.tradeType} id={card._id} />
        </main>
      ))}
      </Slider>
      </div>
      </main>
      <main className="w-full p-2vw">
        <h1 className="text-[1.5vw] font-medium italic">Chechout the best trending services</h1>
        <div className="pl-2vw">
        <div className="grid w-full gap-vw m-vw  grid-cols-1">
        <Slider {...settings}>
        {servicesCards?.map((card) => (
          <ServiceCard key={card.id} card={card} />
        ))}
      </Slider>
      </div>
        </div>
      </main>
    </main>
    </Layout>
  );
};

export default BrowseTradesman;
import React from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useGetTrademanByIdQuery } from "../../store/storeApi";
import Navbar from "../Common/Navbar";
import Slider from "react-slick";
import { sliderImages } from "../../Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../Layout/Layout";
import PinLocation from "../GoogleMap/PinLocation";
import Reviews from "./Reviews";
const SingleProfile = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetTrademanByIdQuery(id);
  const navigate = useNavigate();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  const CustomPrevArrow = (props) => (
    <span
      {...props}
      className="text-vw text-black absolute cursor-pointer top-[8vw] left-0vw z-50"
    >
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="text-2vw text-black  rounded-full hover:bg-gray-100 bg-white p-[0.7vw] text-center relative left-[10vw] top-[3vw]"
      />
    </span>
  );
  const CustomNextArrow = (props) => (
    <span
      {...props}
      className="text-vw text-black absolute cursor-pointer top-[8vw] right-vw "
    >
      <FontAwesomeIcon
        icon={faArrowRight}
        className="text-2vw text-red-800 rounded-full hover:bg-gray-100 bg-white p-[0.7vw] text-center relative -left-[10vw] top-[3vw]"
      />
    </span>
  );
  // console.log(data);
  const settings = {
    dots: true,
    infinite: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  let arr = []
  arr.push(data?.gigImage1)
  arr.push(data?.gigImage2)
  arr.push(data?.gigImage3)
  return (
    <Layout>
      <div className="overflow-hidden">
        <main className="flex justify-around  w-full p-[2vw] ">
          <div className="  w-full max-w-[50vw] ">
            <h1 className="text-[1.5vw] font-bold">
              i will be your {data?.tradeType}
            </h1>
            <div className=" flex gap-[1vw] w-full -ml-[1vw]">
              <div className="w-full max-w-[10vw] h-[10vw]">
                <img
                  src={data?.user?.image}
                  alt="profile image"
                  className="w-full h-full rounded-full mt-[3vw]"
                />
              </div>
              <div>
                <h1 className="font-medium mt-[5vw] w-full text-[1.5vw]">
                  {data?.user?.firstName}
                </h1>
                <p className="text-[1vw] w-full">
                {data?.location}
                </p>
                <Link to="/chat">
                <button className="bg-transparent border-[1px] border-solid border-yellow-700 p-[0.4vw] mt-[1vw] rounded-md transition-all duration-200 hover:bg-yellow-700 hover:shadow-lg hover:text-white text-[1vw]">
                  contact me
                </button>
                </Link>
              </div>
            </div>
            <div className="w-full mt-[2vw]">
              <h1 className="font-medium text-[1.5vw]">
                Description
              </h1>
              <p className="text-[1vw] w-full">
                {data?.description}
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg w-full max-w-[25vw] border-solid border-[2px] border-amber-800">
            <div className=" grid grid-cols-3 place-content-center place-items-center w-full ">
              <button className="text-[1.2vw] w-full border-solid border-yellow-700 border-[1px] p-[0.4vw]">
                Basic
              </button>
              <button className=" text-[1.2vw] w-full border-solid border-yellow-700 border-[1px] p-[0.4vw]">
                Standard
              </button>
              <button className="text-[1.2vw] w-full border-solid border-yellow-700 border-[1px] p-[0.4vw]">
                premium
              </button>
            </div>
            <div className="w-full p-[1vw] flex justify-between mt-[2vw]">
              <h1 className="font-medium text-[1.2vw] mt-[1vw]">
                Website bug fixing a bug{" "}
              </h1>
              <p className="mt-[0.8vw] text-[1.4vw] font-semibold">$25</p>
            </div>
            <div className="w-full max-w-[40vw] p-[1vw] mt-[1vw]">
              <p className="text-[1vw]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
                molestiae repudiandae incidunt rerum tenetur, harum ut aliquam,
                !
              </p>
              <p className="text-[1vw] font-semibold mt-[2vw]">
                1 Day Deleivery <span className="mx-[2vw]"> 2 revisions</span>
              </p>
              <p className="text-[1vw] font-semibold">✓ 1 pougo</p>
              <p className="text-[1vw] font-semibold"> ✓content upload</p>
            </div>
            <div className="p-[1vw]">
              <button className="p-[0.4vw] shadow-sm bg-black text-white w-full text-[1vw]">
                continue
              </button>
            </div>
          </div>
        </main>
        <div className="w-full mt-[2vw] p-[2vw]">
              
              <Reviews />
        </div>
        <div className="  w-[100vw] pb-[3vw] mt-[5vw]">
          <Slider {...settings}>
            {arr.map((elem, i) => (
              <div className=" h-[25vw] w-full m-auto" key={i}>
                <img
                  src={elem ? elem : '/images/tradesman.avif'}
                  alt="gig images"
                  className="w-[70vw] object-cover m-auto  rounded-md"
                  key={i}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <PinLocation lat={data?.lat ? data?.lat : 74.2631971} lng={data?.lng ? data?.lng : 31.5042343} />
    </Layout>
  );
};

export default SingleProfile;

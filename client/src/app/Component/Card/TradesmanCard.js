import React from "react";
import { Link } from "react-router-dom";

function TradesmanCard({ id,image, username, occupation }) {
  return (
  
        <div className="projectCard m-vw">
      <img src={image ? image : '/img/man.png'} className="h-[10vw]" alt="" />
      <div className="info">
        <img src={image ? image : '/img/man.png'} alt="" />
        <div className="texts">
          <h2>{occupation}</h2>
          <span className="text-vw">{username}</span>
        </div>
      </div>
        <div className="row-center w-full">
        <Link to={`/profile/${id}`}>
        <button className="text-vw p-0.5vw m-vw bg-amber-500 text-white rounded-md ">View Profile</button>
       </Link>
       <Link to={`/tradesman/book-appointment/${id}`}>
        <button className="text-vw p-0.5vw m-vw bg-amber-500 text-white rounded-md ">Book Now</button>
       </Link>
        </div>
    </div>
  );
}
export default TradesmanCard;

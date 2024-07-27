import React from "react";
import TravelImg from "../../assets/hangingbridge.jpg";
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";
import NatureVid from "../../assets/video/videoplayback.mp4";

const Banner = () => {
  return (
    <>
      <div className="min-h-[550px] bg-gray-100">
        {/*1st section*/}
        <div className="py-10 bg-white text-black">
          <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2">
            {/*left*/}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                Welcome To Jamiri
              </h2>
              <p className="text-lg md:text-xl">
                A serene Arunachal village, embraced by majestic mountains and a
                meandering river.
              </p>
            </div>
            {/*right side*/}
            <div className="flex-1 relative ">
              <img
                className="mt-4 z-20 relative "
                alt="tv-image"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              />
              <video
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10"
                playsInline
                autoPlay={true}
                muted
                loop
              >
                <source src={NatureVid} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

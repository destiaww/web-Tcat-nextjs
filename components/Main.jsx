import Link from "next/link";
import React from "react";

const Main = () => {
  return (
    <div id="home" className="w-full h-full text-center">
      <div className="max-w-[1240px] w-full h-screen mx-auto p-2 flex justify-center items-center">
      <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
		  </div>
        <div>
          <h1 className="pt-10 py-2 text-white" >
            Welcome to <span className="text-[#e6a85c]">Tcat</span>
          </h1>
          <h1 className="py-2 text-white">
           Fun and Event
          </h1>
          <p className="py-4 text-white sm:max-w-[70%] m-auto">
            pengen ikutan event, nonton konser, tapi bingung war tiket? tcat is here
          </p>
          <div className="flex pt-10 items-center justify-center max-w-[330px] m-auto py-4">
              <div className="bg-gradient-to-r from-[#F99417] to-[#E4C988] rounded-full shadow-md shadow-[#F99417] px-10 py-4 cursor-pointer hover:scale-110 ease-in duration-300 font-semibold text-white">
               <Link href="/#event">check event!</Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

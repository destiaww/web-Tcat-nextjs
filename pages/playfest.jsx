import Image from 'next/image';
import { TiDelete } from "react-icons/ti";
import { AiFillMinusCircle } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import React, { useState } from "react";
import playfestImg from '../public/assets/event/playfest.png'

const playfest = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const resetCount = () => {
    setCount(0);
  };
  return (
    <div className='w-full bg-gray-900'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={playfestImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>play musiv festival 2023</h2>
          <h3>Music Fest / Malang / Mei 2023</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 text-white'>
        <div className='col-span-4'>
          <p>Music Festival</p>
          <h2>Play Music festival 2023</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptate sint, ut, consequuntur soluta quisquam sunt 
            corrupti velit animi, architecto quis excepturi asperiores 
            quo temporibus magni distinctio eveniet sapiente minima. Itaque?Lorem ipsum dolor sit amet
            , consectetur adipisicing elit. Repudiandae doloribus illo officia repellendus perspiciatis 
            molestiae debitis, facere quidem veniam id voluptatem ab in, dolor accusantium, quam vitae fugiat esse. 
            Saepe.
          </p>
        </div>
        <div className='bg-gradient-to-r from-[#f99417] to-[#e4c988] col-span-4 md:col-span-1 shadow-md shadow-[#f99471] rounded-xl py-4 text-white'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Detail Of Event</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />19 mei 2023
              </p>
              <p className='text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> 15.00 - end
              </p>
              <p className=' text-white py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Graha Cakrawala UM
              </p>
            </div>
          </div>
        </div>
        <div>
        <div className="bg-gradient-to-r from-[#F99417] to-[#E4C988] rounded-full shadow-sm shadow-[#F99417] px-2 py-2 cursor-pointer hover:scale-110 ease-in duration-300 font-semibold text-white">
                <Link href="/#event">back</Link>
              </div>
        </div>
        <div className="">
          <div className="flex justify-center items-center">
            <button onClick={incrementCount}>
              <BsFillPlusCircleFill />
            </button>
            <h1 className="text-sm ml-4 mr-4">{count}</h1>
            <button onClick={decrementCount} className="mr-2">
              <AiFillMinusCircle />
            </button>
            <button onClick={resetCount}>
              <TiDelete />
            </button>
             
          </div>
      </div>
    </div>
    </div>
  );
};

export default playfest;

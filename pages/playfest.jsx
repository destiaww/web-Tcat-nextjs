import Image from 'next/image';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import playfestImg from '../public/assets/event/playfest.png'

const playfest = () => {
  return (
    <div className='w-full bg-black'>
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
        <div className='bg-gray-500 col-span-4 md:col-span-1 shadow-lg shadow-gray-300 rounded-xl py-4 text-white'>
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
        <Link href='/#event'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default playfest;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <h2 className='py-4 flex justify-center'>Bout D</h2>
          <p className='py-2 text-gray-600'>
           boutD merupakan website pribadi pertama saya sebagai Lorem ipsum dolor sit amet, 
           consectetur adipiscing elit. Aenean molestie odio ac libero auctor, sed vestibulum 
           tortor placerat. Vivamus eget turpis vitae elit viverra ultrices ut ut nisl. 
           Ut a augue a purus accumsan vehicula sed sit amet tellus. 
           Donec vulputate facilisis varius. Fusce a tempor tortor, sit amet blandit justo. 
           Fusce varius dignissim nisl ac dignissim. Etiam auctor orci non ligula laoreet, commodo facilisis mi eleifend. 
           Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
           Mauris vehicula interdum ex non consequat.
          </p>
          <p className='py-2 text-gray-600'>
          pp
          </p>
          <Link href='/#projects'>
          <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;

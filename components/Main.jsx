import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center bg-slate-400'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='py-4 text-gray-700'>
            Hi, I'am <span className='text-[#B0C4DE]'>Destia</span>
          </h1>
          <h1 className='py-2 text-gray-700'>Part Of teaching factory Front-End</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            cocok sama frontend, tapi bingung belajar dimana? join tefa dbt ajaa kiww!!
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a href='https://www.linkedin.com/in/destia-wulan-766726245' target='_blank' rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a href='https://github.com/fireclint' target='_blank' rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <a href='https://instagram.com/destiawll?igshid=ZDdkNTZiNTM=' target='_blank' rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaInstagram />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

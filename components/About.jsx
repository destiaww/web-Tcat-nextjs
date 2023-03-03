import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ticketImg from '../public/assets/ticketing.png';

const About = () => {
  return (
    <div id='about'>
    <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container w-full px-4 py-12 mx-auto">
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-3">
				<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
					<h3 className="text-3xl text-white font-semibold">Tcat</h3>
					<span className="text-sm font-semibold tracking-wider  text-white">Apa dan Bagaimana?</span>
					<div className="pt-6">
					<div className='bg-gradient-to-r from-[#F99417] to-[#E4C988] tow-55 h-auto m-auto shadow-md shadow-[#F99417] rounded-3xl flex items-center justify-center p-2 hover:scale-105 ease-in duration-300'>
						<Image src={ticketImg} className='rounded-xl' alt='/' />
					</div>
					</div>
				</div>
			</div>
				
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
						<h3 className="text-xl text-white font-semibold tracking-wide">Tcat</h3>
						<span className="text-xs tracking-wide text-white">Tentang Kami</span>
						<p className="mt-3 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Deleniti quas omnis, ipsam magnam cumque officiis praesentium velit corrupti 
						aperiam? Maxime ex in nostrum. Reiciendis vero ipsam doloribus, molestias optio 
						voluptate!</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
						<h3 className="text-xl text-white font-semibold tracking-wide">Tcat</h3>
						<span className="text-xs tracking-wide text-white">Penggunaan</span>
						<p className="mt-3 text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
						Est incidunt deleniti iste iusto repellendus perferendis tenetur autem minim
						a sapiente dolores possimus, nihil fugiat, aliquam cupiditate pariatur? 
						Blanditiis aut ratione neque.</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
						<h3 className="text-xl text-white font-semibold tracking-wide">Tcat</h3>
						<span className="text-xs tracking-wide text-white">Pemesanan</span>
						<p className="mt-3 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Reprehenderit sapiente sit blanditiis minus? Architecto et possimus quaerat 
						nostrum officiis. Voluptatem similique cupiditate eveniet nostrum voluptates 
						exercitationem dicta. Sequi, minus fugiat.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
</div>
  );
};

export default About;

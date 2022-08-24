import React from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import { motion } from "framer-motion";
import Image from 'next/image';

const  slug = () => {
    const router = useRouter();
    const {slug} = router.query;
  return (
    <div className='relative bg-black '>
    <Navbar />
      <Head>
            <title>{slug}</title>
      </Head>
      <div className='mt-10 text-center'>
      <h1 className='text-4xl font-bold md:text-5xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r to-[#80D0C7] from-[#13547A] pb-10'>
            {slug}
        </h1>
        </div>
<script src="https://unpkg.com/tailwindcss-jit-cdn"></script>
<section className="flex flex-col justify-start md:justify-start md:mt-32 antialiased text-gray-200 min-h-screen">
    <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">
        
        <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
            <a className="relative block group md:h-96 md:w-88" href="#0">
                <div className="absolute inset-0 bg-[#13547A] hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                <figure className="relative md:h-96 md:w-88 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                    <img  className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://images.unsplash.com/photo-1584448097764-374f81551427?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" width="540" height="303" alt="Blog post" />
                </figure>
            </a>
            <div>
                <header>
                    {/* <div class="mb-3">
                        <ul class="flex flex-wrap text-xs font-medium -m-1">
                            <li class="m-1">
                                <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" href="#0">Product</a>
                            </li>
                            <li class="m-1">
                                <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Engineering</a>
                            </li>
                        </ul>
                    </div> */}
                    {/* <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                        <a class="hover:text-gray-100 transition duration-150 ease-in-out" href="#0">Designing a functional workflow at home.</a>
                    </h3> */}
                </header>
                <p className='md:text-2xl text-xl bold font-semibold text-[#80D0C7]'>DATE: 27.08.2022 
                <br />
                TIME: 20:30 to 23:30
                <br />
                ORGANIZER: Ahmedabad University
                <br />
                TICKET PRICE: 500 per person
                </p> 
                <p className="mt-5 text-lg text-gray-400 flex-grow">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                <button className="text-[#80D0C7] mt-5 w-full border border-[#80D0C7] hover:bg-[#80D0C7] hover:text-[#13547A] active:bg-[#80D0C7] font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Register</button>
                {/* <footer class="flex items-center mt-4">
                    <a href="#0">
                        <img class="rounded-full flex-shrink-0 mr-4" src="https://preview.cruip.com/open-pro/images/news-author-04.jpg" width="40" height="40" alt="Author 04" />
                    </a>
                    <div>
                        <a class="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out" href="#0">Chris Solerieu</a>
                        <span class="text-gray-700"> - </span>
                        <span class="text-gray-500">Jan 19, 2020</span>
                    </div>
                </footer> */}
            </div>
        </article>    
    </div>
</section>



</div>

  )
}

export default slug
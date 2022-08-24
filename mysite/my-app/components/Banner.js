import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image'

import { useState, useEffect } from 'react';


// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const Banner = () => {
  const w_w = useWindowSize().width;
  return (
    <div className='grid lg:grid-cols-2 grid-rows-2 lg:h-[65vh] md:h-[50vh] h-[40vh]'>
    <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:w-[65vh] md:h-[50vh] md:w-[50vh] h-[40vh] w-[40vh] justify-center lg:pb-12 md:pb-9'>
        <motion.h1 whileInView={{
              position: "absolute",
              left: (w_w/20),
              transition: {
                duration: 1,
              },
            }} className='text-7xl font-bold md:text-9xl lg:text-9xl -left-10  bg-clip-text text-transparent bg-gradient-to-r to-[#13547A] from-[#80D0C7] '>
            Welcome
        </motion.h1>
        <motion.p whileInView={{
              position: "absolute",
              left: (w_w/20),
              transition: {
                duration: 1,
              },
            }} className='max-w-xs text-xs text-shadow-md -left-10 md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl pl-32 pt-32'>BROWSE. SELECT. ENJOY.</motion.p>
          </div>
             <motion.div whileInView={{
              position: "absolute",
              right: 200,
              transition: {
                duration: 1,
              },
            }} className='md:flex hidden flex-col  py-16 space-y-4 -right-10 lg:h-[65vh] lg:w-[90vh] md:h-[50vh] md:w-[50vh] h-[40vh] w-[40vh] justify-center '>
                <div className='grid grid-rows-3 gap-5'>
                  <div className='grid grid-cols-3'>
                  <div className=" bg-[#13547A] h-[60px] w-[175px] p-auto rounded-lg shadow-lg text-center items-center">
                      <h4 className="py-5 font-semibold uppercase leading-tight truncate text-white">A random Title</h4>
                  </div>
                  <div className=" bg-[#FF1361] h-[60px] w-[250px] p-auto rounded-lg shadow-lg text-center items-center">
                      <h4 className="py-5 font-semibold uppercase leading-tight truncate text-[#000428]">A random Title</h4>
                  </div>
                  <div className=" bg-[#7918F2] h-[60px] w-[150px] p-auto rounded-lg shadow-lg text-center items-center">
                      <h4 className="py-5 font-semibold uppercase leading-tight truncate text-[#000428]">A random Title</h4>
                  </div>                  
                  </div>
                  <div className='grid grid-cols-4 gap-3 ml-12'>
                  <div className=" bg-[#c8e7f2] h-[60px] w-[150px] p-auto rounded-lg shadow-lg text-center items-center">
                      <h4 className="py-5 font-semibold uppercase leading-tight truncate text-[#000428]">A random Title</h4>
                  </div>
                  <div className=" bg-[#57F2CC] h-[60px] w-[180px] p-auto rounded-lg shadow-lg text-center items-center">
                      <h4 className="py-5 font-semibold uppercase leading-tight truncate text-[#000428]">A random Title</h4>
                  </div>
                  <div className=" bg-[#CFC7F8] h-[60px] w-[190px] p-auto rounded-lg shadow-lg text-center items-center">
                      <h4 className="py-5 font-semibold uppercase leading-tight truncate text-[#000428]">A random Title</h4>
                  </div>
                  <div className=" bg-[#FD371F] h-[60px] w-[150px] p-auto rounded-lg shadow-lg text-center items-center">
                      <h4 className="py-5 font-semibold uppercase leading-tight truncate text-[#000428]">A random Title</h4>
                  </div>                    
                  </div>
                  <div className='grid grid-cols-2 gap-0 -ml-4'>
                  <div className=" bg-[#C471F5] h-[60px] w-[350px] p-auto rounded-lg shadow-lg text-center items-center">
                      <h4 className="py-5 font-semibold uppercase leading-tight truncate text-[#000428]">A random Title</h4>
                  </div>
                  <div className=" bg-[#611447] h-[60px] w-[300px] p-auto rounded-lg shadow-lg text-center items-center">
                      <h4 className="py-5 font-semibold uppercase leading-tight truncate text-[#000428]">A random Title</h4>
                  </div>
                  </div>
                  <div className='grid grid-cols-4 gap-1 -ml-8'>
                  <div className=" bg-[#F5D100] h-[60px] w-[175px] p-auto rounded-lg shadow-lg text-center items-center">
                      <h4 className="py-5 font-semibold uppercase leading-tight truncate text-[#000428]">ABC</h4>
                  </div>
                  <div className=" bg-[#A8CABA] h-[60px] w-[150px] p-auto rounded-lg shadow-lg text-center items-center">
                      <h4 className="py-5 font-semibold uppercase leading-tight truncate text-[#000428]">A random Title</h4>
                  </div>
                  <div className=" bg-[#44AA76] h-[60px] w-[175px] p-auto rounded-lg shadow-lg text-center items-center">
                      <h4 className="py-5 font-semibold uppercase leading-tight truncate text-[#000428]">A random Title</h4>
                  </div>
                  <div className=" bg-[#35EB93] h-[60px] w-[125px] p-auto rounded-lg shadow-lg text-center items-center">
                      <h4 className="py-5 font-semibold uppercase leading-tight truncate text-[#000428]"> random</h4>
                  </div>
                  </div>
                </div>
  
    </motion.div>

    </div>
  )
}

export default Banner
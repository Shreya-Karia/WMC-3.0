import React from 'react'
import Login from '../components/Login'
import { motion } from "framer-motion";
import bgimg from "../public/bg.png";
import Image from "next/image"

const sign_in = () => {
  return (
    <div className='relative flex h-screen bg-gradient-to-r from-[#000428] to-[#004E92] z-0'>
      <Image src={bgimg} layout="fill" className='lg:opacity-30 opacity-0 '/>
      <motion.div  initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='container m-auto'>
        <Login className='z-20'/>
      </motion.div>

    </div>
  )
}

export default sign_in
import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image"
import Login_Org from '../../components/Login_Org';

const login = () => {
  return (
    <div className='relative flex h-screen bg-gradient-to-r from-[#000428] to-[#004E92] z-0'>
      <motion.div  initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='container m-auto'>
        <Login_Org className='z-20'/>
      </motion.div>

    </div>
  )
}

export default login
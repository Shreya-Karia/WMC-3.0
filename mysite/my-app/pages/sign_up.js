import React from 'react'
import { motion } from "framer-motion";
import Signup from '../components/Signup';

const sign_up = () => {
  return (
    <div className='relative flex h-screen bg-gradient-to-r from-[#000428] to-[#004E92]'>
      <motion.div  initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className='container m-auto'>
        <Signup />
      </motion.div>
    </div>
  )
}

export default sign_up
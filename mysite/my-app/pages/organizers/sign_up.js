import React from 'react'
import { motion } from "framer-motion";
import Signup from '../../components/Signup';
import Signup_org from '../../components/Signup_Org';

const sign_up = () => {
  return (
    <div className='relative flex w-screen md:h-screen bg-gradient-to-r from-[#000428] to-[#004E92]'>
      <div  className='container m-auto'>
        <Signup_org />
      </div>
    </div>
  )
}

export default sign_up
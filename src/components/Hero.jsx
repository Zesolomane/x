import React from 'react'


import { AiFillAlipayCircle } from "react-icons/ai";
import {Link} from 'react-router-dom';
import LandingPageNav from './LandingPageNav';
import RowsIcon from './RowsIcon';
const Hero = ({bg}) => {
  const iconRowsData= [
    { info: 'SIGN UP',pageRoute:'./signUp' },
    {  info: 'LOGIN',pageRoute:'./login' },
    {  info: 'POSTS',pageRoute:'./posts'  },
  ];
  return (
    <div className='w-full  bm-1'>
        
        <div className="relative h-[42rem] mx-auto"> 
          <div className="h-full w-full bg-cover bg-netflix">
            <LandingPageNav/>
            <RowsIcon rowsData={iconRowsData}/>
          </div>
        </div>
        
      </div>
  


  )
}

export default Hero
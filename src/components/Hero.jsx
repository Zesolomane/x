import React from 'react'
import heroimg from '../assets/heroimg.jpg'
import ScrollHeader from './ScrollHeader';
import { AiFillAlipayCircle } from "react-icons/ai";
import {Link} from 'react-router-dom';
const Hero = ({placeHolderText1,placeHolderText2, placeHolderText3, placeHolderText4 }) => {
  return (
    <div className='w-full bg-slate-300 mb-9 border-solid border-2 border-sky-500 '>
        <h1 className='text-center'> MY WEBSITE FOR MY RESUME</h1>
        <ScrollHeader bg="bg-gray" textColor = "text-black">
          <div>
          This isn't a drlil this is some random text. This isn't a drlil this is some random text. This isn't a drlil this is some random text. This isn't a drlil this is some random text. This isn't a drlil this is some random text
          </div>
        </ScrollHeader>
        <div className="relative h-[42rem] mx-auto border-solid border-2 border-sky-500 w-5/6 bg-[url('../assets/heroimg.jpg')] "> 
          <div className="h-full w-full bg-cover bg-hero-img">
              <Link to="/posts" className='bg-emerald-900 p-4 text-white font-bold'> This is what I've made</Link>
            </div>
        </div>
        <ul className='text-center flex felx-wrap content-center justify-center m-10'>
                <li className='flex flew-wrap px-10 '>
                  <AiFillAlipayCircle size={50}/>
                  <div className="bg-gray-800 w-[200px]">
                      {placeHolderText1}
                  </div>
                </li>
                <li className='flex flew-wrap px-10'> 
                  <AiFillAlipayCircle size={50}/>
                  <div className="bg-gray-800 w-[200px]">
                        {placeHolderText1}
                    </div>
                </li>
                <li className='flex flew-wrap px-10'> 
                  <AiFillAlipayCircle size={50}/>
                  <div className="bg-gray-800 w-[200px]">
                        {placeHolderText1}
                    </div>
                </li>
                <li className='flex flew-wrap px-10'> 
                  <AiFillAlipayCircle size={50}/>
                  <div className="bg-gray-800 w-[200px]">
                        {placeHolderText1}
                    </div>
                </li>
              </ul>
      </div>
  


  )
}

export default Hero
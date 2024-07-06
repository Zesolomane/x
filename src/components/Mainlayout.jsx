import React from 'react'
import {Outlet} from 'react-router-dom';

import ScrollHeader from './ScrollHeader';
import Footer from './Footer';
const Mainlayout = () => {
  return (
    <>
      <div className="relative min-h-[100vh] bg-black">
        <div className="pb-[200px]">
          <ScrollHeader bg="bg-black" textColor="text-red-600">
            <div>
            This isn't a drill this is some random text. This isn't a drill this is some random text. This isn't a drill this is some random text. This isn't a drill this is some random text. This isn't a drill this is some random text
            </div>
        </ScrollHeader>
        
        <Outlet/>
        </div>
      </div>
    <Footer/>
    
    </>
    
  )
}

export default Mainlayout
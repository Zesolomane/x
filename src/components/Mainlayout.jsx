import React from 'react'
import {Outlet} from 'react-router-dom';
import PageNavbar from './PageNavbar';
import ScrollHeader from './ScrollHeader';
import Footer from './Footer';
const Mainlayout = () => {
  return (
    <>
      <div className="relative min-h-[100vh]">
        <div className="pb-[200px]">
          <ScrollHeader bg="bg-black" textColor="text-white">
            <div>
            This isn't a drill this is some random text. This isn't a drill this is some random text. This isn't a drill this is some random text. This isn't a drill this is some random text. This isn't a drill this is some random text
            </div>
        </ScrollHeader>
        <PageNavbar/>
        <Outlet/>
        </div>
      </div>
    <Footer/>
    
    </>
    
  )
}

export default Mainlayout
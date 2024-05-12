import React from 'react';
import Marquee from 'react-fast-marquee';
const ScrollHeader = ({bg, children, textColor}) => {
  return (
    <>
    <Marquee className={`p-3 ${bg}`}>
     <div className={`${textColor} font-bold align-middle`}> {children}</div>
    </Marquee>


    </>
  )
}

export default ScrollHeader
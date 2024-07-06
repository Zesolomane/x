import React, { useState, useEffect } from 'react'


const Footer = ({bg}) => {

  let [backgroundColor, setBackgroundColor] = useState('');
  useEffect(() => {
    // Set background color to 'black' if bg prop is not provided
    if (!bg) {
      setBackgroundColor('black');
    } else {
      setBackgroundColor(bg); // Set background color to the value of bg prop
    }
  }, [bg]); 
  return (
    <div className={`relative mt-[-200px] h-[200px] bg-${backgroundColor} bottom-0 w-full`}>
      <div>
        <h1> Footer</h1>
      </div>
    </div>
  )
}

export default Footer
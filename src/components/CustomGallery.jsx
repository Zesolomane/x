import React from 'react';
import CustomCards from './CustomCard';
const CustomGallery = ({children, colCount, rowGap, }) => {
  return (

    <div className={`grid ${colCount} gap-4  w-full`}>
        {children}
    </div>
  )
}
// create a gallery that can have different row counts and
// col counts
// if a grid-cols count is givin the default gap should be 4
// The grid should center to the screen
export default CustomGallery
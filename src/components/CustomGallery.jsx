import React from 'react';
import CustomCards from './CustomCard';
const CustomGallery = ({children, count}) => {
  return (

    <div className='grid grid-cols-4 gap-4'>
        {children}
    </div>
  )
}

export default CustomGallery
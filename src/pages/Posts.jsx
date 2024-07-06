import React, { useEffect } from 'react'
import CustomGallery from '../components/CustomGallery';
import CustomCard from '../components/CustomCard';
import { useState } from 'react';
const Posts = ({backgroundColorToggle}) => {

    let [backgroundColor , setBackgroundColor] = useState('');
    useEffect(()=> {
            if (!backgroundColorToggle){
                setBackgroundColor("bg-neutral-950");
            } else{
                setBackgroundColor(backgroundColorToggle);
            }
        }, [backgroundColorToggle])
  return (
    <div className='py-2'>
        <CustomGallery colCount={'grid-cols-4'}>
        {/* bg_col, span_col_num, span_row_num, row_start, col_start */}
            <CustomCard bg_col="bg-red-900" span_col_num="col-span-2" span_row_num="row-span-2" row_start="row-start-1" col_start="col-start-1" height="h-96">
                <div className='h-[400px]'> 
                    <p>Hello hell hello wireless for all in this field you wills see some stuff </p>
                </div>
            </CustomCard>
            <CustomCard bg_col="bg-red-900" span_col_num="col-span-1"  span_row_num="row-span-1" row_start="row-start-1" col_start="3"> 
            <div className='h-[200px]'> 
                
                </div>
            </CustomCard>
            <CustomCard bg_col="bg-red-900" span_col_num="" span_row_num="row-span-2" row_start="row-start-1" col_start="col-start-4"> </CustomCard>
            <CustomCard bg_col="bg-red-900" span_col_num="" span_row_num="" row_start="" col_start=""> </CustomCard>
          

        </CustomGallery>

    </div>
  )
}

export default Posts
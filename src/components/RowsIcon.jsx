import React from 'react';
import { AiFillAlipayCircle } from 'react-icons/ai'; // Import your icon here
import { Link } from 'react-router-dom';
const RowsIcon = ({ rowsData }) => {
  console.log(rowsData);
  return (

    <ul className='text-center flex flex-wrap content-center justify-center m-10 '>
      {rowsData.map((item, index) => (
        <li key={index} className='flex flex-wrap px-10 '>
          <AiFillAlipayCircle size={50} />
          <div className="bg-gray-800 w-[200px] no-underline">
            <Link to={item.pageRoute}> {item.info} </Link> {/* Ensure placeHolderText1 exists in each item */}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RowsIcon;

import React from 'react'
import {Link} from 'react-router-dom';
const LandingPageNav = () => {
  return (
    <div className='w-full box-border'>
        <ul className="flex flex-wrap justify-between px-4">
          <li className='p-3'> <Link to="/" className="no-underline text-red-600">Home Template</Link></li>
            <div>
              <select className='bg-gray'>
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                </select>
                <button> <Link to="/signin" className='no-underline text-white bg-red-900'> Sign In</Link> </button>
            </div>
              
          
        </ul>
      </div>
  )
}

export default LandingPageNav

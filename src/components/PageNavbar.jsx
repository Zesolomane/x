import {Link} from 'react-router-dom';
import React from 'react'
import { ImAngry2 } from "react-icons/im";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const PageNavbar = () => {
  return (
    <>
     
      <div className='bg-slate-300  w-full box-border'>
        <ul className="flex flex-wrap justify-between px-4">
          <li className='p-3'> <Link to="/" className="no-underline text-slate-600">Home Template</Link></li>
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

     
    </>
  )
}

export default PageNavbar
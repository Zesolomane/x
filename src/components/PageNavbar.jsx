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
     
      <nav className='bg-slate-300  w-full box-border'>
        <ul className="flex flex-wrap justify-start">
          <li className='p-3'> <Link to="/" className="no-underline text-slate-600">Home</Link></li>
          <li className='p-3'><Link to="/posts"className="no-underline text-slate-600" >posts</Link></li>
          <li className='p-3'><Link to="/aboutme" className="no-underline text-slate-600">aboutme</Link></li>
        </ul>
      </nav>

     
    </>
  )
}

export default PageNavbar
import React from 'react';
import { Search } from 'react-bootstrap-icons';
import { ChatLeftDots } from 'react-bootstrap-icons';
import { Gear } from 'react-bootstrap-icons';
import { PersonCircle } from 'react-bootstrap-icons';

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <div className='left-nav'>
                <form className="nav-form" role="search">
                <input id='search' className="nav-input" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn" type="submit"><Search /></button>
                </form>
            </div>
            
            <div className='right-nav'>
                <button className='btn'><ChatLeftDots /></button>
                <button className='btn'><Gear /></button>
                <button className='btn'><PersonCircle /></button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;
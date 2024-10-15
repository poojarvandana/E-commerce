import React from 'react';
import './Style.css'; 
import {Link} from "react-router-dom"


function Navbar() {
  return (
    <div className='navbar'>
      <header className='ecommerce'>E-commerce</header>
      <div className='components'>
        <Link to='/' className='nav-link'>Home</Link>
        <Link to='/products' className='nav-link'>Product Listing</Link>
        <Link to='/product-details' className='nav-link'>Product Details</Link>
      </div>
    </div>
  );
}

export default Navbar;

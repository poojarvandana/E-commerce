import React from 'react';
import Navbar from './Navbar';
import {Link} from "react-router-dom"
import products from './categories';

function Homepage() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Our Store!</h1>
      <p>Explore our product categories below:</p>
      <ul>
        {products.map((categories, index) => (
          <li key={index}>
            <a href={`/products/${categories.slug}`}>{categories.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Homepage;


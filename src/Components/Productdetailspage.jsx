import React from 'react';
import Navbar from './Navbar';
import products from './categories';
import {Link} from "react-router-dom"


function Productdetailspage() {
  return (
    <div>
      <Navbar />
      <h1>Product Details</h1>
      {products.map((categories) => (
        <div key={categories.category}>
          <h2>{categories.category}</h2>
          <img src={categories['imageUrl']} alt={categories.name} />
          <ul>
            {categories.items.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Productdetailspage;

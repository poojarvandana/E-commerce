import React from 'react';
import Navbar from './Navbar';
import products from './categories'; 
import { Link } from "react-router-dom";

function ProductListingPage() {
  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  // Placeholder image URL
  const placeholderImageUrl = "https://via.placeholder.com/300";

  return (
    <div>
      <Navbar />
      <h1>Product Listings</h1>
      
      {Object.keys(groupedProducts).map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {groupedProducts[category].map((product) => (
              <div key={product.id} style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', width: '200px' }}>
                <h3>{product.name}</h3>
                <img src={product.imageUrl || placeholderImageUrl} alt={product.name} style={{ width: '100%' }} />
                <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
                <p style={{ color: product.inStock ? 'green' : 'red' }}>
                  <strong>Stock Status:</strong> {product.inStock ? 'In Stock' : 'Out of Stock'}
                </p>
                {product.price < 1000 && <span style={{ backgroundColor: 'lightgreen', padding: '5px', borderRadius: '5px' }}>Budget-Friendly</span>}
                {product.price > 50000 && <span style={{ backgroundColor: 'gold', padding: '5px', borderRadius: '5px' }}>Premium Product</span>}
                {product.discount && <p style={{ color: 'orange' }}><strong>Discount Available!</strong></p>}
                {product.price > 5000 && <p style={{ color: 'blue' }}><strong>Free Shipping</strong></p>}
                {product.inStock && product.stock < 5 && (
                  <p style={{ color: 'red' }}><strong>Hurry, only {product.stock} items left!</strong></p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductListingPage;

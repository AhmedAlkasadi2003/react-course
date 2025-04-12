import React from 'react';

function ProductCard({ image, name, price, rating }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <img 
        alt="صورة المنتج" 
        className="w-full h-32 object-cover mb-4 rounded" 
        src={image}
        loading="lazy"
      />
      <h3 className="text-lg font-semibold text-blue-800">{name}</h3>
      <p className="text-blue-600 mb-2">{price}</p>
      <p className="text-yellow-500">{rating}</p>
    </div>
  );
}

export default ProductCard;
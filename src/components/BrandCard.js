import React from 'react';

function BrandCard({ image }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex-shrink-0">
      <img 
        alt="شعار العلامة التجارية" 
        className="w-32 h-32 object-cover rounded" 
        src={image}
        loading="lazy"
      />
    </div>
  );
}

export default BrandCard;
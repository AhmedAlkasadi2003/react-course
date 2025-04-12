import React from 'react';
import ProductCard from './ProductCard';
import BrandCard from './BrandCard';

const categories = [
  { name: 'ملابس', icon: '👚' },
  { name: 'أحذية', icon: '👟' },
  { name: 'إلكترونيات', icon: '📱' },
  { name: 'المنزل', icon: '🏠' },
  { name: 'تجميل', icon: '💄' },
  { name: 'ألعاب', icon: '🎮' }
];

const products = Array(4).fill({
  image: 'https://storage.googleapis.com/a1aa/image/j2S7ABSVGh3vnTzj8uDwY77YzSMNIPsVI0IWDF8J9_w.jpg',
  name: 'اسم المنتج',
  price: '$99.99',
  rating: '★★★★☆'
});

const brands = Array(4).fill({
  image: 'https://storage.googleapis.com/a1aa/image/nKAOUPecpjFcApG5-o3_rM8g0rhfEOt0bDVBdsKVN3Q.jpg'
});

function MainContent() {
  return (
    <main className="flex-1 flex flex-col overflow-hidden">
      <CategoriesBar />
      
      <div className="flex-1 p-4 bg-blue-50 overflow-y-auto">
        <ProductSection title="🆕 المنتجات الجديدة" products={products} />
        <ProductSection title="🌟 المنتجات المقترحة" products={products} />
        <BrandSection brands={brands} />
      </div>
    </main>
  );
}

function CategoriesBar() {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 flex justify-center space-x-4 overflow-x-auto whitespace-nowrap">
      {categories.map((category, index) => (
        <a 
          key={index} 
          className="text-white mx-4 hover:text-blue-200 first:mr-0 last:ml-0" 
          href="#"
        >
          {category.icon} {category.name}
        </a>
      ))}
    </nav>
  );
}

function ProductSection({ title, products }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-blue-800">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard 
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </section>
  );
}

function BrandSection({ brands }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-blue-800">🏷 الماركات</h2>
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {brands.map((brand, index) => (
          <BrandCard key={index} image={brand.image} />
        ))}
      </div>
    </section>
  );
}

export default MainContent;
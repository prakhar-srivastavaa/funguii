import React from 'react';

export default function ProductsPage() {
  const products = [
    { id: 1, name: 'Shiitake', price: 12.99, imageUrl: '/images/shiitake.jpg' },
    { id: 2, name: 'Oyster', price: 9.99, imageUrl: '/images/oyster.jpg' },
    { id: 3, name: 'Button', price: 7.99, imageUrl: '/images/button.jpg' },
    { id: 4, name: 'Portobello', price: 10.99, imageUrl: '/images/portobello.jpg' },
  ];

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Mushroom Products</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {products.map(product => (
          <div key={product.id} className='border rounded-lg p-4 hover:shadow-md transition-shadow'>
            <div className='h-40 bg-gray-200 mb-2'></div>
            <h3 className='font-semibold'>{product.name}</h3>
            <p className='text-gray-700'></p>
            <button className='mt-2 bg-blue-500 text-white py-1 px-3 rounded'>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

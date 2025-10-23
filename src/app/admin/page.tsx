import React from 'react';

export default function AdminPage() {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Admin Dashboard</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='border p-4 rounded-lg'>
          <h2 className='text-xl font-semibold mb-3'>Product Management</h2>
          <form className='space-y-4'>
            <div>
              <label htmlFor='productName' className='block text-sm font-medium text-gray-700'>Product Name</label>
              <input type='text' id='productName' className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md' />
            </div>
            <div>
              <label htmlFor='price' className='block text-sm font-medium text-gray-700'>Price</label>
              <input type='number' id='price' step='0.01' className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md' />
            </div>
            <div>
              <label htmlFor='image' className='block text-sm font-medium text-gray-700'>Product Image</label>
              <input type='file' id='image' className='mt-1 block w-full' />
            </div>
            <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded-md'>Add Product</button>
          </form>
        </div>
        <div className='border p-4 rounded-lg'>
          <h2 className='text-xl font-semibold mb-3'>Order Management</h2>
          <div className='space-y-4'>
            <div className='border-b pb-2'>
              <p className='font-medium'>Order #12345</p>
              <p className='text-sm text-gray-600'>Customer: John Doe</p>
              <p className='text-sm text-gray-600'>Product: Shiitake (2 units)</p>
              <button className='mt-2 text-sm bg-green-500 text-white py-1 px-2 rounded'>Mark as Shipped</button>
            </div>
            <div className='border-b pb-2'>
              <p className='font-medium'>Order #12346</p>
              <p className='text-sm text-gray-600'>Customer: Jane Smith</p>
              <p className='text-sm text-gray-600'>Product: Oyster (1 unit)</p>
              <button className='mt-2 text-sm bg-green-500 text-white py-1 px-2 rounded'>Mark as Shipped</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export default function OrderPage() {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Place Your Order</h1>
      <div className='max-w-xl mx-auto'>
        <form className='space-y-4'>
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
            <input type='text' id='name' className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md' />
          </div>
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
            <input type='email' id='email' className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md' />
          </div>
          <div>
            <label htmlFor='address' className='block text-sm font-medium text-gray-700'>Delivery Address</label>
            <textarea id='address' rows={3} className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md'></textarea>
          </div>
          <div>
            <label htmlFor='product' className='block text-sm font-medium text-gray-700'>Product</label>
            <select id='product' className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md'>
              <option value=''>Select a product</option>
              <option value='shiitake'>Shiitake</option>
              <option value='oyster'>Oyster</option>
              <option value='button'>Button</option>
              <option value='portobello'>Portobello</option>
            </select>
          </div>
          <div>
            <label htmlFor='quantity' className='block text-sm font-medium text-gray-700'>Quantity</label>
            <input type='number' id='quantity' min='1' className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md' />
          </div>
          <button type='submit' className='w-full bg-blue-500 text-white py-2 px-4 rounded-md'>Place Order</button>
        </form>
      </div>
    </div>
  );
}

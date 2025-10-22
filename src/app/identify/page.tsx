import React from 'react';

export default function IdentifyPage() {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Identify Your Mushroom</h1>
      <div className='max-w-xl mx-auto'>
        <div className='mb-4'>
          <label htmlFor='upload' className='block text-sm font-medium text-gray-700'>Upload Image</label>
          <input type='file' id='upload' accept='image/*' className='mt-1 block w-full' />
        </div>
        <div className='grid grid-cols-1 gap-4 mt-8'>
          <div className='border p-4 rounded-lg'>
            <h3 className='font-semibold'>Results will appear here</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

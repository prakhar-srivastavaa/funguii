import React from 'react';

export default function LoginPage() {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Login</h1>
      <form className='max-w-md mx-auto'>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
          <input type='email' id='email' className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm' />
        </div>
        <div className='mb-4'>
          <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
          <input type='password' id='password' className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm' />
        </div>
        <button type='submit' className='w-full bg-blue-500 text-white py-2 px-4 rounded-md'>Sign In</button>
      </form>
    </div>
  );
}

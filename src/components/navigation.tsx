import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className='bg-gray-800 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/' className='text-white text-xl font-bold'>Funguii</Link>
        <div className='space-x-4'>
          <Link href='/products' className='text-gray-300 hover:text-white'>Products</Link>
          <Link href='/identify' className='text-gray-300 hover:text-white'>Identify</Link>
          <Link href='/order' className='text-gray-300 hover:text-white'>Order</Link>
          <Link href='/login' className='text-gray-300 hover:text-white'>Login</Link>
        </div>
      </div>
    </nav>
  );
}

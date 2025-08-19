'use client';
import type { ProductCart } from '@/lib/types/types';
import Link from 'next/link';

const ProductCart = ({ id, dark, attributes }: ProductCart) => {
  const formatted = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };
  return (
    <Link
      href={`/products/${id}`}
      className={`mx-auto flex flex-col items-center justify-center rounded-xl p-5 shadow-xl transition duration-500 hover:shadow-2xl ${dark && 'bg-gray-600'} transition duration-500`}
    >
      <div className='flex h-60 w-54 items-center justify-center overflow-hidden rounded-xl lg:h-64 lg:w-60'>
        <img src={attributes.image} alt={attributes.title} className='object-cover' />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <p
          className={`mt-2 text-nowrap ${dark && 'text-white'} transition duration-500 lg:text-lg`}
        >
          {attributes.title}
        </p>
        <p
          className={`mx-auto my-2 text-sm opacity-80 ${dark && 'text-pink-400'} transition duration-500`}
        >
          {formatted(Number(attributes.price))}
        </p>
      </div>
    </Link>
  );
};

export default ProductCart;

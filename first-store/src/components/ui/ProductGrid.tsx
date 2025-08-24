'use client';
import type { ProductCart } from '@/lib/types/types';
import formatted from '@/lib/utils/formatPrice';
import Link from 'next/link';

const ProductGrid = ({ id, dark, attributes }: ProductCart) => {
  return (
    <Link
      href={`/products/${id}`}
      className={`mx-auto flex w-full items-center justify-between rounded-xl p-5 shadow-xl transition duration-500 hover:shadow-2xl ${dark && 'bg-gray-600'} transition duration-500 md:w-10/12`}
    >
      <div className='flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl sm:ml-10 sm:h-32 sm:w-32 md:ml-16 md:h-40 md:w-40'>
        <img
          src={attributes.image}
          alt={attributes.title}
          className='h-28 w-28 object-cover sm:h-36 sm:w-36 md:h-44 md:w-44'
        />
      </div>
      <div className='flex w-1/2 flex-col items-center justify-center'>
        <p
          className={`mt-2 text-nowrap ${dark && 'text-white'} transition duration-500 sm:text-lg lg:text-2xl`}
        >
          {attributes.title}
        </p>
        <p
          className={`text-[12px] text-nowrap opacity-60 ${dark && 'text-white'} transition duration-500 sm:text-sm lg:mt-2 lg:text-lg`}
        >
          {attributes.company}
        </p>
        <p
          className={`mx-auto my-2 text-sm opacity-80 ${dark && 'text-pink-400'} transition duration-500 lg:text-lg`}
        >
          {formatted(Number(attributes.price))}
        </p>
      </div>
    </Link>
  );
};

export default ProductGrid;

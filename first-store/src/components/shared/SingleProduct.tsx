'use client';
import useFetchSingleProduct from '@/lib/hooks/useFetchSingleProduct';
import store from '@/lib/store/store';
import type { SingleProduct } from '@/lib/types/types';
import formatted from '@/lib/utils/formatPrice';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const SingleProduct = () => {
  const { id } = useParams();
  const { dark } = store();
  const { status, data } = useFetchSingleProduct(Number(id));
  let product: SingleProduct = {};
  const [activeColor, setActiveColor] = useState<string | undefined>();
  if (status === 'success') {
    product = data?.data.data;
  }
  return (
    <div className='mt-16 flex flex-col px-5'>
      {status === 'success' && product.id === Number(id) ? (
        <>
          <div>
            <p className='text-sm opacity-70'>Home &gt; Products</p>
            <img
              src={product.attributes?.image}
              alt={product.attributes?.title}
              className='mx-auto mt-5 w-11/12 max-w-md rounded-xl'
            />
          </div>
          <div className='mt-5'>
            <h1
              className={`mx-auto text-center text-3xl font-bold text-gray-800 capitalize opacity-80`}
            >
              {product.attributes?.title}
            </h1>
            <h2
              className={`mt-1 text-center font-bold tracking-wider text-gray-800 capitalize opacity-50`}
            >
              {product.attributes?.company}
            </h2>
            <p className={`text-center text-xl font-light opacity-80`}>
              {formatted(Number(product.attributes?.price))}
            </p>
            <p className={`mx-2 mt-5 text-center tracking-wide opacity-70`}>
              {product.attributes?.description}
            </p>
            <p className={`mt-5 text-center font-bold tracking-widest opacity-90`}>Colors</p>
            <div className='mt-2 flex justify-center gap-2'>
              {product.attributes?.colors.map((color, index) => {
                const active = activeColor === color;
                console.log(active);
                return (
                  <div
                    onClick={() => {
                      setActiveColor(color);
                    }}
                    key={index}
                    style={{ backgroundColor: color }}
                    className={`h-5 w-5 rounded-full ${active && 'border-blue-500'}`}
                  ></div>
                );
              })}
            </div>
            <div></div>
            <button></button>
          </div>
        </>
      ) : (
        <div
          className={`${dark && 'border-white'} mx-auto mt-10 h-5 w-5 animate-ping rounded-full border-2 p-2 transition duration-500`}
        ></div>
      )}
    </div>
  );
};

export default SingleProduct;

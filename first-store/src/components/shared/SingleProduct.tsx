'use client';
import useFetchSingleProduct from '@/lib/hooks/useFetchSingleProduct';
import type { SingleProduct } from '@/lib/types/types';
import formatted from '@/lib/utils/formatPrice';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';

const SingleProduct = () => {
  const dark = useSelector((state: RootState) => state.theme.dark);

  const { id } = useParams();
  // const { addToCart } = store();
  const selectOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const [amount, setAmount] = useState(1);
  const { status, data } = useFetchSingleProduct(Number(id));
  let product: SingleProduct = {};
  const [activeColor, setActiveColor] = useState<string | undefined>();
  if (status === 'success') {
    product = data?.data.data;
    if (activeColor === undefined) setActiveColor(product.attributes?.colors[0]);
  }
  return (
    <div className='flex flex-col px-5 pt-16 md:flex-row md:justify-around md:pb-16'>
      {status === 'success' && product.id === Number(id) ? (
        <>
          <div>
            <p
              className={`text-sm opacity-70 ${dark && 'text-white'} transition duration-500 sm:ml-10`}
            >
              <Link href='/' className='cursor-pointer hover:underline'>
                Home
              </Link>{' '}
              &gt;{' '}
              <Link href='/products' className='cursor-pointer hover:underline'>
                Products
              </Link>
            </p>
            <img
              src={product.attributes?.image}
              alt={product.attributes?.title}
              className='mx-auto mt-5 w-11/12 max-w-md rounded-xl'
            />
          </div>
          <div className='mt-5 md:w-1/2'>
            <h1
              className={`mx-auto text-center text-3xl font-bold text-gray-800 capitalize opacity-80 ${dark && 'text-white'} transition duration-500`}
            >
              {product.attributes?.title}
            </h1>
            <h2
              className={`mt-1 text-center font-bold tracking-wider text-gray-800 capitalize opacity-50 ${dark && 'text-white'} transition duration-500`}
            >
              {product.attributes?.company}
            </h2>
            <p
              className={`text-center text-xl font-light opacity-80 ${dark && 'text-white'} transition duration-500`}
            >
              {formatted(Number(product.attributes?.price))}
            </p>
            <p
              className={`mx-2 mt-5 text-center tracking-wide opacity-70 ${dark && 'text-white'} transition duration-500`}
            >
              {product.attributes?.description}
            </p>
            <p
              className={`mt-5 text-center font-bold tracking-widest opacity-90 ${dark && 'text-white'} transition duration-500`}
            >
              Colors
            </p>
            <div className='mt-2 flex justify-center gap-2'>
              {product.attributes?.colors.map((color, index) => {
                const active = activeColor === color;
                return (
                  <div
                    onClick={() => {
                      setActiveColor(color);
                    }}
                    key={index}
                    style={{ backgroundColor: color }}
                    className={`h-5 w-5 rounded-full ${active && 'scale-110 border-2 border-blue-800'} cursor-pointer transition duration-500`}
                  ></div>
                );
              })}
            </div>
            <div className='flex flex-col items-center justify-center'>
              <p
                className={`mt-5 text-center font-bold tracking-widest opacity-90 ${dark && 'text-white'} transition duration-500`}
              >
                Amount
              </p>
              <div
                className={`mt-2 flex w-10/12 items-center justify-center rounded-xl border border-blue-500 px-5 py-2 ${dark && 'bg-gray-400'} transition duration-500`}
              >
                <select
                  onChange={(e) => {
                    setAmount(Number(e.target.value));
                  }}
                  name='amount'
                  id='amount'
                  className={`w-full cursor-pointer focus:outline-none`}
                >
                  {selectOptions.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button
                // onClick={() => {
                //   addToCart(product, amount);
                // }}
                style={{ backgroundColor: activeColor }}
                className={`mx-auto my-10 cursor-pointer rounded-xl px-5 py-2 font-bold tracking-wide shadow-xl`}
              >
                <p
                  className={`text-gray-400 opacity-80 ${dark && 'text-white'} transition duration-500 text-shadow-black text-shadow-xs`}
                >
                  ADD TO BAG
                </p>
              </button>
            </div>
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

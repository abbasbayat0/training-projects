/* eslint-disable @next/next/no-img-element */
'use client';
import useFetchFeatured from '@/lib/hooks/useFetchFeatured';
import store from '@/lib/store/store';
import { Product } from '@/lib/types/types';

const FeaturedProducts = () => {
  const { dark } = store();
  const { status, data } = useFetchFeatured();
  let products: Product[] = [];
  if (status === 'success') products = [...data?.data.data];

  return (
    <div className='mx-auto flex max-w-7xl flex-col items-center justify-center p-5'>
      <div className='flex w-full items-start justify-start'>
        <h1
          className={`${dark ? 'text-white' : ''} w-1/2 text-3xl opacity-80 transition duration-500`}
        >
          Featured Products
        </h1>
      </div>
      <div className={`mx-auto mt-3 h-[1px] w-full border bg-black opacity-20 shadow`}></div>
      <div>
        {products.length === 0 ? (
          <h1 className={`${dark && 'text-white'} mt-5 transition duration-500`}>
            Loading Data ...
          </h1>
        ) : (
          <div className={`mt-10 flex w-full flex-col flex-wrap gap-10 p-5 sm:flex-row lg:gap-12`}>
            {products.map(({ id, attributes }) => {
              const formatted = (amount: number) => {
                return new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(amount);
              };
              return (
                <div
                  key={id}
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
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;

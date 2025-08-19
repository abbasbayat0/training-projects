/* eslint-disable @next/next/no-img-element */
'use client';
import useFetchFeatured from '@/lib/hooks/useFetchFeatured';
import store from '@/lib/store/store';
import { Product } from '@/lib/types/types';
import ProductCart from '../ui/ProductCart';

const FeaturedProducts = () => {
  const { dark } = store();
  const { status, data } = useFetchFeatured();
  let products: Product[] = [];
  if (status === 'success') products = [...data?.data.data];

  return (
    <div className='mx-auto flex max-w-7xl flex-col items-center justify-center p-5'>
      <div className='flex w-full items-start justify-start'>
        <h1 className={`${dark && 'text-white'} w-1/2 text-3xl opacity-80 transition duration-500`}>
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
          <div className={`flex w-full flex-col flex-wrap gap-10 p-5 pt-10 sm:flex-row lg:gap-12`}>
            {products.map(({ id, attributes }) => (
              <ProductCart key={id} dark={dark} attributes={attributes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;

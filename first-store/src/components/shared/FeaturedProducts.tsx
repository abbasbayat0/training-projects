/* eslint-disable @next/next/no-img-element */
'use client';
import useFetchFeatured from '@/lib/hooks/useFetchFeatured';
import { Product } from '@/lib/types/types';
import ProductCart from '../ui/ProductCart';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';
// import getFeatured from '@/lib/actions/action';

const FeaturedProducts = () => {
  const dark = useSelector((state: RootState) => state.theme.dark);
  const { status, data } = useFetchFeatured();
  let products: Product[] = [];
  if (status === 'success') products = [...data?.data.data];

  // const featured = async () => {
  //   const products = await getFeatured();
  //   console.log(products);
  // };
  // featured();

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
          <div
            className={`${dark && 'border-white'} mt-10 animate-ping rounded-full border-2 p-2 transition duration-500`}
          ></div>
        ) : (
          <div className={`flex w-full flex-col flex-wrap gap-10 p-5 pt-10 sm:flex-row lg:gap-12`}>
            {products.map(({ id, attributes }) => (
              <ProductCart key={id} id={id} dark={dark} attributes={attributes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;

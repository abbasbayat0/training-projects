import useFetchProducts from '@/lib/hooks/useFetchProducts';
import { Product } from '@/lib/types/types';
import store from '@/lib/store/store';
import ProductCart from '../ui/ProductCart';
import { useState } from 'react';

const ProductsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { status, data, refetch } = useFetchProducts(currentPage);
  const { dark } = store();
  let products: Product[] = [];
  if (status === 'success') products = [...data?.data.data];

  const metaData = data?.data.meta;

  const pages = Array.from({ length: metaData?.pagination.pageCount }, (_, i) => i + 1);

  return (
    <div className={`mx-auto flex max-w-7xl flex-col items-center justify-center`}>
      {products.length === 0 ? (
        <h1 className={`${dark && 'text-white'} pt-5 transition duration-500`}>Loading Data ...</h1>
      ) : (
        <div className={`w-full`}>
          <div className={`mx-10 mt-10 flex flex-col`}>
            <p className={`${dark && 'text-white'} transition duration-500`}>
              {metaData.pagination.total} Product
            </p>
            <div className={`mx-auto mt-3 h-[1px] w-full border bg-black opacity-20 shadow`}></div>
          </div>

          <div className={`flex w-full flex-col flex-wrap gap-10 p-5 pt-10 sm:flex-row lg:gap-12`}>
            {products.map(({ id, attributes }) => (
              <ProductCart key={id} id={id} dark={dark} attributes={attributes} />
            ))}
          </div>
        </div>
      )}
      <div className='my-10 flex gap-5'>
        {pages.map((page) => {
          return (
            <p
              onClick={() => {
                setCurrentPage(page);
              }}
              key={page}
              className={`rounded-xl px-2 py-1 opacity-70 ${dark && 'bg-gray-800 text-white'} bg-gray-200 ${page === currentPage && 'scale-120 opacity-100'} cursor-pointer transition duration-500 select-none`}
            >
              {page}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;

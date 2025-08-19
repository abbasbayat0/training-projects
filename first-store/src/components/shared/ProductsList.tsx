import useFetchProducts from '@/lib/hooks/useFetchProducts';
import { Product } from '@/lib/types/types';
import store from '@/lib/store/store';
import ProductCart from '../ui/ProductCart';

const ProductsList = () => {
  const { status, data } = useFetchProducts();
  const { dark } = store();
  let products: Product[] = [];
  if (status === 'success') products = [...data?.data.data];

  return (
    <div className={`mx-auto max-w-7xl flex justify-center`}>
      {products.length === 0 ? (
        <h1 className={`${dark && 'text-white'} pt-5 transition duration-500`}>Loading Data ...</h1>
      ) : (
        <div className={`flex w-full flex-col flex-wrap gap-10 p-5 pt-10 sm:flex-row lg:gap-12`}>
          {products.map(({ id, attributes }) => (
            <ProductCart key={id} id={id} dark={dark} attributes={attributes} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsList;

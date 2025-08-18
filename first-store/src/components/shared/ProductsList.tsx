import useFetchProducts from '@/lib/hooks/useFetchProducts';
import { Product } from '@/lib/types/types';
import store from '@/lib/store/store';

const ProductsList = () => {
  const { status, data } = useFetchProducts();
  const { dark } = store();

  let products: Product[] = [];
  if (status === 'success') products = [...data?.data.data];
  return (
    <div className={`mx-auto max-w-7xl`}>
      {products.length === 0 ? (
        <h1 className={`${dark && 'text-white'} pt-5 transition duration-500`}>Loading Data ...</h1>
      ) : (
        <div className={`flex w-full flex-col flex-wrap gap-10 p-5 pt-10 sm:flex-row lg:gap-12`}>
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
  );
};

export default ProductsList;

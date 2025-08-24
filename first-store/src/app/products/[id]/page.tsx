'use client';
import SingleProduct from '@/components/shared/SingleProduct';
import store from '@/lib/store/store';
const page = () => {
  const { dark } = store();
  return (
    <div className={`${dark && 'bg-gray-700'} min-h-screen transition duration-500`}>
      <SingleProduct />
    </div>
  );
};

export default page;

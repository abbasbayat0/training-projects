'use client';
import SingleProduct from '@/components/shared/SingleProduct';
import { RootState } from '@/lib/store/store';
import { useSelector } from 'react-redux';
const page = () => {
  const dark = useSelector((state: RootState) => state.theme.dark);

  return (
    <div className={`${dark && 'bg-gray-700'} min-h-screen transition duration-500`}>
      <SingleProduct />
    </div>
  );
};

export default page;

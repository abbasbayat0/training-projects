'use client';
import store from '@/lib/store/store';

const page = () => {
  const { dark } = store();
  return (
    <div className={`h-screen w-full ${dark && 'bg-gray-600'} transition duration-500`}>
      <div className={`mx-auto max-w-7xl`}></div>
    </div>
  );
};

export default page;

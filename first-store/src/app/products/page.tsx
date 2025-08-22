'use client';
import ProductsList from '@/components/shared/ProductsList';
import store from '@/lib/store/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const page = () => {
  const queryClient = new QueryClient();
  const { dark } = store();
  return (
    <QueryClientProvider client={queryClient}>
      <div className={`${dark && 'bg-gray-700'} min-h-screen transition duration-500`}>
        <ProductsList />
      </div>
    </QueryClientProvider>
  );
};

export default page;

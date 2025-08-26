'use client';
import AppProvider from '@/components/shared/AppProvider';
import ProductsList from '@/components/shared/ProductsList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const page = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <ProductsList />
      </AppProvider>
    </QueryClientProvider>
  );
};

export default page;

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useFetchSingleProduct = (id: number) => {
  const { status, data, error } = useQuery({
    queryKey: ['singleProduct'],
    queryFn: async () => {
      const response = axios.get(`https://strapi-store-server.onrender.com/api/products/${id}`);
      return response;
    },
  });
  if (status === 'error')
    if (error instanceof Error) console.log(error.message);
    else console.log(`unknown error ${error}`);
  if (data?.data.data.length === 0) throw new Error('there is no data');
  return { status, data };
};

export default useFetchSingleProduct;

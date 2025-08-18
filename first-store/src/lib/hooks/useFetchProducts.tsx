import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useFetchProducts = () => {
  const res = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await axios.get('https://strapi-store-server.onrender.com/api/products');
      return response;
    },
  });
  if (res.status === "error")
    res.error instanceof Error ? console.log(res.error.message) : console.log(`${res.error}`);
  if (res.data?.data.length === 0) throw new Error('there is no data');
  return res;
};

export default useFetchProducts;

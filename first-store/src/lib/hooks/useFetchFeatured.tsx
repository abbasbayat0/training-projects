import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useFetchFeatured = () => {
  const fetchFeaturedProducts = async () => {
    const data = await axios.get(
      'https://strapi-store-server.onrender.com/api/products?featured=true',
    );
    return data;
  };
  const { status, data } = useQuery({
    queryKey: ['featured'],
    queryFn: fetchFeaturedProducts,
  });
  if (status === 'error') throw new Error('there is an error');
  if (data?.data.data.length === 0) throw new Error('there is no data');
  return { data, status };
};

export default useFetchFeatured;

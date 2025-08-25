'use server';
import prisma from '../utils/db';

const getFeatured = async () => {
  const products = await prisma.products.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

export default getFeatured;

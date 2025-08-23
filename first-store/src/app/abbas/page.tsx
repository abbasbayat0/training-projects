import { PrismaClient } from '@prisma/client';
import data from '@/assets/Products';

const page = async () => {
  const action = async () => {
    'use server';
    const prisma = new PrismaClient();
    try {
      for (const item of data) {
        await prisma.products.create({
          data: item,
        });
      }
      await prisma.$disconnect();
      return 'success';
    } catch (error) {
      console.log(error);
      await prisma.$disconnect();
      return 'failed';
    }
  };
  const add = await action();
  console.log(add);
  return <div>page</div>;
};

export default page;

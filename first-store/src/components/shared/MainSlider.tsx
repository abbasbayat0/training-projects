'use client';
import images from '@/assets/sliderImages';
import store from '@/lib/store/storev';
import Image from 'next/image';

const MainSlider = () => {
  const { dark } = store();
  return (
    <article className={`mr-2 hidden sm:flex sm:w-1/3`}>
      <section
        className={`flex w-full items-center justify-start gap-3 overflow-scroll scroll-smooth rounded-xl px-4 py-5 ${
          dark ? 'bg-gray-600' : 'bg-gray-700'
        } transition duration-500`}
      >
        {images.map((image) => {
          return (
            <div
              key={image.id}
              className='flex h-80 min-w-52 justify-start overflow-hidden rounded-xl'
            >
              <Image src={image.link} alt='slider Image' className='object-cover' />
            </div>
          );
        })}
      </section>
    </article>
  );
};

export default MainSlider;

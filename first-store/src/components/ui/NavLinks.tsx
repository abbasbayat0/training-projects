import listOfNavLinks from '@/assets/listOfNavLinks';
import store from '@/lib/store/store';
import Link from 'next/link';

const NavLinks = () => {
  const { dark, activePage, setActivePage } = store();
  return (
    <div className='hidden w-full gap-2 sm:flex sm:items-center sm:justify-between lg:mr-10'>
      {listOfNavLinks.map((item) => {
        const isActive = activePage === item.link;
        return (
          <Link
            onClick={() => setActivePage(item.link)}
            href={item.link}
            key={item.link}
            className={`cursor-pointer rounded-xl p-2 px-3 text-sm select-none ${
              dark && 'text-white'
            } ${isActive && 'bg-gray-700 text-white'} transition duration-500`}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;

import listOfNavLinks from '@/assets/listOfNavLinks';
import { setActivePage } from '@/lib/features/activePageSlice';
import { RootState } from '@/lib/store/store';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

const NavLinks = () => {
  const activePage = useSelector((state: RootState) => state.activePage.activePage);
  const dispatch = useDispatch();
  const dark = useSelector((state: RootState) => state.theme.dark);

  return (
    <div className='hidden w-full gap-2 sm:flex sm:items-center sm:justify-between lg:mr-10'>
      {listOfNavLinks.map((item) => {
        const isActive = activePage === item.link;
        return (
          <Link
            onClick={() => dispatch(setActivePage(item.link))}
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

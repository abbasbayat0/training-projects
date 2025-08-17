import listOfNavLinks from '@/assets/listOfNavLinks';
import store from '@/lib/store/store';

const NavLinks = () => {
  const { dark } = store();
  return (
    <div className="hidden w-full gap-2 sm:flex sm:items-center sm:justify-between lg:mr-10">
      {listOfNavLinks.map((item) => {
        const isActive = window.location.pathname === item.link;
        return (
          <p
            key={item.link}
            className={`cursor-pointer rounded-xl p-2 text-sm select-none ${
              dark && 'text-white'
            } ${isActive && 'bg-gray-700 text-white'}`}>
            {item.title}
          </p>
        );
      })}
    </div>
  );
};

export default NavLinks;

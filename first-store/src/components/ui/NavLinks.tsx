import listOfNavLinks from "@/assets/listOfNavLinks";
import store from "@/lib/store/store";

const NavLinks = () => {
  const { dark } = store();
  return (
    <div className="hidden sm:flex sm:items-center sm:justify-between gap-5">
      <div
        className={`${dark?"bg-pink-700":"bg-blue-600"} w-10 h-10 flex justify-center items-center rounded-xl text-2xl font-bold text-white opacity-90 select-none cursor-pointer`}
      >
        C
      </div>
      <div className={`flex gap-2 md:gap-5 md:ml-10 850:ml-28 950:ml-36 lg:ml-56`}>
        {listOfNavLinks.map((item) => {
          const isActive = window.location.pathname === item.link;
          return (
            <p
              key={item.link}
              className={`text-sm p-2 rounded-xl cursor-pointer select-none ${dark && "text-white"} ${
                isActive && "bg-gray-700 text-white"
              }`}
            >
              {item.title}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default NavLinks;

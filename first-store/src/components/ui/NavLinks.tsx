import listOfNavLinks from "@/assets/listOfNavLinks";
import store from "@/lib/store/store";

const NavLinks = () => {
  const { dark } = store();
  return (
    <div className="hidden sm:flex sm:items-center sm:justify-between gap-2 w-full lg:mr-10 ">
        {listOfNavLinks.map((item) => {
          const isActive = window.location.pathname === item.link;
          return (
            <p
              key={item.link}
              className={`text-sm p-2 rounded-xl cursor-pointer select-none ${
                dark && "text-white"
              } ${isActive && "bg-gray-700 text-white"}`}
            >
              {item.title}
            </p>
          );
        })}
      </div>
  );
};

export default NavLinks;

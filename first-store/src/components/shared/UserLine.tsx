import store from "@/lib/store/store";

const UserLine = () => {
  const { dark } = store();
  return (
    <section
      className={`${
        dark ? "bg-gray-600" : "bg-gray-800"
      } flex justify-center mx-auto gap-5 py-2`}
    >
      <p className="text-xs text-white font-thin opacity-80 cursor-pointer select-none hover:underline sm:text-[14px]">
        Sign In / Guest
      </p>
      <p className="text-xs text-white font-thin opacity-80 cursor-pointer select-none hover:underline sm:text-[14px]">
        Create Account
      </p>
    </section>
  );
};

export default UserLine;

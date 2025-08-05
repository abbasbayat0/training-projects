import { Link, NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex gap-5">
      <NavLink to="/about">About</NavLink>
      <Link to="/products">Products</Link>
      <Link to="/contact">Contact</Link>
      <Outlet />
    </div>
  );
};

export default Home;

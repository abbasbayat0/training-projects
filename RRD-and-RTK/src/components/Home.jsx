import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex gap-5">
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/contact">Contact</Link>
      <Outlet />
    </div>
  );
};

export default Home;

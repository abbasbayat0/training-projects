import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearName, removeOne } from "../store/features/cart/cartSlice";

const Products = () => {
  const { name } = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const clear = (id) => {
    dispatch(removeOne(id));
  };
  return (
    <div>
      <Link to="/">Home</Link>
      <p onClick={() => clear(2)}>clear</p>
      <p>{name}</p>
    </div>
  );
};

export default Products;

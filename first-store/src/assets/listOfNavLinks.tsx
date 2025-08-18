import { IoHomeOutline } from 'react-icons/io5';
import { AiOutlineProduct } from 'react-icons/ai';
import { IoCartOutline } from 'react-icons/io5';
import { IoPersonAddOutline } from 'react-icons/io5';
import { IoBagCheckOutline } from 'react-icons/io5';
import { CiViewList } from 'react-icons/ci';

const listOfNavLinks = [
  { title: 'Home', icon: <IoHomeOutline />, link: '/' },
  { title: 'Products', icon: <AiOutlineProduct />, link: '/products' },
  { title: 'Cart', icon: <IoCartOutline />, link: '/cart' },
  { title: 'About', icon: <IoPersonAddOutline />, link: '/about' },
  { title: 'CheckOut', icon: <IoBagCheckOutline />, link: '/checkout' },
  { title: 'Order', icon: <CiViewList />, link: '/order' },
];

export default listOfNavLinks;

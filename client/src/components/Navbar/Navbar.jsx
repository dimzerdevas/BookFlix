import { Link } from 'react-router-dom';
import './style.css';
import {Login} from '../Login';

export const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Login />
      {/* Add authentication links based on user authentication status */}
    </nav>
  );
};


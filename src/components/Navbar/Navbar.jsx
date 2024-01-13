import { Link } from 'react-router-dom';
import './style.css';

export const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      {/* Add authentication links based on user authentication status */}
    </nav>
  );
};


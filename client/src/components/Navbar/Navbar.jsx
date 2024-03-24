import { Link } from "react-router-dom";
import "./style.css";
import { Login } from "../../views/Login";
import logo from "../../assets/images/bookflixlogo.png";

export const Navbar = () => {
  return (
    <nav>
      <div className="nav_left-submenu">
        <Link to="/">
          <img src={logo} />
        </Link>
        <Link to="/">Home</Link>
      </div>
      <Login />
      {/* Add authentication links based on user authentication status */}
    </nav>
  );
};

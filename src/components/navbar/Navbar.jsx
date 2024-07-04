import "./navbar.css";
import { CartWidget } from "../cartWidget/CartWidget";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="navbarContainer">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dyql4pxul/image/upload/v1718247286/y2pxivzfcj1omkgprlxi.png "
            alt=""
          />
        </Link>

        <ul>
          <Link to="/category/remeras" className="navButton">
            Remeras
          </Link>
          <Link to="/category/zapatillas" className="navButton">
            Zapatillas
          </Link>
          <Link to="/category/pantalones" className="navButton">
            Pantalones
          </Link>
        </ul>

        <CartWidget />
      </div>
    </div>
  );
};

import "./navbar.css";
import { CartWidget } from "../cartWidget/CartWidget";

export const Navbar = () => {
  return (
    <div className="navbarContainer">
      <img
        src="https://res.cloudinary.com/dyql4pxul/image/upload/v1718247286/y2pxivzfcj1omkgprlxi.png "
        alt=""
      />

      <ul>
        <li className="navButton">
          <a href="#">Remeras</a>
        </li>
        <li className="navButton">
          <a href="#">Zapatillas</a>
        </li>
        <li className="navButton">
          <a href="#">Pantalones</a>
        </li>
      </ul>

      <CartWidget />
    </div>
  );
};

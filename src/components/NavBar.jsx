import { NavLink } from "react-router-dom";

const NavBar = () => (
  <div className="navbar">
    <span className="nav-brand"></span>
    <div className="nav-links">
      <NavLink className="nav-item" to="/search">
        Search
      </NavLink>
      <NavLink className="nav-item" to="/favorite">
        Favorite
      </NavLink>
    </div>
    <div></div>
  </div>
);

export default NavBar;

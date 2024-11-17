import "./Nav.scss";
import Format from "../../components/Format/Format";
import { logo, Search, Shop, User } from "../../constants";
import { Link, NavLink } from "react-router-dom";
import { menus } from "../../constants";

const Nav = () => {
  return (
    <div className="nav">
      <Format height="height">
        <div className="nav_items">
          <Link to="/" className="logo">
            <img src={logo} alt="logo_ecommerce" />
            <p>Ecommerce</p>
          </Link>
          <div className="nav_menu">
            {menus.map((menu) => {
              return (
                <div key={menu.id} className="menu">
                  <NavLink to={menu.to}>
                    {menu.label}
                    {menu.icon && (
                      <img
                        src={menu.icon}
                        alt="icon"
                        className="category_icon"
                      />
                    )}
                  </NavLink>
                </div>
              );
            })}
          </div>
          <div className="user_interact">
            <div className="search_wrapper">
              <img src={Search} alt="" />
              <input type="text" placeholder="Search products" />
            </div>
            <img src={Shop} alt="shopping_cart" />
            <img src={User} alt="User_icon" />
          </div>
        </div>
      </Format>
    </div>
  );
};

export default Nav;

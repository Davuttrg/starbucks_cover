import { NavLink } from "react-router-dom";
import { AccountButton } from "./accountButton/accountButton";
import { Basket } from "./basket/basket";
import "./header.scss";
import { Search } from "./search/search";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="logo.png" alt="" />
      </div>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Menu
        </NavLink>
      </nav>
      <ul className="header-actions">
        <li>
          <Search />
        </li>
        <li>
          <Basket />
        </li>
        <li>
          <AccountButton />
        </li>
      </ul>
    </header>
  );
};

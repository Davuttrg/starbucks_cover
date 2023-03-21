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
        <ul>
          <li>Home</li>
          <li>Menü</li>
        </ul>
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

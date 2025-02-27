import "./Header.css";
import LOGO from "../../assets/img/kasha-soft.svg";
import MenuButton from "./components/menu-button";

function Header() {
  return (
    <div className="header-container">
      <div className="logo">
        <img src={LOGO} />
      </div>
      <div className="header-container-right">
        <div className="header-phone-container">
          <a href="tel:+79999999999" className="header-phone">
            +7 (999) 999-99-99
          </a>
        </div>
        <MenuButton />
      </div>
    </div>
  );
}

export default Header;

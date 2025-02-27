import CIRCLE from "../../../img/menu-circle.svg";
import "./menu-button.css";

function MenuButton() {
  return (
    <div className="header-menu">
      <span>Меню</span>
      <img src={CIRCLE} />
    </div>
  );
}

export default MenuButton;

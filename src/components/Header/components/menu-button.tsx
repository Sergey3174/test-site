import "./menu-button.css";

function MenuButton() {
  return (
    <div className="header-menu">
      <span>Меню</span>
      <svg
        className="icon"
        width="33"
        height="29"
        viewBox="0 0 33 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="2" width="10" height="10" rx="5" fill="white" />
        <rect x="19" y="2" width="10" height="10" rx="5" fill="white" />
        <rect x="4" y="17" width="10" height="10" rx="5" fill="white" />
        <rect x="19" y="17" width="10" height="10" rx="5" fill="white" />
      </svg>
    </div>
  );
}

export default MenuButton;

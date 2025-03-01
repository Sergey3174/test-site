import "./FooterMenu.css";

const MENU = [
  { name: "Услуги", to: "/" },
  { name: "Портфолио", to: "/" },
  { name: "iiko", to: "/" },
  { name: "Контакты", to: "/" },
];

function FooterMenu() {
  return (
    <div className="footer-menu">
      <ul>
        {MENU.map(({ name, to }) => (
          <li>
            <a href={to}>{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterMenu;

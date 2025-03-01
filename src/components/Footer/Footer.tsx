import "./Footer.css";

import FooterCoolumn from "./components/FooterColumn/FooterColumn";
import FooterMenu from "./components/FooterMenu/FooterMenu";
import FooterContacts from "./components/FooterContacts/FooterContacts";
import LogoFooter from "./components/LogoFooter/LogoFooter";
import Digital from "./components/Digital/Digital";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-panel">
          <Digital />
          <FooterCoolumn>
            <FooterMenu />
          </FooterCoolumn>
          <FooterCoolumn>
            <FooterContacts />
          </FooterCoolumn>
        </div>

        <LogoFooter />
      </div>
    </div>
  );
}

export default Footer;

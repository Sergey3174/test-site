import "./MainIiko.css";
import IIKO_LOGO from "../../assets/img/Logo_iiko.svg";

function MainIiko() {
  return (
    <div className="main-iiko-container">
      <div className="iiko-log">
        <img src={IIKO_LOGO} />
      </div>
      <div className="main-iiko-card-container">
        <p className="main-iiko-text">
          Понимаем ресторанный бизнес и помогаем ему развиваться
        </p>
        <div className="main-iiko-card">
          <p className="main-iiko-card-text">поддерживаем</p>
          <p className="main-iiko-card-num">253</p>
          <p className="main-iiko-card-text text-right">заведения</p>
        </div>
      </div>
    </div>
  );
}

export default MainIiko;

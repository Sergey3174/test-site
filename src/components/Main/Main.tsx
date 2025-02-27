import MainIiko from "../MainIiko/MainIiko";
import MainProjects from "../MainProjects/MainProjects";
import "./Main.css";

function Main() {
  return (
    <div className="main-container">
      <MainProjects />
      <MainIiko />
    </div>
  );
}

export default Main;

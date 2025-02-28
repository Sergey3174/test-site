import MainIiko from "../MainIiko/MainIiko";
import MainProjects from "../MainProjects/MainProjects";
import "./Main.css";

interface MainProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Main: React.FC<MainProps> = ({ onClick }) => {
  return (
    <div className="main-container">
      <MainProjects onClick={onClick} />
      <MainIiko />
    </div>
  );
}

export default Main;

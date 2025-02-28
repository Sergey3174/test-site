import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Animation from "../Animation/Animation";
import "./StartPage.css";

function StartPage() {

  const [isActive, setIsActive] = useState<boolean>(true);

  const handleChildClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("lastSlide") || target.classList.contains("nextSlide")) {
      return;
    }
    setIsActive((prev) => !prev);
  };
  
  return (
    <div className="start-page-container">
      <Header />
      {isActive ? <Main onClick={handleChildClick} /> : <Animation />}
    </div>
  );
}

export default StartPage;

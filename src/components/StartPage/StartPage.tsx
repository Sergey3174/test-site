import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Animation from "../Animation/Animation";
import "./StartPage.css";

function StartPage() {
  const [isActive, setIsActive] = useState<boolean>(true);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [circleAnimationEnded, setCircleAnimationEnded] = useState(false);

  const handleAnimationEnd = () => {
    setBackgroundColor("#F1F1F1"); // Изменение фона на контейнере
    setCircleAnimationEnded(true); // Устанавливаем флаг, что анимация завершена
  };

  const handleChildClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLElement;
    if (
      target.classList.contains("lastSlide") ||
      target.classList.contains("nextSlide")
    ) {
      return;
    }
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    if (backgroundColor === "#F1F1F1") {
      document.body.style.backgroundColor = "#F1F1F1"; // Меняем цвет фона на уровне body
    } else {
      document.body.style.backgroundColor = ""; // Возвращаем стандартный фон, если нужно
    }
  }, [backgroundColor]);

  return (
    <div className="start-page-container" style={{ backgroundColor }}>
      <Header />
      {isActive ? <Main onClick={handleChildClick} /> : <Animation />}
      {/* Показываем круг только если анимация завершена и фоновый цвет изменён */}
      {!isActive && !circleAnimationEnded && (
        <div className="circle-wrapper">
          <div
            className="circle"
            onAnimationEnd={handleAnimationEnd} // Добавляем обработчик события для окончания анимации
          ></div>
        </div>
      )}
    </div>
  );
}

export default StartPage;

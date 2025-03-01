import { useEffect, useState } from "react";
import "./Title.css";

function Title() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const newOpacity = Math.max(0.2, 1 - window.scrollY / 500);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="title-container-wrapper"
        style={{ opacity: `${opacity}` }}
      >
        <div className="title-container">
          <span>
            Проекты<sup>9</sup>
          </span>
        </div>
      </div>
    </>
  );
}

export default Title;

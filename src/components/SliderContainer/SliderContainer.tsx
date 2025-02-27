import './SliderContainer.css'

import { useState } from "react";
import { motion  } from "framer-motion";

type Slide = {
    title: string;
    video: string;
  };
  
  const slides: Slide[] = [
    {
      title: "Калипсо",
      video: "/video/kalipso.mp4",
    },
    {
      title: "КофеКульт",
      video: "/video/КофеКульт.mp4",
    },
    {
      title: "Таймлайн",
      video: "/video/Таймлайн.mp4",
    },
  ];
  
  export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      if (currentIndex < slides.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    };
  
    const prevSlide = () => {
      if (currentIndex > 0) {
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }
    };
  
    return (
      <div className="slider-wrapper">
        {/* Заголовок */}
        <div className="p-4 bg-white rounded-2xl text-container">
          <p className='video-text'>Проекты</p>        
          <h2 className="text-2xl font-bold video-title">{slides[currentIndex].title}</h2>
        </div>
  
        <div className="slider-container">
          <motion.div
            className="slider-row"
            animate={{ translateX: `-${currentIndex * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {slides.map((slide, index) => (
              <video
                key={index}
                src={slide.video}
                className="slider-video"
                autoPlay
                loop
                muted
                playsInline
              />
            ))}
          </motion.div>
          <div className="block-btn">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`lastSlide ${currentIndex === 0 ? "disabled" : ""}`}
          ></button>
  
          <button
            onClick={nextSlide}
            disabled={currentIndex === slides.length - 1}
            className={`nextSlide ${currentIndex === slides.length - 1 ? "disabled" : ""}`}
          ></button>
        </div>
        </div>
      </div>
    );
  }
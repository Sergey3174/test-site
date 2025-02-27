import './SliderContainer.css'

// function SliderContainer() {

//   return (
//     <div className='slider-container'>
//         <div>
//             <span>Проекты</span>
//             <span>Калипсо</span>
//         </div>
//         <div></div>
//     </div>
//   )
// }

// export default SliderContainer

import { useState } from "react";
import { motion } from "framer-motion";

type SliderContainer = {
  title: string;
  video: string;
};

const slides: SliderContainer[] = [
  {
    title: "Калипсо",
    video: "public/video/kalipso.mp4",
  },
  {
    title: "КофеКульт",
    video: "public/video/КофеКульт.mp4",
  },
  {
    title: "Таймлайн",
    video: "public/video/Таймлайн.mp4",
  },
];

function SliderContainer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center gap-4">
        <div className="p-4 bg-white rounded-b-2xl">
          <h2 className="text-2xl font-bold">{slides[currentIndex].title}</h2>
        </div>
      <motion.div
        key={currentIndex}
        className="relative w-full max-w-lg overflow-hidden rounded-2xl shadow-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        <video
          key={currentIndex} // Чтобы видео сбрасывалось при смене слайда
          src={slides[currentIndex].video}
          className="w-full rounded-t-2xl slider-video"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* <div className="p-4 bg-white rounded-b-2xl">
          <h2 className="text-2xl font-bold">{slides[currentIndex].title}</h2>
        </div> */}
      </motion.div>
      <div className="flex gap-4 block-btn">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-900"
        >
          ⬅ Назад
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          Вперёд ➡
        </button>
      </div>
    </div>
  );
}

export default SliderContainer

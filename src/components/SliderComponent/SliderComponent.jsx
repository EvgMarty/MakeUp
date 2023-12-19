import styles from './SliderComponent.module.scss';
import React, { useState } from 'react';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: false,
    afterChange: (index) => setCurrentSlide(index),
  };

  const images = [
    './img/sliderHeader/fon_1.jpg',
    './img/sliderHeader/fon_2.jpg',
    './img/sliderHeader/fon_3.jpg',
  ];

  const slideContents = [
    {
      title: 'Для кожної красуні - свій візажист',
      description: 'Зі мною ви станете чарівними',
      descrip:
        'Я підкреслю вашу природну красу і додам трохи магії у ваш образ!',
    },
    {
      title: '',
      description: 'Довіряй професіоналу',
      descrip:
        'Я створю унікальний образ, щоб ти почувалася впевнено і привабливо!',
    },
    {
      title: 'Курси',
      description: 'Стань майстром у світі краси та мистецтва макіяжу',
      descrip: 'Почни свій шлях із моїх професійних курсів!',
    },
  ];

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={styles.slideItem}>
            <img src={image} alt={`Slide ${index + 1}`} />

            <AnimatePresence>
              {currentSlide === index && (
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className={styles.overlayText}
                >
                  <p>{slideContents[index].title}</p>
                  <h3>{slideContents[index].description}</h3>
                  <h5>{slideContents[index].descrip}</h5>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;

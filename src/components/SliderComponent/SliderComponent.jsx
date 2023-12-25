import styles from './SliderComponent.module.scss';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ROUTES } from '../../utils/routes';
import BtnBlack from '../../UI/BtnBlack/BtnBlack';

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
      title: '',
      description: 'Довіряй професіоналу',
      descrip: 'З моїм макіяжем та зачіскою будеш найгарнішою!',
      btnTitle: 'Прайс',
      link: ROUTES.PRICE,
    },
    {
      title: 'Для кожної красуні - свій візажист',
      description: 'Зі мною ви станете чарівними',
      descrip:
        'Я підкреслю вашу природну красу і додам трохи магії у ваш образ!',
      btnTitle: 'Прайс',
      link: ROUTES.PRICE,
    },

    {
      title: 'Курси',
      description: 'Стань майстром у світі краси та мистецтва макіяжу',
      descrip: 'Почни свій шлях із моїх професійних курсів!',
      btnTitle: 'Детальніше',
      link: ROUTES.COURSE,
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
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className={styles.overlayText}
                >
                  <p>{slideContents[index].title}</p>
                  <h3>{slideContents[index].description}</h3>
                  <h5>{slideContents[index].descrip}</h5>
                  <BtnBlack to={slideContents[index].link}>
                    {slideContents[index].btnTitle}
                  </BtnBlack>
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

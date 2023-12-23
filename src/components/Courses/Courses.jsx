import styles from './Courses.module.scss';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ROUTES } from '../../utils/routes';
import BtnBlackBig from '../../UI/BtnBlackBig/BtnBlackBig';

const Courses = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [controls, inView]);

  return (
    <div className={styles.coursesWrapper}>
      <motion.div className={styles.courses} ref={ref}>
        <motion.div
          className={styles.cours}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          animate={controls}
        >
          <img src="/img/courses/myself.jpeg" alt="" />
          <h3 className={styles.nameCourse}>Сам собі візажист</h3>
        </motion.div>
        <motion.div
          className={styles.cours}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          animate={controls}
        >
          <img src="/img/courses/viz0.jpeg" alt="" />
          <h3 className={styles.nameCourse}>Візажист з 0</h3>
        </motion.div>
      </motion.div>
      <BtnBlackBig to={ROUTES.COURSE}>Детальніше про курси</BtnBlackBig>
    </div>
  );
};

export default Courses;

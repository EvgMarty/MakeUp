import styles from './CoursesPreShow.module.scss';
import { galleryCourse } from '../../data/dataGallary';
import { useState } from 'react';
const CoursesPreShow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (i) => {
    setActiveIndex(i);
  };

  return (
    <div className={styles.preShow}>
      {galleryCourse.map((item, i) => {
        return (
          <div
            key={i}
            className={
              activeIndex === i
                ? `${styles.item} ${styles.active}`
                : styles.item
            }
            onClick={() => handleItemClick(i)}
          >
            <img src={item} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default CoursesPreShow;

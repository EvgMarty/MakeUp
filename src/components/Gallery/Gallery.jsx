import styles from './Gallery.module.scss';
import { Link } from 'react-router-dom';
import { galleryInst } from '../../data/dataGallary';

const Gallery = () => {
  return (
    <ul className={styles.gallery}>
      {galleryInst.map((item, i) => {
        return (
          <li key={i} className={styles.galleryItem}>
            <Link to={item.link}>
              <img src={item.img} alt="" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Gallery;

import { Link } from 'react-router-dom';
import styles from './Gallery.module.scss';

const Gallery = () => {
  return (
    <ul className={styles.gallery}>
      <li className={styles.galleryItem}>
        <Link to="https://www.instagram.com/">
          <img src="/img/inst/gallery_1.jpg" alt="" />
        </Link>
      </li>
      <li className={styles.galleryItem}>
        <Link to="https://www.instagram.com/">
          <img src="/img/inst/gallery_1.jpg" alt="" />
        </Link>
      </li>
      <li className={styles.galleryItem}>
        <Link to="https://www.instagram.com/">
          <img src="/img/inst/gallery_1.jpg" alt="" />
        </Link>
      </li>
      <li className={styles.galleryItem}>
        <Link to="https://www.instagram.com/">
          <img src="/img/inst/gallery_1.jpg" alt="" />
        </Link>
      </li>
      <li className={styles.galleryItem}>
        <Link to="https://www.instagram.com/">
          <img src="/img/inst/gallery_1.jpg" alt="" />
        </Link>
      </li>
      <li className={styles.galleryItem}>
        <Link to="https://www.instagram.com/">
          <img src="/img/inst/gallery_1.jpg" alt="" />
        </Link>
      </li>
      <li className={styles.galleryItem}>
        <Link to="https://www.instagram.com/">
          <img src="/img/inst/gallery_1.jpg" alt="" />
        </Link>
      </li>
      <li className={styles.galleryItem}>
        <Link to="https://www.instagram.com/">
          <img src="/img/inst/gallery_1.jpg" alt="" />
        </Link>
      </li>
      <li className={styles.galleryItem}>
        <Link to="https://www.instagram.com/">
          <img src="/img/inst/gallery_1.jpg" alt="" />
        </Link>
      </li>
      <li className={styles.galleryItem}>
        <Link to="https://www.instagram.com/">
          <img src="/img/inst/gallery_1.jpg" alt="" />
        </Link>
      </li>
      <li className={styles.galleryItem}>
        <Link to="https://www.instagram.com/">
          <img src="/img/inst/gallery_1.jpg" alt="" />
        </Link>
      </li>
      <li className={styles.galleryItem}>
        <Link to="https://www.instagram.com/">
          <img src="/img/inst/gallery_1.jpg" alt="" />
        </Link>
      </li>
    </ul>
  );
};

export default Gallery;

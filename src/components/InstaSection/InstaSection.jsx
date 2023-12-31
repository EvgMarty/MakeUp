import styles from './InstaSection.module.scss';
import Container from '../Container/Container';

import { FaInstagram } from 'react-icons/fa';
import BtnTotalBlack from '../../UI/BtnTotalBlack/BtnTotalBlack';
import Gallery from '../Gallery/Gallery';

const InstaSection = () => {
  return (
    <div className="">
      <Container>
        <div className={styles.sectionGroup}>
          <div className={styles.titleWrapper}>
            <h4>Мої роботи</h4>
            <p>Переглянути мої роботи можна в інстраграмі</p>
            <BtnTotalBlack to="https://www.instagram.com/babichkaa__/">
              <FaInstagram className={styles.icon} />
              <p>Instagram</p>
            </BtnTotalBlack>
          </div>
          <div className={styles.imgWrapper}>
            <div className={styles.imgContainer}>
              <img src="/img/inst/photoReals_1.jpg" alt="" />
            </div>
            <div className={styles.imgContainer}>
              <img src="/img/inst/photoReals_2.jpg" alt="" />
            </div>
          </div>
          <Gallery />
        </div>
      </Container>
    </div>
  );
};

export default InstaSection;

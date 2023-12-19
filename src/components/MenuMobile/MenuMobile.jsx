import styles from './MenuMobile.module.scss';
import NavMobile from '../NavMobile/NavMobile';
import { FaPhoneAlt } from 'react-icons/fa';
import BtnBlack from '../../UI/BtnBlack/BtnBlack';
import BtnTotalBlack from '../../UI/BtnTotalBlack/BtnTotalBlack';

const MenuMobile = (props) => {
  const { active, closeBurgerMenu, openCart } = props;

  return (
    <div
      className={
        active ? `${styles.navMobile} ${styles.active}` : styles.navMobile
      }
    >
      <NavMobile closeBurgerMenu={closeBurgerMenu} />
      <div className={styles.toolsWraper}>
        <BtnTotalBlack>
          <a href="tel:+380509344650">
            <FaPhoneAlt />
          </a>
        </BtnTotalBlack>

        <BtnBlack
          onClick={() => {
            openCart();
            closeBurgerMenu();
          }}
        >
          Запис
        </BtnBlack>
      </div>
    </div>
  );
};

export default MenuMobile;

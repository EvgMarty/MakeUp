import styles from './MenuMobile.module.scss';
import NavMobile from '../NavMobile/NavMobile';
import { FaPhoneAlt } from 'react-icons/fa';
import BtnCall from '../../UI/BtnCall/BtnCall';
import BtnEntry from '../../UI/BtnEntry/BtnEntry';

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
        <BtnCall>
          <FaPhoneAlt />
        </BtnCall>
        <BtnEntry
          onClick={() => {
            openCart();
            closeBurgerMenu();
          }}
        >
          ЗАПИС
        </BtnEntry>
      </div>
    </div>
  );
};

export default MenuMobile;

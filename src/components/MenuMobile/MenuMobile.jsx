import styles from './MenuMobile.module.scss';
import NavMobile from '../NavMobile/NavMobile';
import { FaPhoneAlt } from 'react-icons/fa';
import BtnCall from '../../UI/BtnCall/BtnCall';
import CartBtn from '../../UI/CartBtn/CartBtn';

const MenuMobile = (props) => {
  const { active, closeBurgerMenu, openCart, cartItem } = props;

  return (
    <div
      className={
        active ? `${styles.navMobile} ${styles.active}` : styles.navMobile
      }
    >
      <NavMobile closeBurgerMenu={closeBurgerMenu} />
      <div className={styles.toolsWraper}>
        <BtnCall>
          <a href="tel:+380509344650">
            <FaPhoneAlt />
          </a>
        </BtnCall>

        <CartBtn
          cartItem={cartItem}
          onClick={() => {
            openCart();
            closeBurgerMenu();
          }}
        >
          Запис
        </CartBtn>
      </div>
    </div>
  );
};

export default MenuMobile;

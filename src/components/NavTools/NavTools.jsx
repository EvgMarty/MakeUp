import styles from './NavTools.module.scss';
import { FaPhoneAlt } from 'react-icons/fa';
import BtnBurgerMenu from '../../UI/BtnBurgerMenu/BtnBurgerMenu';
import BtnCall from '../../UI/BtnCall/BtnCall';
import CartBtn from '../../UI/CartBtn/CartBtn';

const NavTools = (props) => {
  const { active, toggleBurgerMenu, openCart, cartItem } = props;

  return (
    <div className={styles.navTools}>
      <BtnCall hideOnMobile={true}>
        <a href="tel:+380509344650">
          <FaPhoneAlt />
        </a>
      </BtnCall>
      <CartBtn onClick={openCart} hideOnMobile={true} cartItem={cartItem}>
        Запис
      </CartBtn>
      <BtnBurgerMenu active={active} toggleBurgerMenu={toggleBurgerMenu} />
    </div>
  );
};

export default NavTools;

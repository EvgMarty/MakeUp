import styles from './NavTools.module.scss';
import { FaPhoneAlt } from 'react-icons/fa';
import BtnBurgerMenu from '../../UI/BtnBurgerMenu/BtnBurgerMenu';
import BtnBlack from '../../UI/BtnBlack/BtnBlack';
import BtnTotalBlack from '../../UI/BtnTotalBlack/BtnTotalBlack';

const NavTools = (props) => {
  const { active, toggleBurgerMenu, openCart } = props;

  return (
    <div className={styles.navTools}>
      <BtnTotalBlack hideOnMobile={true}>
        <a href="tel:+380509344650">
          <FaPhoneAlt />
        </a>
      </BtnTotalBlack>
      <BtnBlack onClick={openCart} hideOnMobile={true}>
        Запис
      </BtnBlack>
      <BtnBurgerMenu active={active} toggleBurgerMenu={toggleBurgerMenu} />
    </div>
  );
};

export default NavTools;

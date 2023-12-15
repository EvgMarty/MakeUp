import styles from './NavMobile.module.scss';
import { ROUTES } from '../../utils/routes';
import { NavLink } from 'react-router-dom';

const NavMobile = ({ closeBurgerMenu }) => {
  return (
    <ul className={styles.navListMob}>
      <li className={styles.navItemMob}>
        <NavLink to={ROUTES.MAIN} onClick={closeBurgerMenu}>
          Головна
        </NavLink>
      </li>
      <li className={styles.navItemMob}>
        <NavLink to={ROUTES.PRICE} onClick={closeBurgerMenu}>
          Ціни
        </NavLink>
      </li>
      <li className={styles.navItemMob}>
        <NavLink to={ROUTES.COURSE} onClick={closeBurgerMenu}>
          Курси
        </NavLink>
      </li>
    </ul>
  );
};

export default NavMobile;

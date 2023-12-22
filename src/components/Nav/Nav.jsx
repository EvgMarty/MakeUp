import styles from './Nav.module.scss';
import { ROUTES } from '../../utils/routes';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const classLinkActive = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <NavLink className={classLinkActive} to={ROUTES.MAIN}>
            Головна
          </NavLink>
        </li>
        <li>
          <NavLink className={classLinkActive} to={ROUTES.PRICE}>
            Ціни
          </NavLink>
        </li>
        <li>
          <NavLink className={classLinkActive} to={ROUTES.COURSE}>
            Курси
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

import styles from './Nav.module.scss';
import { ROUTES } from '../../utils/routes';

import { NavLink } from 'react-router-dom';
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
            to={ROUTES.MAIN}
          >
            Головна
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
            to={ROUTES.PRICE}
          >
            Ціна
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
            to={ROUTES.COURSE}
          >
            Курси
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

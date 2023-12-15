import NavMobile from '../NavMobile/NavMobile';
import styles from './MenuMobile.module.scss';

const MenuMobile = ({ active, closeBurgerMenu }) => {
  console.log(active);
  return (
    <div
      className={
        active ? `${styles.navMobile} ${styles.active}` : styles.navMobile
      }
    >
      <NavMobile closeBurgerMenu={closeBurgerMenu} />
    </div>
  );
};

export default MenuMobile;

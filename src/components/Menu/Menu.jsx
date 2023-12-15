import styles from './Menu.module.scss';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import NavTools from '../NavTools/NavTools';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.containerMenu}>
        <div className={styles.menuWrapper}>
          <Logo />
          <Nav />
          <NavTools />
        </div>
      </div>
    </div>
  );
};

export default Menu;

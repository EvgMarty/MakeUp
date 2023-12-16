import styles from './Menu.module.scss';
import { useState } from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import NavTools from '../NavTools/NavTools';
import MenuMobile from '../MenuMobile/MenuMobile';

const Menu = () => {
  // burger menu
  const [active, setActive] = useState(false);

  const toggleBurgerMenu = () => {
    setActive(!active);
  };

  const closeBurgerMenu = () => {
    setActive(false);
  };

  return (
    <>
      <div className={styles.menu}>
        <div className={styles.containerMenu}>
          <div className={styles.menuWrapper}>
            <Logo />
            <Nav />
            <NavTools active={active} toggleBurgerMenu={toggleBurgerMenu} />
          </div>
        </div>
      </div>
      <MenuMobile active={active} closeBurgerMenu={closeBurgerMenu} />
    </>
  );
};

export default Menu;

import styles from './Menu.module.scss';
import { useState } from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import NavTools from '../NavTools/NavTools';
import MenuMobile from '../MenuMobile/MenuMobile';
import Cart from '../Cart/Cart';

const Menu = () => {
  // burger menu
  const [active, setActive] = useState(false);

  const toggleBurgerMenu = () => {
    setActive(!active);
  };

  const closeBurgerMenu = () => {
    setActive(false);
  };

  // Cart menu
  const [activeCart, setActiveCart] = useState(false);

  const openCart = () => {
    setActiveCart(true);
  };

  const closeCart = () => {
    setActiveCart(false);
  };

  // no-scroll

  if (activeCart) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }

  return (
    <>
      <div className={styles.menu}>
        <div className={styles.containerMenu}>
          <div className={styles.menuWrapper}>
            <Logo />
            <Nav />
            <NavTools
              active={active}
              openCart={openCart}
              toggleBurgerMenu={toggleBurgerMenu}
            />
          </div>
        </div>
      </div>

      <Cart activeCart={activeCart} closeCart={closeCart} />
      <MenuMobile
        active={active}
        openCart={openCart}
        closeBurgerMenu={closeBurgerMenu}
      />
    </>
  );
};

export default Menu;

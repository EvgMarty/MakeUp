import styles from './NavTools.module.scss';
import BtnCall from '../../UI/BtnCall/BtnCall';
import BtnEntry from '../../UI/BtnEntry/BtnEntry';
import BtnBurgerMenu from '../../UI/BtnBurgerMenu/BtnBurgerMenu';

const NavTools = (props) => {
  const { active, toggleBurgerMenu, openCart } = props;

  return (
    <div className={styles.navTools}>
      <BtnCall hideOnMobile={true} />
      <BtnEntry onClick={openCart} hideOnMobile={true}>
        ЗАПИС
      </BtnEntry>
      <BtnBurgerMenu active={active} toggleBurgerMenu={toggleBurgerMenu} />
    </div>
  );
};

export default NavTools;

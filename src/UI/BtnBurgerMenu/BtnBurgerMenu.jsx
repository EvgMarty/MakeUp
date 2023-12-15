import styles from './BtnBurgerMenu.module.scss';

const BtnBurgerMenu = (props) => {
  const { active, toggleBurgerMenu } = props;

  const burgerClassName = active
    ? ` ${styles.burger} ${styles.activ}`
    : styles.burger;

  return (
    <div className={burgerClassName} onClick={toggleBurgerMenu}>
      <span></span>
    </div>
  );
};

export default BtnBurgerMenu;

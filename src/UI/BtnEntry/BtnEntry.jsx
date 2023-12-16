import styles from './BtnEntry.module.scss';

const BtnEntry = (props) => {
  const { hideOnMobile, closeBurgerMenu, children } = props;
  const classNames = hideOnMobile
    ? `${styles.entry} ${styles.hideOnMobile}`
    : styles.entry;

  return (
    <div onClick={closeBurgerMenu} className={classNames}>
      {children}
    </div>
  );
};

export default BtnEntry;

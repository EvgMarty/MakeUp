import styles from './BtnBlack.module.scss';

const BtnBlack = (props) => {
  const { children, onClick, title, hideOnMobile } = props;
  
  const classNames = hideOnMobile
    ? `${styles.btnBlack} ${styles.hideOnMobile}`
    : styles.btnBlack;

  return (
    <button className={classNames} onClick={onClick} title={title}>
      {children}
    </button>
  );
};

export default BtnBlack;

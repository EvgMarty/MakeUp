import styles from './BtnTotalBlack.module.scss';

const BtnTotalBlack = (props) => {
  const { hideOnMobile, children, onClick, title } = props;
  
  const classNames = hideOnMobile
    ? `${styles.btnTotalBlack} ${styles.hideOnMobile}`
    : styles.btnTotalBlack;

  return (
    <button className={classNames} title={title} onClick={onClick}>
      {children}
    </button>
  );
};

export default BtnTotalBlack;

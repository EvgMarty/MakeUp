import styles from './CartBtn.module.scss';

const CartBtn = (props) => {
  const { children, onClick, title, hideOnMobile } = props;

  const classNames = hideOnMobile
    ? `${styles.cartBtn} ${styles.hideOnMobile}`
    : styles.cartBtn;

  return (
    <button className={classNames} onClick={onClick} title={title}>
      {children}
    </button>
  );
};

export default CartBtn;

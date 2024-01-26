import styles from './CartBtn.module.scss';

const CartBtn = (props) => {
  const { children, onClick, title, hideOnMobile, cartItem } = props;

  const classNames = hideOnMobile
    ? `${styles.cartBtn} ${styles.hideOnMobile}`
    : styles.cartBtn;

  return (
    <button className={classNames} onClick={onClick} title={title}>
      {children}
      <div className={cartItem ? styles.num : styles.hidden}>{cartItem}</div>
    </button>
  );
};

export default CartBtn;

import styles from './ServiceInСart.module.scss';

const ServiceInСart = () => {
  return (
    <div className={styles.serviceInСart}>
      <p className={styles.text}>Макіяж</p>
      <div className={styles.priceWrapper}>
        <span className={styles.price}>600 ₴</span>
        <button className={styles.btntogle}>+</button>
      </div>
    </div>
  );
};

export default ServiceInСart;

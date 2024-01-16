import styles from './PriceSection.module.scss';

const PriceSection = () => {
  return (
    <div className={styles.priceSection}>
      <h1>Ціни на послуги</h1>
      <div className={styles.servicesWrapper}>
        <div className={styles.servicesCard}>
          <img
            className={styles.imgCard}
            src="/img/services/makeup.jpg"
            alt=""
          />
          <div className={styles.addCard}>
            <p className={styles.text}>Макіяж</p>
            <button>+</button>
          </div>
        </div>
        <div className={styles.servicesCard}>
          <img
            className={styles.imgCard}
            src="/img/services/hairstyle.jpg"
            alt=""
          />
          <div className={styles.addCard}>
            <p className={styles.text}>укладка зачіска</p>
            <button>+</button>
          </div>
        </div>

        <div className={styles.servicesCard}>
          <img
            className={styles.imgCard}
            src="/img/services/eyebrows.jpg"
            alt=""
          />
          <div className={styles.addCard}>
            <p className={styles.text}>Брови</p>
            <button>+</button>
          </div>
        </div>
        <div className={styles.servicesCard}>
          <img
            className={styles.imgCard}
            src="/img/services/wedding.jpg"
            alt=""
          />
          <div className={styles.addCard}>
            <p className={styles.text}>Повний образ</p>
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;

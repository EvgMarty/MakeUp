import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img className={styles.logoImg} src="./img/logo.svg" alt="logo" />
      <p className={styles.name}>Babichka</p>
    </div>
  );
};

export default Logo;

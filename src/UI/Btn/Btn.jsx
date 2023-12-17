import styles from './Btn.module.scss';

const Btn = ({ children, onClick, title }) => {
  return (
    <button className={styles.btn} title={title} onClick={onClick}>
      {children}
    </button>
  );
};

export default Btn;

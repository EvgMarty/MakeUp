import styles from './BtnEntry.module.scss';

const BtnEntry = ({ children }) => {
  return <div className={styles.entry}>{children}</div>;
};

export default BtnEntry;

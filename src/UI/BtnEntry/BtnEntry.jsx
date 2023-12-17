import styles from './BtnEntry.module.scss';

const BtnEntry = (props) => {
  const { hideOnMobile, onClick, children } = props;

  const classNames = hideOnMobile
    ? `${styles.entry} ${styles.hideOnMobile}`
    : styles.entry;

  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  );
};

export default BtnEntry;

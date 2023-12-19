import styles from './BtnWhite.module.scss';

const BtnWhite = (props) => {
  const { children, onClick, title } = props;

  return (
    <button className={styles.btnWhite} title={title} onClick={onClick}>
      {children}
    </button>
  );
};

export default BtnWhite;

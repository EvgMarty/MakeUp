import styles from './BtnCall.module.scss';

const BtnCall = (props) => {
  const { hideOnMobile, children, onClick, title } = props;

  const classNames = hideOnMobile
    ? `${styles.btnCall} ${styles.hideOnMobile}`
    : styles.btnCall;

  return (
    <button className={classNames} title={title} onClick={onClick}>
      {children}
    </button>
  );
};

export default BtnCall;

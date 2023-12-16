import styles from './BtnCall.module.scss';

const BtnCall = (props) => {
  const { hideOnMobile, children } = props;
  const classNames = hideOnMobile
    ? `${styles.call} ${styles.hideOnMobile}`
    : styles.call;

  return (
    <div className={classNames}>
      <a href="tel:+380509344650">{children}</a>
    </div>
  );
};

export default BtnCall;

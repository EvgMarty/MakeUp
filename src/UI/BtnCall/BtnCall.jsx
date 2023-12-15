import styles from './BtnCall.module.scss';

const BtnCall = ({ children }) => {
  return (
    <div className={styles.call}>
      <a href="tel:+380509344650">{children}</a>
    </div>
  );
};

export default BtnCall;

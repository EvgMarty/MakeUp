import styles from './BtnCall.module.scss';
import { FaPhoneAlt } from 'react-icons/fa';
const BtnCall = (props) => {
  const { hideOnMobile} = props;

  const classNames = hideOnMobile
    ? `${styles.call} ${styles.hideOnMobile}`
    : styles.call;

  return (
    <button className={classNames}>
      <a href="tel:+380509344650">
        <FaPhoneAlt />
      </a>
    </button>
  );
};

export default BtnCall;

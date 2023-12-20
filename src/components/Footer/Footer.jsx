import styles from './Footer.module.scss';
import { FaTelegramPlane, FaInstagram, FaFacebookF } from 'react-icons/fa';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Logo />
      <div className={styles.line}></div>
      <ul className={styles.socList}>
        <li>
          <a className={styles.link} href="#">
            <FaTelegramPlane className={styles.icon} />
          </a>
        </li>
        <li>
          <a className={styles.link} href="#">
            <FaInstagram className={styles.icon} />
          </a>
        </li>
        <li>
          <a className={styles.link} href="#">
            <FaFacebookF className={styles.icon} />
          </a>
        </li>
      </ul>
      <p>© 2023 Anastasia Babich. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;

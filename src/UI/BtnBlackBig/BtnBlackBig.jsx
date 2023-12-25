import styles from './BtnBlackBig.module.scss';
import { Link } from 'react-router-dom';

const BtnBlackBig = (props) => {
  const { children, to } = props;

  return (
    <Link className={styles.btnBlackBig} to={to}>
      {children}
    </Link>
  );
};

export default BtnBlackBig;

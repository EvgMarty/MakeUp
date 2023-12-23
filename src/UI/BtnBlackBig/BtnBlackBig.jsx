import { Link } from 'react-router-dom';
import styles from './BtnBlackBig.module.scss';

const BtnBlackBig = (props) => {
  const { children, to } = props;

  return (
    <Link className={styles.btnBlackBig} to={to}>
      {children}
    </Link>
  );
};

export default BtnBlackBig;

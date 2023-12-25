import styles from './BtnBlack.module.scss';
import { Link } from 'react-router-dom';

const BtnBlack = (props) => {
  const { children, to } = props;

  return (
    <Link className={styles.btnBlack} to={to}>
      {children}
    </Link>
  );
};

export default BtnBlack;

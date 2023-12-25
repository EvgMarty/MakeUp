import styles from './BtnTotalBlack.module.scss';
import { Link } from 'react-router-dom';

const BtnTotalBlack = (props) => {
  const { children, to } = props;

  return (
    <Link className={styles.BtnTotalBlack} to={to}>
      {children}
    </Link>
  );
};

export default BtnTotalBlack;

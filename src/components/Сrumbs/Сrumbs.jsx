import styles from './Сrumbs.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

const Сrumbs = ({ page }) => {
  return (
    <div className={styles.crumbs}>
      <Link to={ROUTES.MAIN}>Головна / </Link>
      <span>{page}</span>
    </div>
  );
};

export default Сrumbs;

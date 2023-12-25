import styles from './Course.module.scss';
import Crumbs from '../../components/Сrumbs/Сrumbs';
const Course = () => {
  return (
    <div className={styles.course}>
      <Crumbs page="Курси" />
    </div>
  );
};

export default Course;

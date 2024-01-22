import styles from './Course.module.scss';
import Crumbs from '../../components/Сrumbs/Сrumbs';
import CoursesSection from '../../components/CoursesSection/CoursesSection';
const Course = () => {
  return (
    <div className={styles.course}>
      <Crumbs page="Курси" />
      <CoursesSection />
    </div>
  );
};

export default Course;

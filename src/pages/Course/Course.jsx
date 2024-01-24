import styles from './Course.module.scss';
import Crumbs from '../../components/Сrumbs/Сrumbs';
import CoursesSection from '../../components/CoursesSection/CoursesSection';
import CoursesMyselfSection from '../../components/CoursesMyselfSection/CoursesMyselfSection';
const Course = () => {
  return (
    <div className={styles.course}>
      <Crumbs page="Курси" />
      <CoursesSection />
      <CoursesMyselfSection />
    </div>
  );
};

export default Course;

import styles from './СoursesSection.module.scss';
import Container from '../Container/Container';
import Courses from '../Courses/Courses';
import Title from '../Title/Title';

const СoursesSection = () => {
  return (
    <section className={styles.coursesSection}>
      <Container>
        <Title>Курси</Title>
        <Courses />
      </Container>
    </section>
  );
};

export default СoursesSection;

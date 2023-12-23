import styles from './Main.module.scss';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import RecallSection from '../../components/RecallSection/RecallSection';
import СoursesSection from '../../components/СoursesSection/СoursesSection';
const Main = () => {
  return (
    <div className={styles.main}>
      <SliderComponent />
      <СoursesSection />
      <RecallSection />
    </div>
  );
};

export default Main;

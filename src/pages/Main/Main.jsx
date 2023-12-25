import styles from './Main.module.scss';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import RecallSection from '../../components/RecallSection/RecallSection';
import СoursesSection from '../../components/СoursesSection/СoursesSection';
import InstaSection from '../../components/InstaSection/InstaSection';

const Main = () => {
  return (
    <div className={styles.main}>
      <SliderComponent />
      <InstaSection />
      <СoursesSection />
      <RecallSection />
    </div>
  );
};

export default Main;

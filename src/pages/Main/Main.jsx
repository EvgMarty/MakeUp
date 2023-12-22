import styles from './Main.module.scss';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import RecallSection from '../../components/RecallSection/RecallSection';

const Main = () => {
  return (
    <div className={styles.main}>
      <SliderComponent />
      <RecallSection />
    </div>
  );
};

export default Main;

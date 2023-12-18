import styles from './Main.module.scss';
import SliderComponent from '../../components/SliderComponent/SliderComponent';


const Main = () => {
  return (
    <div className={styles.main}>
      <SliderComponent  />
    </div>
  );
};

export default Main;

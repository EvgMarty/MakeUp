import styles from './Price.module.scss';
import Crumbs from '../../components/Сrumbs/Сrumbs';
import PriceSection from '../../components/PriceSection/PriceSection';

const Price = () => {
  return (
    <div className={styles.price}>
      <Crumbs page="Ціни" />
      <PriceSection />
    </div>
  );
};

export default Price;

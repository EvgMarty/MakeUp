import styles from './Price.module.scss';
import Crumbs from '../../components/Сrumbs/Сrumbs'

const Price = () => {
  return (
    <div className={styles.price}>
      <Crumbs page='Ціни' />
    </div>
  );
};

export default Price;

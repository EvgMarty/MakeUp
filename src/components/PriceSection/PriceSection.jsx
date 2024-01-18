import styles from './PriceSection.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { services } from '../../data/dataService';
import ServicesCard from '../ServicesCard/ServicesCard';

const PriceSection = () => {
  const addUniqueId = (array) => {
    return array.map((item) => ({ ...item, id: uuidv4() }));
  };
  
  //added id
  const servicessAddId = addUniqueId(services);

  return (
    <div className={styles.priceSection}>
      <h1>Ціни на послуги</h1>
      <div className={styles.servicesWrapper}>
        {servicessAddId.map((item) => {
          return <ServicesCard key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default PriceSection;

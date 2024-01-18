import styles from './ServicesCard.module.scss';
import AddCard from '../../UI/AddCard/AddCard';
import { FaPlus, FaMinus } from 'react-icons/fa';

const ServicesCard = (props) => {
  const { name, img, id, price } = props;

  return (
    <div className={styles.servicesCard}>
      <img className={styles.imgCard} src={img} alt="servicesImg" />
      <div className={styles.addCard}>
        <p className={styles.text}>{name}</p>
        <AddCard title="Додати">
          <FaPlus />
        </AddCard>
      </div>
    </div>
  );
};

export default ServicesCard;

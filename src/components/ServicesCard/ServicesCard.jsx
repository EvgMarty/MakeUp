import styles from './ServicesCard.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus, FaMinus } from 'react-icons/fa';
import AddCard from '../../UI/AddCard/AddCard';
import { setCart, selectCart } from '../../redux/slices/cart';

const ServicesCard = (props) => {
  const { name, img, id, price } = props;
  // Получаем доступ к функции dispatch из хранилища
  const dispatch = useDispatch();
  // Получаем наше состояние
  const cart = useSelector(selectCart);

  const handleServicesCat = (item) => {
    dispatch(setCart(item));
  };
  const cartItem = cart.find((item) => item.id === id);

  return (
    <div className={styles.servicesCard}>
      <img className={styles.imgCard} src={img} alt="servicesImg" />
      <div className={styles.addCard}>
        <p className={styles.text}>{name}</p>
        <AddCard title="Додати" onClick={() => handleServicesCat(props)}>
          {cartItem && cartItem.id === id ? <FaMinus /> : <FaPlus />}
        </AddCard>
      </div>
    </div>
  );
};

export default ServicesCard;

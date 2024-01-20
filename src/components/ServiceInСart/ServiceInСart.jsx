import styles from './ServiceInСart.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCart, selectCart } from '../../redux/slices/cart';

const ServiceInСart = (props) => {
  const { name, price } = props;
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const handleServicesCat = (item) => {
    dispatch(setCart(item));
  };

  return (
    <div className={styles.serviceInСart}>
      <p className={styles.text}>{name}</p>
      <div className={styles.priceWrapper}>
        <span className={styles.price}>{price} ₴</span>
        <button
          className={styles.btnmin}
          onClick={() => handleServicesCat(props)}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default ServiceInСart;

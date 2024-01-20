import styles from './Cart.module.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/slices/cart';
import Form from '../Form/Form';
import BtnClose from '../../UI/BtnClose/BtnClose';
import BtnBlack from '../../UI/BtnBlack/BtnBlack';
import ServiceInСart from '../ServiceInСart/ServiceInСart';

const Cart = ({ activeCart, closeCart }) => {
  const clasNameCart = activeCart
    ? `${styles.modalWindow} ${styles.active}`
    : styles.modalWindow;

  const handleClick = (event) => {
    if (event.target.classList.contains(styles.modalWindow)) {
      closeCart();
    }
  };

  //Form
  const [data, setData] = useState({ name: '', number: '' });

  const handleInputCheng = (text, name) => {
    setData({ ...data, [name]: text });
  };

  const resetForm = () => {
    setData({
      name: '',
      number: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
    resetForm();
  };

  //redux
  const cart = useSelector(selectCart);

  const cartTotalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className={clasNameCart} onClick={handleClick}>
      <div className={styles.cart}>
        <div className={styles.btnCloseCart}>
          <BtnClose onClick={closeCart} />
        </div>
        <h3 className={styles.cartTitle}> Ваше Бронювання</h3>
        <div className={styles.cartForm}>
          <Form
            data={data}
            handleInputCheng={handleInputCheng}
            handleSubmit={handleSubmit}
          />
        </div>

        {cart.length > 0 ? (
          <div className={styles.mappingCart}>
            {cart.map((item) => (
              <ServiceInСart key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyCatr}>
            <h5 className={styles.emptyTitle}>Кошик порожній</h5>
            <p>Спочатку додайте послуги до кошику.</p>
          </div>
        )}
        <div className={styles.totalCost}>
          <BtnBlack onClick={handleSubmit}>Записатися</BtnBlack>
          <span className={styles.price}>{cartTotalPrice} ₴</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;

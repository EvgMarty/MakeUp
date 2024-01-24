import styles from './CoursesMyselfSection.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../Container/Container';
import Title from '../Title/Title';
import { courses } from '../../data/dataService';
import { setCart, selectCart } from '../../redux/slices/cart';

const CoursesMyselfSection = () => {
  // Получаем доступ к функции dispatch из хранилища
  const dispatch = useDispatch();
  // Получаем наше состояние
  const cart = useSelector(selectCart);

  const handleServicesCat = (item) => {
    dispatch(setCart(item));
  };

  return (
    <div className={styles.coursesMyselfSection}>
      <Title>Індивідуальні заняття</Title>
      <Container>
        {courses.map((item) => {
          return (
            <div key={item.id} className={styles.wrapperFlex}>
              <div className={styles.coursesImgWrap}>
                <img src={item.img} alt="img" />
              </div>
              <div className={styles.description}>
                <h1 className={styles.titleCourses}>{item.name}</h1>
                <div className={styles.borderWrapper}>
                  <p className={styles.text}>{item.text}</p>
                </div>
                <div className={styles.borderWrapper}>
                  <p className={styles.text}>
                    <span className={styles.bolt}>{item.classes}</span> заняття
                    по <span className={styles.bolt}>{item.time}</span> години
                  </p>
                </div>
                <div className={styles.borderWrapper}>
                  <p className={styles.text}>
                    Вартість <span className={styles.bolt}>{item.price}</span>{' '}
                    грн
                  </p>
                </div>
                <div className={styles.borderWrapper}>
                  <p className={styles.text}>Додати до кошика</p>
                  <button
                    className={styles.btnAddedCart}
                    onClick={() => handleServicesCat(item)}
                  >
                    {cart.find(cartItem => cartItem.id === item.id) ? '-' : '+'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default CoursesMyselfSection;

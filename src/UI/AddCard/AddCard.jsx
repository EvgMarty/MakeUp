import styles from './AddCard.module.scss';

const AddCard = (props) => {
  const { children, title, onClick } = props;
  return (
    <button className={styles.addCard} onClick={onClick} title={title}>
      {children}
    </button>
  );
};

export default AddCard;

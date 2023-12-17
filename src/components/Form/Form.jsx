import styles from './Form.module.scss';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';

const Form = (props) => {
  const { data, handleInputCheng, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name">
          <IoPersonSharp className={styles.iconPers} />
        </label>
        <input
          value={data.name}
          onChange={(e) => handleInputCheng(e.target.value, 'name')}
          type="text"
          id="name"
          placeholder="Ваше ім`я"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="number">
          <FaPhoneAlt className={styles.iconTel} />
          <p>+380</p>
        </label>
        <input
          value={data.number}
          onChange={(e) => handleInputCheng(e.target.value, 'number')}
          type="text"
          id="number"
          placeholder="00 000 00 00"
        />
      </div>
      <button className={styles.hidden} type="submit"></button>
    </form>
  );
};

export default Form;

import styles from './BtnClose.module.scss';
import { MdClose } from 'react-icons/md';

const BtnClose = ({ onClick, title }) => {
  return (
    <button className={styles.btnClose} title={title} onClick={onClick}>
      <MdClose />
    </button>
  );
};

export default BtnClose;

import styles from './CoursesSection.module.scss';

import Title from '../Title/Title';

import CoursesPreShow from '../CoursesPreShow/CoursesPreShow';

const CoursesSection = () => {
  return (
    <div className={styles.courseSection}>
      <Title>Чому макіяж сьогодні такий важливий?</Title>
      <p className={styles.text}>
        Ще недавно професійний макіяж робили з нагоди весілля, випускного вечора
        та парадної фотосесії. Але сьогодні жінки переглянули свій погляд на
        природну красу. Салонний макіяж роблять для побачень, дружніх вечірок,
        ділових вечерь, корпоративів. Але головне: жінки захотіли бути красивими
        насамперед для себе. Найщільніша черга до візажистів шикується
        напередодні свят, які вважаються сімейними: Новий рік, 14 лютого, 8
        березня.
      </p>

      {/* Предпоказ робіт */}
      <CoursesPreShow />

      <Title>Індивідуальні заняття</Title>
    </div>
  );
};

export default CoursesSection;

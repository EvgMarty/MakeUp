import styles from './RecallSection.module.scss';
import Title from '../Title/Title';
import RecallTabs from '../RecallTabs/RecallTabs';
import Container from '../Container/Container';

const RecallSection = () => {
  return (
    <section className={styles.reccalSection}>
      <Container>
        <Title>Відгуки моїх клієнтів</Title>
        <RecallTabs />
      </Container>
    </section>
  );
};

export default RecallSection;

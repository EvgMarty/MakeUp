import { useState } from 'react';
import styles from './RecallTabs.module.scss';
import { tabItem, tabContent } from '../../data/dataTabs';

const RecallTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabContentActive = tabContent[activeTab];

  const handleTabClick = (i) => {
    setActiveTab(i);
  };

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabs}>
        <ul className={styles.tabList}>
          {tabItem.map((item, i) => {
            return (
              <li
                className={
                  i === activeTab
                    ? `${styles.listItem} ${styles.active}`
                    : styles.listItem
                }
                key={i}
                onClick={() => handleTabClick(i)}
              >
                <div className={styles.imgWrapper}>
                  <img src={item.img} alt={`ava-${i}`} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.tabContent}>
        <p className={styles.recall}>{tabContentActive.text}</p>
        <div className={styles.wrapper}>
          <div className={styles.ava}>
            <img src={tabContentActive.img} alt="ava" />
          </div>
          <p className={styles.name}>{tabContentActive.name}</p>
        </div>
      </div>
    </div>
  );
};

export default RecallTabs;

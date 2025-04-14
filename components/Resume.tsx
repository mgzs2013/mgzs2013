"use client"

// components/Resume.tsx
import { useState } from 'react';
import ContentRectangle from './ContentRectangle';
import styles from '../styles/Resume.module.css';

const Resume: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentContent, setCurrentContent] = useState('default');

  const handleLinkClick = (content: string) => {
    setCurrentContent(content);
  };

  return (
    <section className={styles.resume}>
      <nav className={styles.nav}>
        <button onClick={() => handleLinkClick('Details about Job 1')} className={styles.navButton}>Job 1</button>
        <button onClick={() => handleLinkClick('Details about Job 2')} className={styles.navButton}>Job 2</button>
        <button onClick={() => handleLinkClick('Details about Education')} className={styles.navButton}>Education</button>
      </nav>
      <ContentRectangle />
    </section>
  );
};

export default Resume;




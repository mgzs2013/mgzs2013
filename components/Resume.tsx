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
      <button onClick={() => handleLinkClick('Details about Job 1')} className={styles.navButton}>
        Check out my project:
      </button>
      <button onClick={() => handleLinkClick('Details about Job 2')} className={styles.navButton}>
        My tech stack:
      </button>
      <button onClick={() => handleLinkClick('Details about Education')} className={styles.navButton}>
        Passion for team:
      </button>
    </nav>
    <ContentRectangle /> {/* This remains in the layout */}
  </section>
);
};


export default Resume;




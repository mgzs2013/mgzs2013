"use client"

// components/Resume.tsx
import { useState } from 'react';
import ContentRectangle from './ContentRectangle';
import styles from '../styles/Resume.module.css';
import Image from 'next/image';


const Resume: React.FC = () => {
  const [currentContent, setCurrentContent] = useState('');
  const [contentType, setContentType] = useState(''); // State for content type
  const [showSmallRectangles, setShowSmallRectangles] = useState(true); // Control visibility of small rectangles

  const handleLinkClick = (content: string) => {
    switch (content) {
      case 'Check out my projects':
        setCurrentContent('');
        setContentType(''); // Set content type to paragraph
        setShowSmallRectangles(true); // Show small rectangles for Job 1
        break;
      case 'Details about Job 2':
        setCurrentContent('Frontend technologies: React.Js Angular JQuery Typescript Tailwind CSS Bootstrap Node.Js Python, Backend technologies: GoLang Gin C# .NET Framework Prisma Zod, Database Management: PostgreSQL SQLite MongoDB Superbase'); // Example technologies as a comma-separated string
        setContentType('list'); // Set content type to list
        setShowSmallRectangles(false); // Show small rectangles for Job 2
        break;
      case 'Details about Education':
        setCurrentContent('I graduated from XYZ University with a degree in Computer Science.'); // Example content
        setContentType('paragraph'); // Set content type to paragraph
        setShowSmallRectangles(false); // Do not show small rectangles for Education
        break;
      default:
        setCurrentContent('Click a link to see content.');
        setContentType(''); // Reset content type
        setShowSmallRectangles(true); // Default to showing small rectangles
    }
  };

  return (
    <section className={styles.resume}>
    <nav className={styles.nav}>
      <button onClick={() => handleLinkClick('Check out my projects')} className={styles.navButton}>
      <Image src="/Arrow.svg" alt="Arrow" width={22} height={22} /> 
        Check out my projects:
      </button>
      <button onClick={() => handleLinkClick('Details about Job 2')} className={styles.navButton}>
      <Image src="/Arrow.svg" alt="Arrow" width={22} height={22} /> 
        My tech stack:
      </button>
      <button onClick={() => handleLinkClick('Details about Education')} className={styles.navButton}>
      <Image src="/Arrow.svg" alt="Arrow" width={22} height={22} /> 
        Passion for team:
      </button>
    </nav>
    <ContentRectangle content={currentContent} contentType={contentType} showSmallRectangles={showSmallRectangles} /> {/* This remains in the layout */}
  </section>
);
};


export default Resume;




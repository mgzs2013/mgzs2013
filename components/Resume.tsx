"use client"

// components/Resume.tsx
import { useEffect, useState } from 'react';
import ContentRectangle from './ContentRectangle';
import styles from '../styles/Resume.module.css';
import Image from 'next/image';


const Resume: React.FC = () => {
  const [currentContent, setCurrentContent] = useState('');
  const [contentType, setContentType] = useState(''); // State for content type
  const [showSmallRectangles, setShowSmallRectangles] = useState(true); // Control visibility of small rectangles
  const [activeButton, setActiveButton] = useState<string | null>(null); // Track active button
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
        try {
            const response = await fetch('http://mgzs2013.vercel.app/projects'); // Adjust the URL if necessary
            const data = await response.json();
            console.log(data);
            setProjects(data);
        } catch (error) {
            console.error("Error fetching projects:", error);
        } finally {
            setLoading(false);
        }
    };

    fetchProjects();
}, []);

if (loading) {
    return <div>Loading...</div>; // Show a loading state while fetching data
}


  const handleLinkClick = (content: string) => {
    switch (content) {
      case 'Check out my projects':
        setCurrentContent('');
        setContentType(''); // Set content type to paragraph
        setShowSmallRectangles(true); // Show small rectangles for Job 1
        setActiveButton('Check out my projects'); // Set active button
        break;
      case 'Details about Job 2':
        setCurrentContent('Frontend technologies: React.Js Angular JQuery Typescript Tailwind CSS Bootstrap Node.Js Python, Backend technologies: GoLang Gin C# .NET Framework Prisma Zod, Database Management: PostgreSQL SQLite MongoDB Superbase'); // Example technologies as a comma-separated string
        setContentType('list'); // Set content type to list
        setShowSmallRectangles(false); // Show small rectangles for Job 2
        setActiveButton('Details about Job 2'); // Set active button
        break;
      case 'Details about Education':
        setCurrentContent('I graduated from XYZ University with a degree in Computer Science.'); // Example content
        setContentType('paragraph'); // Set content type to paragraph
        setShowSmallRectangles(false); // Do not show small rectangles for Education
        setActiveButton('Details about Education'); // Set active button
        break;
      default:
        setCurrentContent('Click a link to see content.');
        setContentType(''); // Reset content type
        setShowSmallRectangles(true); // Default to showing small rectangles
        setActiveButton(null); // Reset active button
    }
  };

  return (
    <section className={styles.resume}>
    <nav className={styles.nav}>
    {activeButton !== 'Check out my projects' && (
      <button onClick={() => handleLinkClick('Check out my projects')} className={styles.navButton}>
      <Image src="/Arrow.svg" alt="Arrow" width={23} height={23} /> 
        Check out my projects:
      </button>
    )}
    {activeButton !== 'Details about Job 2' && (
      <button onClick={() => handleLinkClick('Details about Job 2')} className={styles.navButton}>
      <Image src="/Arrow.svg" alt="Arrow" width={23} height={23} /> 
        My tech stack:
      </button>
    )}
    {activeButton !== 'Details about Education' && (
      <button onClick={() => handleLinkClick('Details about Education')} className={styles.navButton}>
      <Image src="/Arrow.svg" alt="Arrow" width={23} height={23} /> 
        Passion for team:
      </button>
    )}
    </nav>
    <ContentRectangle content={currentContent} contentType={contentType} showSmallRectangles={showSmallRectangles} projects={projects}/> {/* This remains in the layout */}
  </section>
);
};


export default Resume;




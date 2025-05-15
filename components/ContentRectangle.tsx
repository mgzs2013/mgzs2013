// components/ContentRectangle.tsx
import styles from '../styles/ContentRectangle.module.css';
import Image from 'next/image';

interface Project {
  Title: string;
  Description: string;
  ImageUrl: string;
  LiveDemoUrl: string;
  GithubUrl: string;
}

interface ContentRectangleProps {
  content: string; // Accept content as a prop
  contentType: string; // Type of content to display
  showSmallRectangles?: boolean; // Optional prop to control small rectangles display
  projects?: Project[]; // New prop for project cards
  
}

const ContentRectangle: React.FC<ContentRectangleProps> = ({
  content, 
  contentType, 
  showSmallRectangles,
  projects,
}) => {
  console.log("These are the db projects:", projects); 
  console.log("Show Small Rectangles:", showSmallRectangles);

  return (
    
    <div className={styles.rectangle}>
      {showSmallRectangles && projects && projects.length > 0 && ( // Check if projects exist
        <div className={styles.innerContainer}>
          {projects.map((Project, index) => (
            
            <div key={index} className={styles.smallRectangle}>
              <Image src={Project.ImageUrl} alt={Project.Title || "Project Image"} className={styles.projectImage} width={23} height={23}/>
              
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{Project.Title}</h3>
                <p className={styles.projectDescription}>{Project.Description}</p>
                <div className={styles.projectLinks}>
                  <a href={Project.LiveDemoUrl} className={styles.projectLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                 
                </div>
              </div>
            </div>
            
          ))}
        </div>
        
      )}
      {contentType === 'list' && (
        <ul className={styles.techList}>
          {content.split(',').map((item, index) => (
            <li key={index}>{item.trim()}</li> // Create a list item for each technology
          ))}
        </ul>
      )}
      {contentType === 'paragraph' && (
        <div className={styles.contentText}>
          <p>{content}</p> {/* Render the paragraph content */}
        </div>
      )}
      <div className={styles.footerText}>
        Check out all my work:
        <a
          href="https://github.com/mgzs2013" // Replace with your actual GitHub profile link
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubLink} // Optional: add a class for styling
        >
          <Image
            src="/GitText.svg" // Path to your GitHub SVG
            alt="GitHub"
            width={45} // Adjust width as needed
            height={20} // Adjust height as needed
            className={styles.githubIcon} // Optional: add a class for styling
          />
        </a>
      </div>
    </div>
  
  );
};

export default ContentRectangle;


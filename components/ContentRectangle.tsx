// components/ContentRectangle.tsx
import styles from '../styles/ContentRectangle.module.css';
import Image from 'next/image';


interface ContentRectangleProps {
  content: string; // Accept content as a prop
  contentType: string; // Type of content to display
  showSmallRectangles?: boolean; // Optional prop to control small rectangles display
}

const ContentRectangle: React.FC<ContentRectangleProps> = ({content, contentType, showSmallRectangles}) => {
  return (
    <div className={styles.rectangle}>
      {showSmallRectangles && (
      <><div className={styles.innerContainer}>
          <div className={styles.smallRectangle}>Rectangle 1</div>
          <div className={styles.smallRectangle}>Rectangle 2</div>
          <div className={styles.smallRectangle}>Rectangle 3</div>
          <div className={styles.smallRectangle}>Rectangle 4</div>
        </div><div className={styles.footerText}>
            Check them all out: 
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

          </div></>
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

    </div>
  );
};

export default ContentRectangle;


// components/ContentRectangle.tsx
import styles from '../styles/ContentRectangle.module.css';


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
            This is some footer text.
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


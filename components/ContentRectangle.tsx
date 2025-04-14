// components/ContentRectangle.tsx
import styles from '../styles/ContentRectangle.module.css';

const ContentRectangle: React.FC = () => {
  return (
    <div className={styles.rectangle}>
      <div className={styles.innerContainer}>
        <div className={styles.smallRectangle}>Rectangle 1</div>
        <div className={styles.smallRectangle}>Rectangle 2</div>
        <div className={styles.smallRectangle}>Rectangle 3</div>
        <div className={styles.smallRectangle}>Rectangle 4</div>
      </div>
      <div className={styles.footerText}>
        This is some footer text.
      </div>
    </div>
  );
};

export default ContentRectangle;


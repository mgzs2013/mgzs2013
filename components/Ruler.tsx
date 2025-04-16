// components/Graphic.tsx
import Image from 'next/image'; // Import the Image component
import styles from '../styles/Ruler.module.css'; // Import CSS module for styling

const Ruler: React.FC = () => {
  return (
    <div className={styles.graphicContainer}>
      <Image 
        src="/Ruler.svg" // Path to your SVG graphic
        alt="Graphic Description"
        width={70} // Adjust width as needed
        height={25} // Adjust height as needed
      />
    </div>
  );
};

export default Ruler;

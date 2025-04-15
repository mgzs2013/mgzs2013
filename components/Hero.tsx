// components/Hero.tsx
import Image from 'next/image'; // Import the Image component
import styles from '../styles/Hero.module.css'; // Import styles for the Hero component


const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.welcome}>
        <h1>Hello and welcome!</h1>
        <h2>I am a Full-Stack Engineer.</h2>
        <div className={styles.toolset}>
          <Image 
            src="/tool-kit.png" // Path to your tool set PNG
            alt="Tool Set" 
            width={70} // Set the width of the tool set image
            height={35} // Set the height of the tool set image
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;





// components/Hero.tsx
import Image from 'next/image'; // Import the Image component
import styles from '../styles/Hero.module.css'

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image 
            src="/mgzs2013_logo.png" 
            alt="Logo" 
            width={150} // Set the width of the logo
            height={50} // Set the height of the logo
          />
        </div>
        <div className={styles.menu}>
          <Image 
            src="/hamburger-button.png" 
            alt="Menu" 
            width={24} // Set the width of the hamburger icon
            height={24} // Set the height of the hamburger icon
            className={styles.hamburgerIcon} 
          />
        </div>
      </div>
      <div className={styles.welcome}>
        <h1>Hello and welcome!</h1>
        <h2>I am a Full-Stack Engineer.</h2>
      </div>
    </section>
  );
};

export default Hero;



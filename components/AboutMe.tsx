// components/AboutMe.tsx
import Image from 'next/image'; // Import the Image component
import styles from '../styles/AboutMe.module.css'; // Import CSS module for styling

const AboutMe: React.FC = () => {
  return (
    <section className={styles.aboutMe}>
      <h2 className={styles.title}>About Me:</h2>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src="/placeholder.svg" // Replace with your actual photo path
            alt="Your Name"
            width={100} // Adjust width as needed
            height={100} // Adjust height as needed
            className={styles.profileImage}
          />
          <div className={styles.socialIcons}>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Image
                src="/github-line.svg" // Replace with actual GitHub icon path
                alt="GitHub"
                width={10} // Adjust icon size as needed
                height={10}
              />
            </a>
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Image
                src="/linkedin.svg" // Replace with actual LinkedIn icon path
                alt="LinkedIn"
                width={10}
                height={10}
              />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Image
                src="/twitter-x-fill.svg" // Replace with actual Twitter icon path
                alt="Twitter"
                width={10}
                height={10}
              />
            </a>
          </div>
        </div>
        <div className={styles.textContainer}>
          <p>
            I am a passionate Full-Stack Engineer with experience in building dynamic and responsive web applications.
            
          </p>
        </div>
      </div>

    </section>
  );
};

export default AboutMe;

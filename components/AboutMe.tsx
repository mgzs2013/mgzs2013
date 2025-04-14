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
            src="/path/to/your/photo.jpg" // Replace with your actual photo path
            alt="Your Name"
            width={300} // Adjust width as needed
            height={300} // Adjust height as needed
            className={styles.profileImage}
          />
          <div className={styles.socialIcons}>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Image
                src="/path/to/github-icon.png" // Replace with actual GitHub icon path
                alt="GitHub"
                width={30} // Adjust icon size as needed
                height={30}
              />
            </a>
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Image
                src="/path/to/linkedin-icon.png" // Replace with actual LinkedIn icon path
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Image
                src="/path/to/twitter-icon.png" // Replace with actual Twitter icon path
                alt="Twitter"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
        <div className={styles.textContainer}>
          <p>
            I am a passionate Full-Stack Engineer with experience in building dynamic and responsive web applications.
            My skill set includes modern web technologies and frameworks, allowing me to create efficient and user-friendly interfaces.
            I thrive in collaborative environments and enjoy tackling challenging problems.
          </p>
        </div>
      </div>

    </section>
  );
};

export default AboutMe;

// components/Hero.tsx

import styles from '../styles/Hero.module.css'; // Import styles for the Hero component


const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.welcome}>
        <h1>Hello</h1>
        <h1>and welcome!</h1>
        <h2>It&apos;s me,</h2>
        <h2>Mario.</h2>

      </div>

    </section>
  );
};

export default Hero;





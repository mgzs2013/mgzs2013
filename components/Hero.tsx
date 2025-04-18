// components/Hero.tsx

import styles from '../styles/Hero.module.css'; // Import styles for the Hero component


const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.welcome}>
        <h1>Hello</h1>
        <h1>and welcome!</h1>


      </div>
      <div className={styles.myNameIs}>
        <h2>It&apos;s me,</h2>
        <h3>Mario.</h3>
      </div>


    </section>
  );
};

export default Hero;




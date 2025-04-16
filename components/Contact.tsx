// components/Contact.tsx
import Image from 'next/image'; // Import the Image component
import styles from '../styles/Contact.module.css'; // Import CSS module for styling

const Contact: React.FC = () => {
  return (
    <section className={styles.contact}>
      <h2>Let&apos;s connect:</h2>
      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <Image 
            src="/Phone.svg" // Replace with your actual phone icon path
            alt="Phone"
            width={15} // Adjust icon size as needed
            height={15}
          />
          <span>(510) 388-8444</span>
        </div>
        <div className={styles.contactItem}>
          <Image 
            src="/baseline-email.svg" // Replace with your actual email icon path
            alt="Email"
            width={15} // Adjust icon size as needed
            height={15}
          />
          <span>mariog.2822@gmail.com</span>
        </div>
        <div className={styles.contactItem}>
          <Image 
            src="/location-filled.svg" // Replace with your actual location icon path
            alt="Location"
            width={15} // Adjust icon size as needed
            height={15}
          />
          <span>San Francisco, Bay Area</span>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </section>
  );
};

export default Contact;


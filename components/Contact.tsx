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
            src="/path/to/phone-icon.png" // Replace with your actual phone icon path
            alt="Phone"
            width={24} // Adjust icon size as needed
            height={24}
          />
          <span>(510) 388-8444</span>
        </div>
        <div className={styles.contactItem}>
          <Image 
            src="/path/to/email-icon.png" // Replace with your actual email icon path
            alt="Email"
            width={24} // Adjust icon size as needed
            height={24}
          />
          <span>mariog.2822@gmail.com</span>
        </div>
        <div className={styles.contactItem}>
          <Image 
            src="/path/to/location-icon.png" // Replace with your actual location icon path
            alt="Location"
            width={24} // Adjust icon size as needed
            height={24}
          />
          <span>San Francisco, Bay Area</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;


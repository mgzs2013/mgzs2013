"use client"
// components/Header.tsx
import Image from 'next/image'; // Import the Image component
import styles from '../styles/Header.module.css'; // Import CSS module for styling
import { useState } from 'react'; // Import useState for managing dropdown state

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown state
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image 
          src="/mgzs2013_logo.png" 
          alt="Logo" 
          width={150} 
          height={50} 
        />
      </div>
      <div className={styles.menu}>
        <Image 
          src="/hamburger-button.png" 
          alt="Menu" 
          width={24} 
          height={24} 
          className={styles.hamburgerIcon} 
          onClick={toggleDropdown} // Toggle dropdown on click
        />
        {isDropdownOpen && ( // Render dropdown menu if it's open
          <nav className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.open : ''}`}>
            <ul>
              <li><a href="#hero" onClick={toggleDropdown}>Home</a></li>
              <li><a href="#resume" onClick={toggleDropdown}>Resume</a></li>
              <li><a href="#contact" onClick={toggleDropdown}>Contact</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;


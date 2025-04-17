// Diagonal.js
import React from 'react';
import styles from '../styles/Diagonal.module.css'; // Optional: import CSS for styling
import Image from 'next/image';


const Diagonal = () => {
    return (
        <div className={styles.diagonalContainer}>
            <Image
                width={600} // Adjust width as needed
                height={100} // Adjust height as needed
                src="/Rectangle.svg"
                alt="Diagonal Graphic"
                className={styles.diagonalImage}
            />
        </div>
    );
};

export default Diagonal;

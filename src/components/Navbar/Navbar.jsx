import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    
    const checkScroll = () => {
        if (window.scrollY >= 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', checkScroll);
    
        // Cleanup function to remove the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', checkScroll);
        };
      }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount
    

    return (
        <nav className={styles.navBar}>
            <div className={styles.menu}>
                <ul className={`${styles.menuItems} ${isScrolled && styles.blur}`}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">Resume</a></li>
                    <li><a href="/projects">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

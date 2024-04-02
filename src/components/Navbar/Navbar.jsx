import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { exportImageUrl } from "../../utils";

export const Navbar = () => {
    return (
        <nav className={styles.navBar}>
            <div className={styles.menu}>
                <ul className={styles.menuItems}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

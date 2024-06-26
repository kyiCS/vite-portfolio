import React from 'react'
import styles from './GradientBackground.module.css'

export const GradientBackground = () => {
  return (
    <section className={styles.gradientBackground}>
        <div className={styles.gradientContainer}>

            <div className={styles.topLeft}></div>
            <div className={styles.topRight}></div>
            <div className={styles.topCenter}></div>

        </div>
    </section>
  )
}


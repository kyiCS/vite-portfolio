import React from 'react'
import styles from './ThreeCardBlock.module.css';
import { InfoCard } from './InfoCard';



export const ThreeCardBlock = () => {
  return (
    <div className={styles.threeCardBlock}>
        <InfoCard subTitle="" title="Explore My Past Projects and Experience" content="hello"/>
        <InfoCard subTitle="" title="hello" content="hello"/>
        <InfoCard subTitle="" title="hello" content="hello"/>

    </div>
  )
}

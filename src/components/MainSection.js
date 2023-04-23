import React from 'react'
import { scrolltoservices } from '../components/scrollTo'
import background from '../assets/homebackgound.jpg'
import Image from 'next/image'
import styles from '../styles/MainSection.module.css'

function MainSection() {
  return (
    <section className={styles.mainSection}>
      <Image
      src={background}
      fill
      alt=""
      className={styles.backgroundImg}
      />
      <div className={styles.mainSecContent}>
        <h1>BUILDING THE FUTURE</h1>
        <button onClick={scrolltoservices}>Our Work</button>
      </div>
    </section>
  )
}

export default MainSection
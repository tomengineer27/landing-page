import React from 'react'
import styles from '../styles/AboutUsSection.module.css'
import founders from '../assets/founders.jpg'
import Image from 'next/image'

function AboutUsSection() {
  return (
    <section className={styles.aboutusSection}>
        <div className={styles.side1}>
          <h1>About Us</h1>
          <p>
            <br/>
             lorem loremlorem loremlorem loremlorem lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremorem lorem lorem loremlorem loremlorem loremlorem loremlorem <br/><br/>
            loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremorem lorem lorem loremlorem loremlorem loremlorem loremlorem <br/>
          </p>
          <button className={styles.ourexpButton}>Our Best Works</button>
        </div>
        <div className={styles.side2}>
          <Image
            src={founders}
            alt=""
            className={styles.foundersImg}>
          </Image>
        </div>
        </section>
  )
}

export default AboutUsSection
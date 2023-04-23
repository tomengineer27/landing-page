import React from 'react'
import styles from '../styles/ServiceSection.module.css'

function ServiceSection() {
  return (
    <section className={styles.serviceSection}>
          <div className={styles.ourServices}>
            <h1>Our Services</h1>
            <div className={styles.servicesCont}>
              <div className={styles.service1}>
                <h1>Service 1</h1>
                <p>
                  orem lorem lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem 
                </p>
                <button>More Info</button>
              </div>
              <div className={styles.service2}>
                <h1>Service 2</h1>
                <p>
                  lorem lorem lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem 
                </p>
                <button>More Info</button>
              </div>
            </div>
          </div>
        </section>
  )
}

export default ServiceSection
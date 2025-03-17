import React from 'react'
import Hero from './hero/hero'
import Portfolio from './portfolio/page'
import Contact from './contact/page'
import About from './about/page'
import styles from '@/styles/screen.module.css'

export default function page() {
  return (
    <>
      <div className={styles.heroContainer}>
        <Hero />
      </div>
      <div className={styles.section1}>
        <About />
      </div>
      <div className={styles.section2}>
      <Portfolio />
      </div>
      <div className={styles.section3}>
      <Contact />
      </div>
    </>
  )
}

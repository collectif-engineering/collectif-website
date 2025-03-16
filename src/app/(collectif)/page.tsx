import React from 'react'
import Hero from './hero/hero'
import Portfolio from './portfolio/page'
import Contact from './contact/page'
import About from './about/page'

export default function page() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </>
  )
}

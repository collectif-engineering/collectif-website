import React from 'react'
import styles from '@/styles/about.module.css';
import AboutContent from '@/components/about-background/AboutContent';
import InfinitScroll from '@/components/infinit-scroll/InfinitScroll';
import { teamPrincipalData } from "@/seed/seedTeamPrincipal";
import { studiosData } from '@/seed/seedStudio';

const data = teamPrincipalData.team
const studio = studiosData.studios

const About = () => {
  return (
    <div className={ styles.container } id='studio'>
        <div className={ styles.stickyHeader}>  
          <InfinitScroll textLine='STUDIO' quantity={5} width='450px' height='100px'/>
        </div>
        <AboutContent 
            dataPrincipalTeam={data}
            studiosData={studio}
        />

    </div>
  )
}

export default About
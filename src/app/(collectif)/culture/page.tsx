import React from 'react'
import styles from '@/styles/culture.module.css';
import CultureSection from '@/components/culture/CultureSection';
import InfinitScroll from '@/components/infinit-scroll/InfinitScroll';
import PeopleSection from '@/components/people/PeopleSection';

const Culture = () => {
  return (
    <div className={styles.container} id='culture'>
        <div className={ styles.stickyHeader}>  
          <InfinitScroll textLine='CULTURE' quantity={5} width='450px' height='100px'/>
        </div>
        <CultureSection />
        <PeopleSection />
    </div>
  )
}

export default Culture
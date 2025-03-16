import styles from '@/styles/about.module.css';
import { Studio, Team } from '@/interfaces'
import CardAboutTeam from './CardAboutTeam';
import SpecializedStudios from './SpecializedStudios';

interface Props {
    dataPrincipalTeam: Team[],
    studiosData: Studio[]
}

const AboutContent = ({dataPrincipalTeam, studiosData }: Props) => {
  return (
    <div className={styles.container}>
        <div className={styles.firstSection}>
          <p className={styles.text_1}> 
              COLLECTIF is a renowned MEP/FP consulting, commissioning, and R&D firm with offices in NYC, Miami, San Juan, and New Jersey. We offer comprehensive engineered designs from
              concept to construction, leveraging the latest building engineering technologies. Recognized as a Certified Minority Owned Business, a Disadvantaged Business Enterprise, and a Certified
              Special Inspection Agency in NYC, we are committed to high-quality, fully coordinated designs. 
          </p>
          <p className={styles.text_2}> 
              Our foundation is built on the idea of bridging minds, driving us to tackle complex projects and foster strong partnerships. Our dynamic team of passionate problem solvers, creative
              thinkers, and experts work seamlessly to deliver exceptional results. At COLLECTIF, we believe in teamwork, blending diverse perspectives with a shared vision to transform bold ideas into
              reality.
          </p>
        </div>
        <div className={`${styles.secondSection} ${'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'}`}>
          <p className={styles.secondaryText}>
              TO COLLECTIVELY SOLVE
              HUMANITY’S ENGINEERING
              CHALLENGES AND ELEVATE
              OUR WELL-BEING IN THE
              BUILT ENVIRONMENT.
          </p>
          <p className={styles.text_3}>
              Our mission is more than just a statement; it’s a guiding principle that drives everything we do and extends
              beyond the projects we undertake. It’s a call to action to continuously push the boundaries of what’s possible. We
              aim to inspire future generations and thought leaders to join us in the pursuit of creating a better, more equitable
              world through the built environment.
          </p>
        </div>
        <div className={`${styles.thirdSection} ${'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-4'}`}>
          <div className={styles.thirdSectionText}>
            <h1 className={styles.titleText}>
                Our Leadership
            </h1>
            <p> 
                Our four Principals possess over 70 years of combined experience in project engineering, management, and all phases of engineering services, including
                procurement, commissioning, utility coordination, and project closeout. 
            </p>
            <p> 
                Our team is enhanced by staff with construction experience, which streamlines the design process by emphasizing value-engineered designs as they are
                developed. We have a proven track record of successful collaboration with design-build teams, ensuring seamless project execution.
            </p>
          </div>
        </div>
        <CardAboutTeam selectedTeams={dataPrincipalTeam}/>
        <SpecializedStudios studiosData={studiosData} />
    </div>
  );
};

export default AboutContent;

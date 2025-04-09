'use client'
import styles from '@/styles/people.module.css';
import ScrollingSlider from './ScrollingSlider';
import VideoSection from '../video-cultura/VideoSection';
import useMobile from '@/hooks/mobile/useMobile';
import { useEffect, useState } from 'react';

const PeopleTeam = () => {

  const team = 
    [ 
      'people1.jpg', 
      'people2.jpg', 
      'people3.jpg', 
      'people4.jpg', 
      'people5.jpg', 
      'people6.jpg', 
      'people7.jpg', 
      'people8.jpg', 
      'people9.jpg', 
      'people10.jpg',
      'people11.jpg',
      'people12.jpg',
      'people13.jpg',
      'people14.jpg',
      'people15.jpg',
      'people16.jpg',
      'people17.jpg',
      'people18.jpg',
      'people19.jpg',
      'people20.jpg',
      'people21.jpg',
      'people22.jpg',
    ];

  const shuffleArray = (array: string[]) => {
    return [...array].sort(() => Math.random() - 0.5);
  };
  const isMobile = useMobile(768);
  const imageSize = isMobile ? '200px' : '400px';

  const [shuffledTeam1, setShuffledTeam1] = useState<string[]>([]);
  const [shuffledTeam2, setShuffledTeam2] = useState<string[]>([]);
  const [shuffledTeam3, setShuffledTeam3] = useState<string[]>([]);

  useEffect(() => {
    setShuffledTeam1(shuffleArray(team));
    setShuffledTeam2(shuffleArray(team));
    setShuffledTeam3(shuffleArray(team));
  }, []);

  return (
    <div className={styles.container}>
        <ScrollingSlider teamImages={shuffledTeam1} reverse={true}  duration='10'  width={imageSize} height={imageSize}  />
        <ScrollingSlider teamImages={shuffledTeam2} reverse={false} duration='10'  width={imageSize} height={imageSize} />
        <ScrollingSlider teamImages={shuffledTeam3} reverse={true}  duration='10'  width={imageSize} height={imageSize}  />
        <div className={`grid grid-cols-1 md:grid-cols-1 gap-4`}>
          <div className={styles.leftSideBottomSection}>
            <h1 className={styles.textTitleBottomSection}>
              UNIFYING MINDS...
            </h1>
            <h2>
              We’re proud to bring together a of passionate
              dynamic team, problem solvers, creative thinkers,
              and experts, all working seamlessly to deliver
              exceptional results.
            </h2>
          </div>
          <div className={styles.rightSideBottomSection}>
          <span>
              We believe the best results come from teamwork.
              By blending diverse perspectives with a shared
              vision, we’re able to transform bold ideas into
              reality. Whether we’re brainstorming over coffee
              or diving deep into a project, our collaborative
              approach ensures every detail aligns with your
              goals.
          </span>
          </div>
        </div>
        <VideoSection />
    </div>
  );
};

export default PeopleTeam;

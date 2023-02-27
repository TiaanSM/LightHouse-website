import { useState } from 'react';
import styles from '../styles/Main.module.css';
import WorkCard from './WorkCard';

const Main = () => {

  const [playVideo, setPlayVideo] = useState(false);

  const handleVideoPlay = () => {
    if (playVideo === true) {
      return this.play();
    } else {
      return this.pause();
    }
  }

  return (
  <main className={styles.main}>
    <div className={styles.container}>

      <h2 className={styles.mainText}>
        Light House <span className={styles.square1}>
        <span className={styles.circle}></span></span> is a <span className={styles.highlight}>full </span> 
        service video production <span className={styles.highlight}>house</span>. 
        A close-knit team of <span className={styles.standout}>creators</span> and producers, 
        giving life to ideas of all 
        <span className={styles.highlight}> shapes </span>
        <span className={styles.square2}><span className={styles.circle}></span></span> and sizes.
      </h2>

      <div className={styles.workContainer}>
        <h3 className={styles.workTitle}>"WORK"</h3>

          <div className={styles.cardContainer}>

            <div className={styles.colContainer}>
              <WorkCard src="https://ik.imagekit.io/x29dtqzji/Lighthouse-website/project-1.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1677510030743" />
              <WorkCard src="https://ik.imagekit.io/x29dtqzji/Lighthouse-website/project-2.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1677510030840" />
            </div>

            <div className={styles.rowContainer}>
              <WorkCard src="https://ik.imagekit.io/x29dtqzji/Lighthouse-website/project-3.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1677510031499" /> 
            </div>

            <div className={styles.colContainer}>
              <WorkCard src="https://ik.imagekit.io/x29dtqzji/Lighthouse-website/project-4.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1677510031373" />
              <WorkCard src="https://ik.imagekit.io/x29dtqzji/Lighthouse-website/project-5.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1677510031607" />
            </div>

          </div>

      </div>

    </div>
  </main>
  )
}

export default Main
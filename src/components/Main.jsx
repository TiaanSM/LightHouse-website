import styles from '../styles/Main.module.css';
import WorkCard from './WorkCard';

const Main = () => {
  return (
  <main className={styles.main}>
    <div className={styles.container}>

      <h2 className={styles.mainText}>
        Light House is a <span className={styles.highlight}>full </span> 
        service video production <span className={styles.highlight}>house</span>. 
        A close-knit team of <span className={styles.standout}>creators</span> and producers, 
        giving life to ideas of all <span className={styles.highlight}>shapes</span> and sizes.
      </h2>

      <div className={styles.workContainer}>
        <h3 className={styles.workTitle}>"WORK"</h3>

          <div className={styles.cardContainer}>

            <div className={styles.colContainer}>
              <WorkCard />
              <WorkCard />
            </div>

            <div className={styles.rowContainer}>
              <WorkCard /> 
            </div>

            <div className={styles.colContainer}>
              <WorkCard />
              <WorkCard />
            </div>

          </div>

      </div>

    </div>
  </main>
  )
}

export default Main
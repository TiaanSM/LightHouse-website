import styles from '../styles/Main.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
        <div className={styles.container}>


            <h2 className={styles.mainText}>
                Light House is a <span>full</span> service video production <span>house</span>. 
                A close-knit team of <span>creators</span> and producers, 
                giving life to ideas of all <span>shapes</span> and sizes.
            </h2>

            <div className={styles.workContainer}>
                <h3 className={styles.workTitle}>"WORK"</h3>
                    <div>
                    5 cards to display work (component to reuse)
                    </div>
            </div>

        </div>
    </main>
  )
}

export default Main
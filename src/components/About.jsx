import styles from '../styles/About.module.css'

const About = () => {
  return (
    <section className={styles.section}>

        <div className={styles.container}>
          <div className={styles.brandContainer}>
            <div className={styles.brand}>Brands</div>
            <div className={styles.brand}></div>
            <div className={styles.brand}></div>
            <div className={styles.brand}></div>
            <div className={styles.brand}></div>
            <div className={styles.brand}></div>
            <div className={styles.brand}></div>
            <div className={styles.brand}></div>
          </div>
        </div>

        <div className={styles.aboutSection}>
            <div className={styles.aboutContainer}>
                <div className={styles.square}>
                    <div className={styles.circle}>
                        <a href="" className={styles.aboutLink}>ABOUT US</a>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default About
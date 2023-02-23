import styles from '../styles/Services.module.css';

const ServicesSection = () => {
  return (
    <section className={styles.section}>
        <div className={styles.container}>

            <div className={styles.headingContainer}>
                <h3 className={styles.title}>SERVICES</h3>
                <p className={styles.subheading}>
                    What we're <span className={styles.skewText}>good</span> at
                </p>
            </div>

            <div className={styles.rowContainer}>
                <div className={styles.itemContainer}>
                    <span className={styles.item}>DESIGN</span>
                    <span className={styles.number}>01</span>
                </div>
                <div className={styles.itemContainer}>
                    <span className={styles.item}>PRE-PRODUCTION</span>
                    <span className={styles.number}>02</span>
                </div>
                <div className={styles.itemContainer}>
                    <span className={styles.item}>PRODUCTION</span>
                    <span className={styles.number}>03</span>
                </div>
                <div className={styles.itemContainer}>
                    <span className={styles.item}>POST</span>
                    <span className={styles.number}>04</span>
                </div>
            </div>

            <div className={styles.bigTextContainer}>
                <h4 className={styles.bigText}>
                    A <span className={styles.underline}>PRODUCTION</span> PARTNER FOR BRANDS, AGENCIES AND CREATORS.
                </h4>
            </div>

        </div>
    </section>
  )
}

export default ServicesSection
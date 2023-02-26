import styles from '../styles/AnimatedSection.module.css'

const AnimatedSection = () => {
  return (
    <section className={styles.section}>

        <div className={styles.squareContainer}>
            <div className={styles.square}>
                <div className={styles.circle}></div>
            </div>
        </div>

        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h5 className={styles.title}>WE GET PEOPLE</h5>
                <span className={styles.hollowText}>FEELING.<br/>THINKING.<br/>VIBING.</span>
            </div>
            <div className={styles.imageContainer}>
                <img src="https://ik.imagekit.io/x29dtqzji/tr:w-1400/Lighthouse-website/pexels-ron-lach-10330176__1_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1677428552753" alt="" className={styles.image1} />
                <img src="https://ik.imagekit.io/x29dtqzji/tr:w-1200/Lighthouse-website/roksolana-zasiadko-LyeduBb2Auk-unsplash__1_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1677428552041" alt="" className={styles.image2} />
                
                <div className={styles.image3}>
                    <div className={styles.smallSquare}>
                        <div className={styles.smallCircle}></div>
                    </div>
                </div>
            
            </div>
        </div>
    </section>
  )
}

export default AnimatedSection
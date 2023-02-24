import styles from '../styles/About.module.css'
import brandLogo from '../assets/brandLogo.png'
import Logo from './Logo'

const About = () => {

  const isMobile = window.innerWidth < 640;

  return (
    <section className={styles.section}>

        <div className={styles.container}>
          <div className={styles.brandContainer}>
            <div className={styles.brand}>SABC</div>
            <div className={styles.brand}>Gtv</div>
            <div className={styles.brand}>
              <img src={brandLogo} alt="movie-logo" width="50px" />
            </div>
            <div className={styles.brand}>idfa</div>
            <div className={styles.brand}>Film Freeway</div>
            <div className={styles.brand}>Etv</div>
            <div className={styles.brand}>~Square~</div>
            <div className={styles.brand}>S|&gt;FF</div>
            <div className={styles.brand}>SABC</div>
          </div>
        </div>

        <div className={styles.aboutSection}>
            <div className={styles.aboutContainer}>
              <Logo size={isMobile ? '60vw' : '35vw'} fill="lightgreen" />
                <a href="" className={styles.aboutLink}>ABOUT US</a>
            </div>
        </div>

    </section>
  )
}

export default About
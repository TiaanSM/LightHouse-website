import styles from '../styles/Footer.module.css'
import vimeoLogo from '../assets/vimeo.png'
import instagramLogo from '../assets/instagram.png'
import linkedinLogo from '../assets/linkedin.png'

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo(0,0);
    }

  return (
    <footer className={styles.footer} id="contact">

        <div className={styles.topContainer}>

            <span className={styles.initial}>LH</span>

            <h5 className={styles.bigText}>LET'S <span className={styles.underline}>START</span> SOMETHING</h5>

            <span className={styles.email}>HELLO@LIGHTHOUSE.FAKE</span>
        </div>

        <div className={styles.midContainer}>
            <div className={styles.mainLinkContainer}>
                <div className={styles.linkContainer}>
                    <a href="#work" className={styles.link}>WORK</a>
                    <a href="#about" className={styles.link}>ABOUT</a>
                    <a href="#contact" className={styles.link}>CONTACT</a>
                </div>
                <div className={styles.linkContainer}>
                    <a href="https://vimeo.com" className={styles.link2}>
                        <img src={vimeoLogo} alt="vimeo-logo" className={styles.linkLogo} />
                    </a>
                    <a href="https://instagram.com" className={styles.link2}>
                        <img src={instagramLogo} alt="instagram-logo" className={styles.linkLogo} />
                    </a>
                    <a href="https://linkedin.com" className={styles.link2}>
                        <img src={linkedinLogo} alt="linkdin-logo" className={styles.linkLogo} />
                    </a>
                </div>
            </div>

            <div className={styles.bottomContainer}>
                <p className={styles.topLink} onClick={scrollToTop}>BACK TO TOP</p>
                <span className={styles.copyright}>&copy;THE LIGHT HOUSE LTD</span>
            </div>
        </div>

    </footer>
  )
}

export default Footer
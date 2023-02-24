import styles from '../styles/Footer.module.css'
import vimeoLogo from '../assets/vimeo.png'
import instagramLogo from '../assets/instagram.png'
import linkedinLogo from '../assets/linkedin.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>

        <div className={styles.topContainer}>

            <span className={styles.initial}>LH</span>

            <h5 className={styles.bigText}>LET'S <span className={styles.underline}>START</span> SOMETHING</h5>

            <span className={styles.email}>HELLO@LIGHTHOUSE.FAKE</span>
        </div>

        <div className={styles.midContainer}>
            <div className={styles.mainLinkContainer}>
                <div className={styles.linkContainer}>
                    <a href="" className={styles.link}>WORK</a>
                    <a href="" className={styles.link}>ABOUT</a>
                    <a href="" className={styles.link}>CONTACT</a>
                </div>
                <div className={styles.linkContainer}>
                    <a href="" className={styles.link2}>
                        <img src={vimeoLogo} alt="vimeo-logo" className={styles.linkLogo} />
                    </a>
                    <a href="" className={styles.link2}>
                        <img src={instagramLogo} alt="instagram-logo" className={styles.linkLogo} />
                    </a>
                    <a href="" className={styles.link2}>
                        <img src={linkedinLogo} alt="linkdin-logo" className={styles.linkLogo} />
                    </a>
                </div>
            </div>

            <div className={styles.bottomContainer}>
                <a href="" className={styles.topLink}>BACK TO TOP</a>
                <span className={styles.copyright}>&copy;THE LIGHT HOUSE LTD</span>
            </div>
        </div>

    </footer>
  )
}

export default Footer
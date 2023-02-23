import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.topContainer}>
            <div className={styles.circle}>
                <span className={styles.initial}>LH</span>
            </div>

            <h5 className={styles.bigText}>LET'S START SOMETHING.</h5>

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
                    <a href="" className={styles.link}>V</a>
                    <a href="" className={styles.link}>insta</a>
                    <a href="" className={styles.link}>linkdin</a>
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
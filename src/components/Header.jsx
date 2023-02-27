import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>

        <div className={styles.textContainer}>
            <h1 className={styles.title}>
                IDEAS THAT <span className={styles.underline}>MOVE</span>
            </h1>
            <span className={styles.scrollText}>SCROLL</span>
            <span className={styles.line}></span>
        </div>

        <div className={styles.container}>
            <video className={styles.video} autoPlay loop muted>
              <source src='https://ik.imagekit.io/x29dtqzji/Lighthouse-website/header.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1677510032698' type="video/mp4" />
            </video>
        </div>

    </header>
  )
}

export default Header
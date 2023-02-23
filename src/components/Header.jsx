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
            <img src="" alt="" className={styles.video} />
        </div>

    </header>
  )
}

export default Header
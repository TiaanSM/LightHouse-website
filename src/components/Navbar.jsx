import styles from '../styles/Navbar.module.css'
import { Squeeze as Hamburger } from 'hamburger-react'
import { useState } from 'react'

const Navbar = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <nav className={styles.nav}>
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img src="" alt="" />
                <span className={styles.logoText}>Light House</span>
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.cta}>SAY HELLO</button>
                <span className={styles.menuContainer}>
                  <Hamburger 
                    toggled={isOpen} 
                    toggle={setOpen} 
                    size={24} 
                    duration={0.5} 
                    distance="sm" 
                    color="white"
                    easing="ease"
                    label="Show menu"
                  />
                </span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
import styles from '../styles/Navbar.module.css'
import { Squeeze as Hamburger } from 'hamburger-react'
import { useState } from 'react'

const Navbar = () => {

  const [isOpen, setOpen] = useState(false)

  const isMobile = window.innerWidth < 500;

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
                    size={isMobile ? 18 : 24} 
                    duration={0.5} 
                    distance="sm" 
                    color="white"
                    easing="ease"
                    label="Show menu"
                  />
                </span>
            </div>
        </div>

        <div>
          <ul>
            <li>WORK</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
          <span>
            <span>HELLO@LIGHTHOUSE.FAKE</span>
            <span>75 WORKER WAY, PINELANDS CPT WC, SOUTH AFRICA</span>
          </span>
        </div>
    </nav>
  )
}

export default Navbar
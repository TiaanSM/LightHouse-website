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
                <button className={isOpen ? styles.ctaB : styles.ctaW}>SAY HELLO</button>
                <span className={styles.menuContainer}>
                  <Hamburger 
                    toggled={isOpen} 
                    toggle={setOpen} 
                    size={isMobile ? 18 : 24} 
                    duration={0.5} 
                    distance="sm" 
                    color={isOpen ? 'black' : 'white'}
                    easing="ease"
                    label="Show menu"
                  />
                </span>
            </div>
        </div>

        <div className={isOpen ? styles.openMenu : styles.closedMenu} onClick={() => setOpen(!isOpen)}>
          <ul className={styles.linkContainer}>
            <li className={styles.link}>WORK</li>
            <li className={styles.link}>ABOUT</li>
            <li className={styles.link}>CONTACT</li>
          </ul>
            <span className={styles.emailText}>HELLO@LIGHTHOUSE.FAKE</span>
            <span className={styles.addressText}>75 WORKER WAY, PINELANDS CPT WC, SOUTH AFRICA</span>
        </div>
    </nav>
  )
}

export default Navbar
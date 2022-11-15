import React from 'react'
import { useGlobalContext } from 'context'

//Button
import Button from 'Components/Button'

//Styling
import styles from 'Components/components.module.scss'

const Navbar = ({ navbar }) => {
  const { openPopUp, isSidebarOpen, openSidebar, closeSidebar } =
    useGlobalContext()

  return (
    <aside className={styles.navbar}>
      <nav className={styles.navigation}>
        <img src={navbar.logo} alt='logo' className={styles.logo} />
        <ul>
          {navbar.navLinks.map((links, index) => {
            return (
              <li key={index}>
                <a href={links.link} className={styles.navlink}>
                  {links.text}
                </a>
              </li>
            )
          })}
        </ul>
        <Button
          btn={styles.btn}
          text={navbar.btnConnect}
          openPage={openPopUp}
        />
        {isSidebarOpen ? (
          <img
            src={navbar.iconClose}
            alt='close'
            className={styles.menu}
            onClick={closeSidebar}
          />
        ) : (
          <img
            src={navbar.iconOpen}
            alt='open'
            className={styles.menu}
            onClick={openSidebar}
          />
        )}
        {/* <img
          src={navbar.iconOpen}
          alt='open'
          className={styles.menu}
          onClick={openSidebar}
        />*/}
      </nav>
    </aside>
  )
}

export default Navbar

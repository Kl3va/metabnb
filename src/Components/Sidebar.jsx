import React from 'react'
import styles from 'Components/components.module.scss'
import { reuseData } from 'Components/componentData'
import { useGlobalContext } from 'context'
import Button from 'Components/Button'

const Sidebar = () => {
  const { isSidebarOpen, openPopUp, closeSidebar } = useGlobalContext()

  const {
    navbar: { navLinks, btnConnect },
  } = reuseData
  return (
    <aside>
      <div
        className={`${
          isSidebarOpen ? `${styles.sidebar} show-sidebar` : `${styles.sidebar}`
        }`}
        onClick={closeSidebar}
      >
        <ul className={styles.sidebar__links}>
          {navLinks.map(({ link, text }, index) => {
            return (
              <li className={styles.sidebar__link} key={index}>
                <a href={link}>{text}</a>
              </li>
            )
          })}
        </ul>
        <Button btn={styles.navbtn} text={btnConnect} openPage={openPopUp} />
      </div>
    </aside>
  )
}

export default Sidebar

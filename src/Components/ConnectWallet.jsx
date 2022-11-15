import React from 'react'
import styles from 'Components/components.module.scss'
import { useGlobalContext } from 'context'

const ConnectWallet = ({ heading, closeIcon, text, preferrence }) => {
  const { isPopUpOpen, closePopUp } = useGlobalContext()

  return (
    <aside
      className={`${isPopUpOpen ? `${styles.popup} show` : `${styles.popup}`}`}
    >
      <div className={styles.connect}>
        <div className={styles.connectHead}>
          <h2 className={styles.connectHead__heading}>{heading}</h2>
          <img src={closeIcon} alt='close' onClick={closePopUp} />
        </div>
        <div className={styles.connectMain}>
          <p className={styles.selectConnect}>{text}</p>

          {preferrence.map(({ logoIcon, iconName, extendIcon, alt }, index) => {
            return (
              <div className={styles.btnLogo} key={index}>
                <div className={styles.connectImg}>
                  <img src={logoIcon} alt={alt} />
                  <p>{iconName}</p>
                </div>
                <img src={extendIcon} alt='more' />
              </div>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default ConnectWallet

import React from 'react'
import styles from 'Components/components.module.scss'

const Footer = ({ footer }) => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footer}>
        <div className={styles.footer__icons}>
          <img src={footer.footerLogo} alt='footer logo' />
          <div className={styles.footer__socialIcons}>
            {footer.footerSocials.map((icon, index) => {
              return <img src={icon} alt='social icon' key={index} />
            })}
          </div>
          <div className={styles.footer__links}>
            {footer.footerLinks.map((link, index) => {
              return <p key={index}>{link}</p>
            })}
          </div>
          <div className={styles.copyright}>
            <img src={footer.copyright} alt='copyright' />
            <p>{footer.copyrightText}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

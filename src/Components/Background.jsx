import React from 'react'
import styles from 'Components/components.module.scss'
import { useGlobalContext } from 'context'

const Background = () => {
  const { isPopUpOpen } = useGlobalContext()
  return (
    <aside
      className={`${
        isPopUpOpen
          ? `${styles.navigation__background} show`
          : `${styles.navigation__background}`
      }`}
    ></aside>
  )
}

export default Background

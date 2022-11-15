import React from 'react'

//STYLes
import styles from 'Pages/Places/places.module.scss'
import homeStyles from 'Pages/Home/home.module.scss'

//Data
import { homeProps } from 'Pages/Home/homeData'
import Cards from 'Components/Cards'

const Places = ({ btns, btnLocate, hamburgerIcon }) => {
  const {
    featuresImgs,
    imgAlt,
    buildingName,
    value,
    distance,
    availability,
    rating,
  } = homeProps

  return (
    <main className={styles.main}>
      <section className={styles.section__filter}>
        <div className={styles.filter}>
          <div className={styles.menu}>
            <img
              src={hamburgerIcon}
              alt='menu icon'
              className={styles.menubar}
            />
          </div>
          <div className={styles.filter__btns}>
            {btns.map((btn, index) => {
              return (
                <p className={styles.btn} key={index}>
                  {btn}
                </p>
              )
            })}
          </div>

          <div className={styles.setting__wrapper}>
            <p>{btnLocate.btn}</p>
            <img src={btnLocate.settings} alt={btnLocate.altSetting} />
          </div>
        </div>
      </section>
      <section className={styles.section__features}>
        <div className={homeStyles.placesWrapper}>
          <div className={homeStyles.buildings}>
            {featuresImgs.map((feature, index) => {
              return (
                <Cards
                  index={index}
                  feature={feature}
                  imgAlt={imgAlt}
                  buildingName={buildingName}
                  value={value}
                  distance={distance}
                  availability={availability}
                  rating={rating}
                  key={index}
                />
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Places

import React from 'react'
//Styling
import styles from 'Pages/Home/home.module.scss'
import Button from 'Components/Button'

const Home = ({
  heroText,
  heroImg,
  secondaryHeader,
  imgAlt,
  buildingName,
  value,
  distance,
  callToAction,
  rating,
  availability,
  partners,
  inputs,
  featuresImgs,
}) => {
  return (
    <main className={styles.main}>
      <section className={styles.section__hero}>
        <div className={styles.hero}>
          <div className={styles.heroDescription}>
            <h1 className={styles.mainHeading}>
              Rent a <span>Place</span> away from <span>Home</span> in the{' '}
              <span>Metaverse</span>
            </h1>
            <p className={styles.heroText}>{heroText}</p>
            <div className={styles.heroDescription__input}>
              <input
                type='text'
                name='results'
                id='results'
                placeholder={inputs.placeholder}
              />
              <Button btn={styles.btnInput} text={inputs.btnSearch} />
            </div>
          </div>
          <div className={styles.hero__img}>
            <img src={heroImg} alt={imgAlt} />
          </div>
        </div>
      </section>
      <section className={styles.section__partners}>
        <div className={styles.partners}>
          {partners.map((partner, index) => {
            return <img src={partner.img} alt={partner.alt} key={index} />
          })}
        </div>
      </section>
      <section className={styles.section__features}>
        <div className={styles.placesWrapper}>
          <h2 className={styles.places__heading}>{secondaryHeader}</h2>
          <div className={styles.buildings}>
            {featuresImgs.slice(8).map((feature, index) => {
              return (
                <div className={styles.places} key={index}>
                  <img
                    src={feature}
                    alt={imgAlt}
                    className={styles.featureImg}
                  />
                  <div className={styles.places__description}>
                    <p>{buildingName}</p>
                    <p className={styles.value}>{value}</p>
                    <p>{distance}</p>
                    <p className={styles.available}>{availability}</p>
                  </div>
                  <div className={styles.ratings}>
                    {rating.map((rate, index) => {
                      return <img src={rate} alt='rating' key={index} />
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className={styles.section__callToAction}>
        <div className={styles.moreInfoWrapper}>
          <div className={styles.moreInfo}>
            <h2 className={styles.moreInfo__heading}>{callToAction.heading}</h2>
            <p className={styles.moreInfo__text}>{callToAction.text}</p>
            <a href='#'>{callToAction.btnText}</a>
          </div>
          <div>
            <img
              src={callToAction.img}
              alt='Buildings'
              className={styles.moreInfo__img}
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home

import React from 'react'
import styles from 'Pages/Home/home.module.scss'

const Cards = (props) => {
  return (
    <div className={styles.places} key={props.index}>
      <img
        src={props.feature}
        alt={props.imgAlt}
        className={styles.featureImg}
      />
      <div className={styles.places__description}>
        <p>{props.buildingName}</p>
        <p className={styles.value}>{props.value}</p>
        <p>{props.distance}</p>
        <p className={styles.available}>{props.availability}</p>
      </div>
      <div className={styles.ratings}>
        {props.rating.map((rate, index) => {
          return <img src={rate} alt='rating' key={index} />
        })}
      </div>
    </div>
  )
}

export default Cards

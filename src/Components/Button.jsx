import React from 'react'

const Button = ({ btn, text, openPage }) => {
  return <button className={btn} onClick={openPage}>{text}</button>
}

export default Button

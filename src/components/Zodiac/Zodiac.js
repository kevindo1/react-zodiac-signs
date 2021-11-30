import React from 'react'
import './Zodiac.css'

export function Zodiac({ name, dates }) {
  return (
    <div className="Zodiacs">
      <img alt={name} src={`${process.env.PUBLIC_URL}/zodiacs/${name}.png`} />
      <span className="name">{name}</span>
      <span>{dates}</span>
    </div>
  )
}

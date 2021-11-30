import React from 'react'
import './Main.css'
import { Zodiac } from '../Zodiac/Zodiac'
import background from '../../background.jpeg'
import { zodiac } from '../../data'

export default function Main() {
  return (
    <main className="background" style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((zodiacs) => (
        <Zodiac key={zodiacs.id} name={zodiacs.name} dates={zodiacs.dates} />
      ))}
    </main>
  )
}

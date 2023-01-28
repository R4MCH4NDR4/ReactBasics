import React from 'react'

function Hero({heroName}) {
    if(heroName === 'Joker')
    {
        throw new Error("Not an hero")
    }
  return (
    <div>
      <h2>{heroName}</h2>
    </div>
  )
}

export default Hero

import React from 'react'

function Inline() {
    //We need to crearte an object to have inline css. and follow camel casing for decalring a properties.
    const heading = {
        fontSize : '100px',
        color: 'yellow'
    }
  return (
    <div>
        <h1 className='error'>I'm from regular css file</h1>
      <h1 style={heading}>I'm inline css style</h1>
    </div>
  )
}

export default Inline

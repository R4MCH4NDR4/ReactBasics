import React from 'react'
import '../css/mystyle.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary':''
  return (
    <div>
      <h1 className={`${className} font-xl`}>My new CSS Style</h1>
    </div>
  )
}

export default Stylesheet

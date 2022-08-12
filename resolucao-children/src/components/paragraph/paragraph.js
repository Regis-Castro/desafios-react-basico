import React from 'react'

const ParagraphColorUppercase = ({ color, children }) => {
  return (
    <div>
      <p style={{color: color}}> {children.toUpperCase()} </p>
    </div>
  )
}

export default ParagraphColorUppercase
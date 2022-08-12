import React from 'react'

const Paragraph = ({content, color}) => {
  return (
    <p style={{color: color}}> {content.toUpperCase()}</p>
  )
}

Paragraph.defaultProps = {
  color: 'red'
}

export default Paragraph






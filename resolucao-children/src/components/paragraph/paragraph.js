import React from 'react'

// antes de refatorar 
// const ParagraphColorUppercase = ({ color, children }) => {
//   return (
//     <div>
//       <p style={{color: color}}> {children.toUpperCase()} </p>
//     </div>
//   )
// }

const ParagraphColorUppercase = ({ color, children }) => (
      <p style={{color: color}}> {children.toUpperCase()} </p>
  )

export default ParagraphColorUppercase
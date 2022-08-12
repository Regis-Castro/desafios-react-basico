import React from 'react'
import './button.css'

const alertLabel = (labelContent) => {
  alert(labelContent)
}

const Button = ({label, children}) => {
  return (
    <button className='btn' onClick={() => alertLabel(`A label desse botão é ${label}`)}>
      {children}
    </button>
  )
}

export default Button
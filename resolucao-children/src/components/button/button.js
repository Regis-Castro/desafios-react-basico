import React from 'react'
import './button.css'

// antes de refatorar
// const alertLabel = (labelContent) => {
//   alert(labelContent)
// }

// alertLabel já refatorada mas podemos lançar o alerta já direto lá dentro da função abaixo
// const alertLabel = labelContent => alert(labelContent)

//antes de refatorar
// const Button = ({label, children}) => {
//   return (
//     <button className='btn' onClick={() => alertLabel(`A label desse botão é ${label}`)}>
//       {children}
//     </button>
//   )
// }

const Button = ({label, children}) => (
    <button className='btn' onClick={() => alert(`A label desse botão é ${label}`)}>
      {children}
    </button>
  )

export default Button
import React from 'react'
import './button.css'

const alertLabel = (labelContent) => {
  alert(labelContent)
}

const Button = ({label}) => {
  return (
    <button className='btn' onClick={() => alertLabel(`A label desse botão é ${label}`)}>
      {label}
    </button>
  )
}

export default Button


















// Crie um componente Button com um evento de clique que
// apresente um alerta informando a prop label do botão que
// foi clicado, com a seguinte mensagem: "A label desse botão é
// <insira a label aqui via JS>".
// Exemplo:
// Com um botão com essa label, <Button label="Baixar CV" />
// Ao clicar no botão deve mostrar um alert com a mensagem
// "A label desse botão é Baixar CV"


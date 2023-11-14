import React from 'react'

const buttonClicked = (label) => {
    alert("A label desse botão é " + label);
}

const Button = ({label}) => {
    return (
        <button onClick={() => buttonClicked(label)}>
            {label}
        </button>
    )
}

Button.defaultProps = {
    label: 'Clique aqui'
}

export default Button;
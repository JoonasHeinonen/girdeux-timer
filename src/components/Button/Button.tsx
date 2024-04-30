import React, { MouseEventHandler } from "react"
import './Button.scss'

interface ButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement>
  label: string
}

const Button = ({
  handleClick,
  label,
}: ButtonProps) => {
  return (
    <button className={'Button'} onClick={handleClick}>{label}</button>
  )
}

export default Button
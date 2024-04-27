import React, { MouseEventHandler } from "react"

interface ButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement>
  label: string
}

const Button = ({
  handleClick,
  label,
}: ButtonProps) => {
  return (
    <button onClick={handleClick}>{label}</button>
  )
}

export default Button
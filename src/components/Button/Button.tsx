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
    <div>
      <button onClick={handleClick}>{label}</button>
    </div>
  )
}

export default Button
import React from 'react'

interface HeaderProps {
  header: string
}

const Header = ({ header }: HeaderProps) => {
  return (
    <div>
      <h1>{header}</h1>
    </div>
  )
}

export default Header
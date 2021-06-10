import React, { ButtonHTMLAttributes, FC } from 'react'
import type { WithClass } from './types'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & WithClass

const Button: FC<Props> = ({ children, className = '', ...props }) => (
  <button className={`button ${className}`} {...props}>
    {children}
  </button>
)

export default Button

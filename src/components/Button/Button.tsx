import React from 'react'
import clsx from 'clsx'

export enum ButtonVariant {
  // eslint-disable-next-line no-unused-vars
  Projects = 'Projects',
  // eslint-disable-next-line no-unused-vars
  Secondary = 'secondary',
  // eslint-disable-next-line no-unused-vars
  Icon = 'icon',
}

export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  stretch?: boolean
  variant?: ButtonVariant
}

export const Button: React.FC<ButtonProps> = ({
  onClick = () => {},
  variant = ButtonVariant.Projects,
  stretch,
  children
}) => {
  let className = 'btn-primary bg-Projects text-background hover:saturate-0'
  let widthClass = 'max-w-min'

  if (stretch) {
    widthClass = 'w-full'
  }

  if (variant === ButtonVariant.Secondary) {
    className = 'btn-secondary bg-secondary text-blackbeard'
  }

  if (variant === ButtonVariant.Icon) {
    className = 'btn-circle bg-primary text-white aspect-square'
  }

  return (
    <button className={clsx('btn border-0 text-nowrap text-md hover:bg-background-light hover:text-eggshell', className, widthClass)} onClick={onClick}>
      {children}
    </button>
  )
}

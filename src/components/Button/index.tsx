import * as S from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  children: string
  to?: string
  onClick?: () => void
  title: string
  variant?: 'primary' | 'secondary'
}

const Button = ({
  type,
  children,
  to,
  onClick,
  title,
  variant = 'primary'
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.ButtonContainer
        variant={variant}
        type={type}
        title={title}
        onClick={onClick}
      >
        {children}
      </S.ButtonContainer>
    )
  }

  return (
    <S.ButtonLink title={title} to={to as string}>
      {children}
    </S.ButtonLink>
  )
}

export default Button

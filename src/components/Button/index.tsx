import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  children: string
  to?: string
  onClick?: () => void
  title: string
}

const Button = ({ type, children, to, onClick, title }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink title={title} to={to as string}>
      {children}
    </ButtonLink>
  )
}

export default Button

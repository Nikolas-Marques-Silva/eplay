import * as S from './styles'

type Props = {
  children: React.ReactNode
  title: string
}

const Card = ({ children, title }: Props) => {
  return (
    <S.Container>
      <h2>{title}</h2>
      {children}
    </S.Container>
  )
}

export default Card

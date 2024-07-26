import Tag from '../Tag'

import * as S from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image,
  id
}: Props) => {
  const getDesription = (description: string) => {
    if (description.length > 95) {
      return description.slice(0, 92) + '...'
    }
    return description
  }

  return (
    <S.Card
      title={`Clique aqui para ver mais detalhes do jogo: ${title}`}
      to={`produto/${id}`}
    >
      <img src={image} alt={title} />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info} size="small">
            {info}
          </Tag>
        ))}
      </S.Infos>
      <S.Title>{title}</S.Title>
      <Tag size="small">{category}</Tag>
      <Tag size="small">{system}</Tag>
      <S.Description>{getDesription(description)}</S.Description>
    </S.Card>
  )
}

export default Product

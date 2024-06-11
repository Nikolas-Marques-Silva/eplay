import Tag from '../Tag'
import {
  ProductCard,
  ProductTitle,
  ProductDescription,
  ProductInfos
} from './styles'

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
    <ProductCard to={`produto/${id}`}>
      <img src={image} alt={title} />
      <ProductInfos>
        {infos.map((info) => (
          <Tag key={info} size="small">
            {info}
          </Tag>
        ))}
      </ProductInfos>
      <ProductTitle>{title}</ProductTitle>
      <Tag size="small">{category}</Tag>
      <Tag size="small">{system}</Tag>
      <ProductDescription>{getDesription(description)}</ProductDescription>
    </ProductCard>
  )
}

export default Product

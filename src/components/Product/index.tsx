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
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => {
  return (
    <ProductCard>
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
      <ProductDescription>{description}</ProductDescription>
    </ProductCard>
  )
}

export default Product

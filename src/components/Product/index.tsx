import Tag from '../Tag'
import { ProductCard, ProductTitle, ProductDescription } from './styles'

const Product = () => {
  return (
    <ProductCard>
      <img src="//placehold.it/222x250" alt="" />
      <ProductTitle>Nome do jogo</ProductTitle>
      <Tag size="small">Categoria</Tag>
      <Tag size="small">Windows</Tag>
      <ProductDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        excepturi architecto corrupti soluta quae saepe cumque. Quis inventore
        illo, quisquam blanditiis est nesciunt modi voluptatem ipsum! Quasi
        asperiores voluptates soluta?
      </ProductDescription>
    </ProductCard>
  )
}

export default Product

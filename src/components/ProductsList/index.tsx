import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ title, background }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          <Product
            title="Spider-Man"
            category="Ação"
            system="PS4"
            image="//placehold.it/222x250"
            description="teste"
            infos={['-10%', 'R$250,00']}
          />
          <Product
            title="Spider-Man"
            category="Ação"
            system="PS4"
            image="//placehold.it/222x250"
            description="teste"
            infos={['-10%', 'R$250,00']}
          />
          <Product
            title="Spider-Man"
            category="Ação"
            system="PS4"
            image="//placehold.it/222x250"
            description="teste"
            infos={['-10%', 'R$250,00']}
          />
          <Product
            title="Spider-Man"
            category="Ação"
            system="PS4"
            image="//placehold.it/222x250"
            description="teste"
            infos={['-10%', 'R$250,00']}
          />
        </List>
      </div>
    </Container>
  )
}

export default ProductsList

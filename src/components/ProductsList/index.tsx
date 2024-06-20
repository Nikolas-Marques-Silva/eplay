import Product from '../Product'
import { Container, List } from './styles'
import { Game } from '../../pages/Home'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
  id?: string
}

export const priceFormat = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
const ProductsList = ({ title, background, games, id }: Props) => {
  const getGamesTag = (games: Game) => {
    const tag = []

    if (games.release_date) {
      tag.push(games.release_date)
    }

    if (games.prices.discount) {
      tag.push(`${games.prices.discount}%`)
    }

    if (games.prices.current) {
      tag.push(priceFormat(games.prices.current))
    }

    return tag
  }

  return (
    <Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                id={game.id}
                title={game.name}
                category={game.details.category}
                system={game.details.system}
                image={game.media.thumbnail}
                description={game.description}
                infos={getGamesTag(game)}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList

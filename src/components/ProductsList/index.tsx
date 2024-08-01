import Product from '../Product'

import { priceFormat } from '../../utils'

import * as S from './styles'
import Loader from '../Loader'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games?: Game[]
  id?: string
  isLoading: boolean
}

const ProductsList = ({ title, background, games, id, isLoading }: Props) => {
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

  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <S.List>
          {games &&
            games.map((game) => (
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
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductsList

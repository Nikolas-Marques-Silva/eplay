import Product from '../Product'

import { Game } from '../../pages/Home'

import { priceFormat } from '../../utils'

import * as S from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
  id?: string
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
    <S.Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <S.List>
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
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductsList

import Tag from '../Tag'
import Button from '../Button'

import { priceFormat } from '../../utils'
import { useGetFeaturedGameQuery } from '../../services/api'

import * as S from './styles'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <S.ImageHero style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.HeroTitle>{game.name}</S.HeroTitle>
          <S.Prices>
            De <span>{priceFormat(game.prices.old)}</span> <br />
            por apenas {priceFormat(game.prices.current)}
          </S.Prices>
        </div>
        <Button
          type="link"
          to={`produto/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.ImageHero>
  )
}

export default Banner

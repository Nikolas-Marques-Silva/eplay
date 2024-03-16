import { ImagemHero, HeroTitle, Prices } from './styles'

import HeroIMG from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => {
  return (
    <ImagemHero style={{ backgroundImage: `url(${HeroIMG})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <HeroTitle>
            Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5
          </HeroTitle>
          <Prices>
            De <span>R$ 250,00</span> <br />
            por apenas R$ 99,90
          </Prices>
        </div>
        <Button
          type="link"
          to="/produto"
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </ImagemHero>
  )
}

export default Banner

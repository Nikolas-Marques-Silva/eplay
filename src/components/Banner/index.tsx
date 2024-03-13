import { ImagemHero, HeroTitle, Prices } from './styles'

import HeroIMG from '../../assets/images/banner-homem-aranha.png'

const Banner = () => {
  return (
    <ImagemHero style={{ backgroundImage: `url(${HeroIMG})` }}>
      <div className="container">
        <HeroTitle>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</HeroTitle>
        <Prices>
          De <span>R$ 250,00</span> <br />
          por apenas R$ 99,90
        </Prices>
      </div>
    </ImagemHero>
  )
}

export default Banner

import Game from '../../Models/Game'
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import diablo from '../../assets/images/diablo.png'
import resident from '../../assets/images/resident.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const promotions: Game[] = [
  {
    id: 1,
    title: 'Diablo IV',
    category: 'FPS, Terror',
    system: 'PlayStation 4, PC',
    description: 'test description',
    image: diablo,
    infos: ['10%', 'R$ 250,00']
  },
  {
    id: 2,
    title: 'Resident Evil 7',
    category: 'Survival Horror',
    system: 'PlayStation 4, PC',
    description: 'test description',
    image: resident,
    infos: ['10%', 'R$ 250,00']
  },
  {
    id: 3,
    title: 'Star Wars Jedi: Fallen',
    category: 'Star Wars',
    system: 'PlayStation 4',
    description: 'test description',
    image: starWars,
    infos: ['10%', 'R$ 250,00']
  },
  {
    id: 4,
    title: 'Zelda: Breath of the Wild',
    category: 'Aventura',
    system: 'PlayStation 4',
    description: 'test description',
    image: zelda,
    infos: ['10%', 'R$ 250,00']
  }
]

const soon: Game[] = [
  {
    id: 5,
    title: 'Diablo IV',
    category: 'FPS, Terror',
    system: 'PlayStation 4, PC',
    description: 'test description',
    image: diablo,
    infos: ['25/01']
  },
  {
    id: 6,
    title: 'Resident Evil 7',
    category: 'Action',
    system: 'PlayStation 4, PC',
    description: 'test description',
    image: resident,
    infos: ['25/01']
  },
  {
    id: 7,
    title: 'Star Wars Jedi: Fallen',
    category: 'Star Wars',
    system: 'PlayStation 4',
    description: 'test description',
    image: starWars,
    infos: ['25/01']
  },
  {
    id: 8,
    title: 'Zelda: Breath of the Wild',
    category: 'Aventura',
    system: 'PlayStation 4',
    description: 'test description',
    image: zelda,
    infos: ['25/01']
  }
]

const Home = () => {
  return (
    <>
      <Banner />
      <ProductsList games={promotions} title="Promoções" background="gray" />
      <ProductsList games={soon} title="Em Breve" background="black" />
    </>
  )
}

export default Home

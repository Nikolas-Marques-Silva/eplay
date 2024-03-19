import Game from '../../Models/Game'
import ProductsList from '../../components/ProductsList'
import resident from '../../assets/images/resident.png'

const rpg: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 7',
    category: 'RPG',
    system: 'PlayStation 4, PC',
    description: 'test description',
    image: resident,
    infos: ['25/01']
  },
  {
    id: 2,
    title: 'Resident Evil 7',
    category: 'RPG',
    system: 'PlayStation 4, PC',
    description: 'test description',
    image: resident,
    infos: ['25/01']
  },
  {
    id: 3,
    title: 'Resident Evil 7',
    category: 'RPG',
    system: 'PlayStation 4, PC',
    description: 'test description',
    image: resident,
    infos: ['25/01']
  },
  {
    id: 4,
    title: 'Resident Evil 7',
    category: 'RPG',
    system: 'PlayStation 4, PC',
    description: 'test description',
    image: resident,
    infos: ['25/01']
  }
]

const action: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 7',
    category: 'Action',
    system: 'PlayStation 4, PC',
    description: 'test description',
    image: resident,
    infos: ['25/01']
  },
  {
    id: 2,
    title: 'Resident Evil 7',
    category: 'Action',
    system: 'PlayStation 4, PC',
    description: 'test description',
    image: resident,
    infos: ['25/01']
  },
  {
    id: 3,
    title: 'Resident Evil 7',
    category: 'Action',
    system: 'PlayStation 4, PC',
    description: 'test description',
    image: resident,
    infos: ['25/01']
  },
  {
    id: 4,
    title: 'Resident Evil 7',
    category: 'Action',
    system: 'PlayStation 4, PC',
    description: 'test description',
    image: resident,
    infos: ['25/01']
  }
]

const adventure: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 7',
    category: 'Aventura',
    system: 'PlayStation 4, PC',
    description: 'test description',
    image: resident,
    infos: ['25/01']
  },
  {
    id: 2,
    title: 'Resident Evil 7',
    category: 'Aventura',
    system: 'PlayStation 4, PC',
    description: 'test description',
    image: resident,
    infos: ['25/01']
  },
  {
    id: 3,
    title: 'Resident Evil 7',
    category: 'Aventura',
    system: 'PlayStation 4, PC',
    description: 'test description',
    image: resident,
    infos: ['25/01']
  },
  {
    id: 4,
    title: 'Resident Evil 7',
    category: 'Aventura',
    system: 'PlayStation 4, PC',
    description: 'test description',
    image: resident,
    infos: ['25/01']
  }
]

const fps: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 7',
    category: 'FPS',
    system: 'PlayStation 4, PC',
    description: 'test description',
    image: resident,
    infos: ['25/01']
  },
  {
    id: 2,
    title: 'Resident Evil 7',
    category: 'FPS',
    system: 'PlayStation 4, PC',
    description: 'test description',
    image: resident,
    infos: ['25/01']
  },
  {
    id: 3,
    title: 'Resident Evil 7',
    category: 'FPS',
    system: 'PlayStation 4, PC',
    description: 'test description',
    image: resident,
    infos: ['25/01']
  },
  {
    id: 4,
    title: 'Resident Evil 7',
    category: 'FPS',
    system: 'PlayStation 4, PC',
    description: 'test description',
    image: resident,
    infos: ['25/01']
  }
]

const Categorias = () => {
  return (
    <>
      <ProductsList games={rpg} title="RPG" background="gray" />
      <ProductsList games={action} title="Ação" background="black" />
      <ProductsList games={adventure} title="Aventura" background="gray" />
      <ProductsList games={fps} title="FPS" background="black" />
    </>
  )
}

export default Categorias

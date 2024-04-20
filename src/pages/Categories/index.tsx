import { Game } from '../../pages/Home'
import ProductsList from '../../components/ProductsList'
import { useEffect, useState } from 'react'

const Categorias = () => {
  const [gamesAction, setGamesAction] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])
  const [gamesEsport, setGamesEsport] = useState<Game[]>([])
  const [gamesFight, setGamesFight] = useState<Game[]>([])
  const [gamesSimulation, setGamesSimulation] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRPG(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesEsport(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAction(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesFight(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimulation(res))
  }, [])

  return (
    <>
      <ProductsList games={gamesRPG} title="RPG" background="black" />
      <ProductsList games={gamesAction} title="Ação" background="gray" />
      <ProductsList games={gamesEsport} title="Esportes" background="black" />
      <ProductsList
        games={gamesSimulation}
        title="Simulação"
        background="gray"
      />
      <ProductsList games={gamesFight} title="Luta" background="black" />
    </>
  )
}

export default Categorias

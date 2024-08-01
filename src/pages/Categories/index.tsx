import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightingGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categorias = () => {
  const { data: actionGames, isLoading: actionGamesLoading } =
    useGetActionGamesQuery()
  const { data: rpgGames, isLoading: rpgGamesLoading } = useGetRPGGamesQuery()
  const { data: sportGames, isLoading: sportGamesLoading } =
    useGetSportGamesQuery()
  const { data: simulationGames, isLoading: simulationGamesLoading } =
    useGetSimulationGamesQuery()
  const { data: fightingGames, isLoading: fightingGamesLoading } =
    useGetFightingGamesQuery()

  return (
    <>
      <ProductsList
        games={rpgGames}
        title="RPG"
        background="black"
        id="rpg"
        isLoading={rpgGamesLoading}
      />
      <ProductsList
        games={actionGames}
        title="Ação"
        background="gray"
        id="action"
        isLoading={actionGamesLoading}
      />
      <ProductsList
        games={sportGames}
        title="Esportes"
        background="black"
        id="sport"
        isLoading={sportGamesLoading}
      />
      <ProductsList
        games={simulationGames}
        title="Simulação"
        background="gray"
        id="simulation"
        isLoading={simulationGamesLoading}
      />
      <ProductsList
        games={fightingGames}
        title="Luta"
        background="black"
        id="fighting"
        isLoading={fightingGamesLoading}
      />
    </>
  )
}

export default Categorias

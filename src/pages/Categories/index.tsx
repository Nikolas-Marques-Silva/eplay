import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightingGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categorias = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: rpgGames } = useGetRPGGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightingGames } = useGetFightingGamesQuery()

  if (
    actionGames &&
    rpgGames &&
    sportGames &&
    simulationGames &&
    fightingGames
  ) {
    return (
      <>
        <ProductsList
          games={rpgGames}
          title="RPG"
          background="black"
          id="rpg"
        />
        <ProductsList
          games={actionGames}
          title="Ação"
          background="gray"
          id="action"
        />
        <ProductsList
          games={sportGames}
          title="Esportes"
          background="black"
          id="sport"
        />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="gray"
          id="simulation"
        />
        <ProductsList
          games={fightingGames}
          title="Luta"
          background="black"
          id="fighting"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categorias

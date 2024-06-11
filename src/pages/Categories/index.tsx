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
        <ProductsList games={rpgGames} title="RPG" background="black" />
        <ProductsList games={actionGames} title="Ação" background="gray" />
        <ProductsList games={sportGames} title="Esportes" background="black" />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="gray"
        />
        <ProductsList games={fightingGames} title="Luta" background="black" />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categorias

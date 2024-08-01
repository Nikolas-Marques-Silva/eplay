import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: soonGames, isLoading: soonGamesLoading } = useGetSoonQuery()
  const { data: onSaleGames, isLoading: onSaleGamesLoading } =
    useGetOnSaleQuery()

  return (
    <>
      <Banner />
      <ProductsList
        games={onSaleGames}
        title="Promoções"
        background="gray"
        id="on-sale"
        isLoading={onSaleGamesLoading}
      />
      <ProductsList
        games={soonGames}
        title="Em Breve"
        background="black"
        id="coming-soon"
        isLoading={soonGamesLoading}
      />
    </>
  )
}

export default Home

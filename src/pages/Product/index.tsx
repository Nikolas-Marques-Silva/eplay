import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import { useGetGameQuery } from '../../services/api'

const Product = () => {
  const { id } = useParams()

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: game } = useGetGameQuery(id!)

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <div>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system} <br />
          <b>Desenvolvedor:</b> {game.details.developer} <br />
          <b>Distribuidora:</b> {game.details.publisher} <br />
          <b>Idiomas:</b> O jogo oferece suporte a vários idiomas, incluindo:{' '}
          {game.details.languages.join(', ')} <br />
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        itens={game.media.gallery}
      />
    </div>
  )
}

export default Product

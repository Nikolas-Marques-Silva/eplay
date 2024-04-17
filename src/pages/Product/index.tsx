import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

const Product = () => {
  const { id } = useParams()
  return (
    <div>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Hogwarts Legacy é um RPG de ação imersivo e de mundo aberto ambientado
          no mundo introduzido pela primeira vez nos livros do Harry Potter.
          Embarque em uma jornada por locais novos e familiares enquanto explora
          e descubra animais fantásticos, personalize seu personagem e crie
          poções, domine o lançamento de feitiços, aprimore talentos e torne-se
          o bruxo que deseja ser. Experimente Hogwarts da década de 1800. Seu
          personagem é um estudante com chave de um antigo segredo que ameaça
          destruir o mundo bruxo. Faça aliados, lute contra os bruxos das trevas
          e decida o destino do mundo bruxo. Seu legado é o que você faz dele.
          Viva o Inesperado.
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>TÍTULO:</b> Hogwarts Legacy GÊNERO: Ação, Aventura, RPG <br />
          <b>DESENVOLVEDOR:</b> Avalanche Software <br />
          <b>DISTRIBUIDORA:</b> Warner Bros. Games SÉRIE: WB Games <br />
          <b>DATA DE LANÇAMENTO:</b> 10/fev./2023
        </p>
      </Section>
      <Section title="Galeria" background="black">
        <div>Fotos</div>
      </Section>
    </div>
  )
}

export default Product

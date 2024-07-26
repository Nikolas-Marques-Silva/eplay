import * as S from './styles'

const Footer = () => {
  return (
    <S.Container>
      <div className="container">
        <S.FooterSection>
          <S.SectionTitle>Categorias</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link
                title="Clique aqui para ver os jogos de RPG"
                to="/categorias#rpg"
              >
                RPG
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para ver os jogos de Ação"
                to="/categorias#action"
              >
                Ação
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para ver os jogos de Luta"
                to="/categorias#fighting"
              >
                Luta
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para ver os jogos de Simulação"
                to="/categorias#simulation"
              >
                Simulação
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para ver os jogos de Esportes"
                to="/categorias#sport"
              >
                Esportes
              </S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <S.FooterSection>
          <S.SectionTitle>Acesso Rápido</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link title="Clique aqui para ver as promocões" to="/#on-sale">
                Promoções
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para ver os jogos em breve"
                to="/#coming-soon"
              >
                Em Breve
              </S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <p>
          {new Date().getFullYear()} - &copy; EPLAY Todos os direitos reservados
        </p>
      </div>
    </S.Container>
  )
}

export default Footer

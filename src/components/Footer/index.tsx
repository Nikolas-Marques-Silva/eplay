import { Container, Links, Link, SectionTitle, FooterSection } from './styles'

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <FooterSection>
          <SectionTitle>Categorias</SectionTitle>
          <Links>
            <li>
              <Link to="/categorias#rpg">RPG</Link>
            </li>
            <li>
              <Link to="/categorias#action">Ação</Link>
            </li>
            <li>
              <Link to="/categorias#fighting">Luta</Link>
            </li>
            <li>
              <Link to="/categorias#simulation">Simulação</Link>
            </li>
            <li>
              <Link to="/categorias#sport">Esportes</Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso Rápido</SectionTitle>
          <Links>
            <li>
              <Link to="/#on-sale">Promoções</Link>
            </li>
            <li>
              <Link to="/#coming-soon">Em Breve</Link>
            </li>
          </Links>
        </FooterSection>
        <p>
          {new Date().getFullYear()} - &copy; EPLAY Todos os direitos reservados
        </p>
      </div>
    </Container>
  )
}

export default Footer

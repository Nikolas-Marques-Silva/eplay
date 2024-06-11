import {
  Container,
  Links,
  LinkItem,
  SectionTitle,
  FooterSection
} from './styles'

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <FooterSection>
          <SectionTitle>Categorias</SectionTitle>
          <Links>
            <li>
              <LinkItem>RPG</LinkItem>
            </li>
            <li>
              <LinkItem>Ação</LinkItem>
            </li>
            <li>
              <LinkItem>Aventura</LinkItem>
            </li>
            <li>
              <LinkItem>FPS</LinkItem>
            </li>
            <li>
              <LinkItem>Simulação</LinkItem>
            </li>
            <li>
              <LinkItem>Plataforma</LinkItem>
            </li>
            <li>
              <LinkItem>Esportes</LinkItem>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso Rápido</SectionTitle>
          <Links>
            <li>
              <LinkItem>Novidades</LinkItem>
            </li>
            <li>
              <LinkItem>Promoções</LinkItem>
            </li>
            <li>
              <LinkItem>Em Breve</LinkItem>
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

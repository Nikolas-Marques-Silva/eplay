import { HeaderBar, Links, Link, LinkCart } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => {
  return (
    <HeaderBar>
      <div>
        <img src={logo} alt="EPLAY logo" />
        <nav>
          <Links>
            <Link>
              <a href="#">Categorias</a>
            </Link>
            <Link>
              <a href="#">Novidades</a>
            </Link>
            <Link>
              <a href="#">Promoções</a>
            </Link>
          </Links>
        </nav>
      </div>
      <LinkCart href="#">
        0 = Produto(s) <img src={carrinho} alt="Carrinho" />
      </LinkCart>
    </HeaderBar>
  )
}

export default Header

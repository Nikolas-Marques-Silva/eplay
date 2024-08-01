import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HashLink } from 'react-router-hash-link'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link to="/">
            <h1>
              <img src={logo} alt="EPLAY logo" />
            </h1>
          </Link>
          <nav className={isMenuOpen ? 'is-open' : ''}>
            <S.Links>
              <S.LinkItem>
                <Link
                  title="Clique aqui para ver as categorias"
                  to="/categorias"
                >
                  Categorias
                </Link>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para ver as promocões"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para ver as novidades"
                  to="/#coming-soon"
                >
                  Em-breve
                </HashLink>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <S.CartLink role="button" onClick={openCart}>
          {items.length}
          <span> - Produto(s)</span>
          <img src={carrinho} alt="Carrinho" />
        </S.CartLink>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItem>
            <Link
              onClick={() => setIsMenuOpen(false)}
              title="Clique aqui para ver as categorias"
              to="/categorias"
            >
              Categorias
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              onClick={() => setIsMenuOpen(false)}
              title="Clique aqui para ver as promocões"
              to="/#on-sale"
            >
              Promoções
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              onClick={() => setIsMenuOpen(false)}
              title="Clique aqui para ver as novidades"
              to="/#coming-soon"
            >
              Em-breve
            </HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header

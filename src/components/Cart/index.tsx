import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import Tag from '../Tag'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { priceFormat, getTotalPrice } from '../../utils'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    closeCart()
    navigate('/checkout')
  }

  return (
    <S.Container className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.Item key={item.id}>
                  <img src={item.media.thumbnail} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{priceFormat(item.prices.current)}</span>
                  </div>
                  <button
                    style={{ cursor: 'pointer' }}
                    onClick={() => removeItem(item.id)}
                    type="button"
                  />
                </S.Item>
              ))}
            </ul>
            <S.Descricption>{items.length} jogo(s) no carrinho</S.Descricption>
            <S.Prices>
              Total de {priceFormat(getTotalPrice(items))}{' '}
              <span>em até 6x sem juros</span>
            </S.Prices>
            <Button
              title="Clique aqui para prosseguir com a sua compra"
              type="button"
              onClick={goToCheckout}
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <p className="empty-cart">
            O carrinho esta vazio, adicione um produto para continuar com a
            compra
          </p>
        )}
      </S.Sidebar>
    </S.Container>
  )
}

export default Cart

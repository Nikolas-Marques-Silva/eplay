import Button from '../Button'
import * as S from './styles'

import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'
import { priceFormat } from '../ProductsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return items.reduce((acc, item) => (acc += item.prices.current!), 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.Container className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
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
              <button onClick={() => removeItem(item.id)} type="button" />
            </S.Item>
          ))}
        </ul>
        <S.Descricption>{items.length} jogo(s) no carrinho</S.Descricption>
        <S.Prices>
          Total de {priceFormat(getTotalPrice())}{' '}
          <span>em até 6x sem juros</span>
        </S.Prices>
        <Button
          title="Clique aqui para prosseguir com a sua compra"
          type="button"
        >
          Continuar com a compra
        </Button>
      </S.Sidebar>
    </S.Container>
  )
}

export default Cart

import Button from '../Button'
import * as S from './styles'

import starWars from '../../assets/images/star_wars.png'
import Tag from '../Tag'

const Cart = () => {
  return (
    <S.Container>
      <S.Overlay />
      <S.Sidebar>
        <ul>
          <S.Item>
            <img src={starWars} alt="" />
            <div>
              <h3>Nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </S.Item>
          <S.Item>
            <img src={starWars} alt="" />
            <div>
              <h3>Nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </S.Item>
        </ul>
        <S.Descricption>X jogo(s) no carrinho</S.Descricption>
        <S.Prices>
          Total de R$XXX.XX <span>em até Xx sem juros</span>
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

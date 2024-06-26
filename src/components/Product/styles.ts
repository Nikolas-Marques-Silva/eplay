import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const ProductCard = styled(Link)`
  background-color: ${colors.gray};
  border-radius: 8px;
  padding: 8px;
  position: relative;
  color: ${colors.white};
  display: block;

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const ProductTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const ProductDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`

export const ProductInfos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

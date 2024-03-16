import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  background-color: transparent;
  border-radius: 8px;
  border: 2px solid ${colors.white};
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
  padding: 8px;
`

export const ButtonLink = styled(Link)`
  background-color: transparent;
  border-radius: 8px;
  border: 2px solid ${colors.white};
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
  padding: 8px;
`

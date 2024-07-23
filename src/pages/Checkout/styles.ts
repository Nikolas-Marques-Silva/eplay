import styled from 'styled-components'
import { colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  active: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  align-items: flex-end;

  margin-top: ${({ marginTop }) => marginTop || '0'};
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${({ maxWidth }) => maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${colors.white};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${colors.lightGray};
    border-radius: 8px;
    width: 100%;
  }
`

export const TabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${({ active }) => (active ? colors.green : colors.gray)};
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 0 8px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`

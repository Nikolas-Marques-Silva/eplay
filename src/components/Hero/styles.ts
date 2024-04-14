import styled from 'styled-components'
import { colors } from '../../styles'

export const Banner = styled.div`
  height: 480px;
  display: block;
  width: 100%;

  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  position: relative;

  padding-top: 16px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.56;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`

export const Infos = styled.div`
  background-color: ${colors.black};
  padding: 16px;
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
